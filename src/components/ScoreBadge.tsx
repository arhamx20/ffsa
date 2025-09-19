import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function ScoreBadge({ score, size = "md", showLabel = true }: ScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-success text-white";
    if (score >= 60) return "bg-warning text-white";
    return "bg-error text-white";
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "sm":
        return "text-xs px-2 py-1";
      case "lg":
        return "text-lg px-4 py-2";
      default:
        return "text-sm px-3 py-1.5";
    }
  };

  return (
    <Badge 
      className={cn(
        "font-semibold rounded-full",
        getScoreColor(score),
        getSizeClasses(size)
      )}
    >
      {score}
      {showLabel && (
        <span className="ml-1 opacity-90">
          {size === "sm" ? "" : "/ 100"}
        </span>
      )}
    </Badge>
  );
}