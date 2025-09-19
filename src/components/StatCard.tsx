import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({ icon: Icon, title, value, subtitle, trend }: StatCardProps) {
  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-error";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="hover-lift transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
            {subtitle && (
              <p className={`text-sm mt-1 ${getTrendColor(trend)}`}>
                {subtitle}
              </p>
            )}
          </div>
          <div className="bg-brand/10 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-brand" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}