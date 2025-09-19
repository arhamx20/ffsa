import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { 
  FileSearch, 
  BarChart3, 
  GitCompare, 
  FileDown, 
  Zap,
  Shield,
  FileText,
  CheckCircle,
  ArrowRight,
  Target,
  Brain,
  Globe
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Resume Analysis
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Optimize Your Resume for{" "}
                <span className="gradient-text">ATS Success</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Instant ATS scores, keyword insights, and actionable fixes. 
                Compare resumes and export professional reports.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8 py-4 text-lg shadow-brand hover:shadow-lg transition-all" onClick={() => window.location.href = '/analyze'}>
                  <FileSearch className="h-5 w-5 mr-2" />
                  Analyze Your Resume
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg" onClick={() => window.location.href = '/compare'}>
                  <GitCompare className="h-5 w-5 mr-2" />
                  Compare Resumes
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-success" />
                  No Signup Required
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-success" />
                  Privacy Protected
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-success" />
                  Export Reports
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up hidden lg:block">
              <img 
                src={heroImage} 
                alt="Resume analysis dashboard showing ATS scores and optimization insights" 
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive analysis helps you stand out from the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={FileSearch}
              title="PDF Parsing"
              description="Advanced text extraction and cleanup from any PDF resume format"
            />
            <FeatureCard
              icon={BarChart3}
              title="ATS Scoring"
              description="Get a detailed 0-100 ATS score with transparent rubric breakdown"
              gradient={true}
            />
            <FeatureCard
              icon={GitCompare}
              title="Resume Compare"
              description="Side-by-side comparison with job description matching analysis"
            />
            <FeatureCard
              icon={FileDown}
              title="Export Reports"
              description="Professional PDF reports and shareable public links"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get professional insights in three simple steps
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <HowItWorksStep
                step={1}
                title="Upload Your Resume"
                description="Drag and drop your PDF resume. We support all standard formats and automatically clean up the text for optimal analysis."
              />
              <HowItWorksStep
                step={2}
                title="Add Job Description (Optional)"
                description="Paste the job description to get targeted keyword matching and fit scoring. Skip this step for general ATS analysis."
              />
              <HowItWorksStep
                step={3}
                title="Get Actionable Insights"
                description="Receive detailed scoring, keyword gaps, formatting suggestions, and a professional report you can share or export."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Resume?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've improved their ATS scores and landed more interviews.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-4 text-lg" onClick={() => window.location.href = '/analyze'}>
            Start Free Analysis
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-brand">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Resume Orchestrator</span>
            </div>
            
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Resume Orchestrator. Built with love for job seekers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}