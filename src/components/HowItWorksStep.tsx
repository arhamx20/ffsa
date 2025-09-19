interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function HowItWorksStep({ step, title, description, isLast }: HowItWorksStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-brand text-white font-bold">
            {step}
          </div>
          {!isLast && (
            <div className="mt-4 ml-5 h-12 w-0.5 bg-gradient-to-b from-brand to-transparent opacity-30"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}