import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, gradient = false }: FeatureCardProps) {
  return (
    <Card className={`hover-lift transition-all duration-300 border-border hover:border-brand/20 ${gradient ? 'bg-gradient-brand text-white' : ''}`}>
      <CardContent className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
          gradient ? 'bg-white/20' : 'bg-brand/10'
        }`}>
          <Icon className={`h-6 w-6 ${gradient ? 'text-white' : 'text-brand'}`} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`text-sm leading-relaxed ${gradient ? 'text-white/90' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}