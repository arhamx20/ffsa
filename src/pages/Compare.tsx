"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils"; // if you don't have this, replace cn(...) with string literals
import { toast } from "sonner";

type Props = {
  id?: string;
  accept?: string;          // ".pdf" or "application/pdf"
  maxSize?: number;         // in MB (default 5)
  placeholder?: string;     // button text
  onFileSelect: (file: File | null) => void;
  className?: string;
};

export function FileUpload({
  id = "file-input",
  accept = ".pdf",
  maxSize = 5,
  placeholder = "Choose File",
  onFileSelect,
  className
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");

  const openPicker = () => inputRef.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files || !files.length) return;
    const file = files[0];

    // type check (accept can be ".pdf" or "application/pdf")
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      toast.error("Only PDF files are supported");
      onFileSelect(null);
      return;
    }

    // size check
    const limitBytes = maxSize * 1024 * 1024;
    if (file.size > limitBytes) {
      toast.error(`File too large (max ${maxSize} MB)`);
      onFileSelect(null);
      return;
    }

    setName(file.name);
    onFileSelect(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border/60 bg-muted/10 p-4",
        "focus-within:ring-2 focus-within:ring-ring/40",
        className
      )}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={openPicker}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openPicker()}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border/70 p-8 text-center hover:border-foreground/40 cursor-pointer"
        style={{ pointerEvents: "auto" }}  // ensure clickable
      >
        <div className="text-sm text-muted-foreground">
          Drag & drop your PDF here, or
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg border px-4 py-2">
          {placeholder}
        </div>
        {name && (
          <div className="mt-2 text-xs text-muted-foreground">Selected: <strong>{name}</strong></div>
        )}
      </div>

      {/* Hidden but accessible input */}
      <input
        ref={inputRef}
        id={id}
        name={id}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={onChange}
      />

      <p className="mt-3 text-xs text-muted-foreground">PDF only • Max {maxSize} MB</p>
    </div>
  );
}
