import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FileText, X } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  placeholder?: string;
  className?: string;
}

export function FileUpload({ 
  onFileSelect, 
  accept = ".pdf",
  maxSize = 5,
  placeholder = "Choose File",
  className = ""
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = useCallback((file: File | null) => {
    if (file) {
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        toast.error(`File size must be less than ${maxSize}MB`);
        return;
      }

      // Check file type
      if (accept && !file.name.toLowerCase().endsWith(accept.replace(".", ""))) {
        toast.error(`Please select a ${accept.toUpperCase()} file`);
        return;
      }

      setSelectedFile(file);
      onFileSelect(file);
      toast.success("File uploaded successfully");
    } else {
      setSelectedFile(null);
      onFileSelect(null);
    }
  }, [maxSize, accept, onFileSelect]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      
      {selectedFile ? (
        <div className="border border-border rounded-lg p-4 bg-accent/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-brand mr-3" />
              <div>
                <p className="font-medium text-sm">{selectedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragOver
              ? "border-brand bg-brand/5"
              : "border-border hover:border-brand/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
        >
          <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-3">
            Drop your resume here or click to browse
          </p>
          <Button variant="outline" size="sm">
            {placeholder}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Supports PDF files up to {maxSize}MB
          </p>
        </div>
      )}
    </div>
  );
}