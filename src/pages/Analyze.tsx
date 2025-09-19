import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ScoreBadge } from "@/components/ScoreBadge";
import { FileUpload } from "@/components/FileUpload";
import { toast } from "sonner";
import { 
  Upload, 
  FileText, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Lightbulb,
  Download,
  Share2
} from "lucide-react";

export default function Analyze() {
  const [step, setStep] = useState<"upload" | "analyzing" | "results">("upload");
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleAnalyze = () => {
    if (!selectedFile) {
      toast.error("Please upload a resume first");
      return;
    }
    
    setStep("analyzing");
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("results");
          return 100;
        }
        return prev + 20;
      });
    }, 600);
  };

  const handleAnalyzeAnother = () => {
    setStep("upload");
    setProgress(0);
    setSelectedFile(null);
    setJobTitle("");
    setJobDescription("");
  };

  const handleExport = () => {
    toast.success("Export feature coming soon!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Share link copied to clipboard!");
  };

  const renderUploadStep = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Upload Resume
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FileUpload
            onFileSelect={setSelectedFile}
            accept=".pdf"
            maxSize={5}
            placeholder="Choose File"
          />
        </CardContent>
      </Card>

      {/* Job Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Job Details (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input 
              id="jobTitle" 
              placeholder="e.g. Senior Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea 
              id="jobDescription" 
              placeholder="Paste the job description here for targeted analysis..."
              rows={6}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={handleAnalyze} className="px-8">
          <BarChart3 className="h-5 w-5 mr-2" />
          Analyze Resume
        </Button>
      </div>
    </div>
  );

  const renderAnalyzingStep = () => (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="animate-pulse">
        <BarChart3 className="h-16 w-16 text-brand mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Analyzing Your Resume</h2>
        <p className="text-muted-foreground mb-6">
          Our AI is extracting text, scoring ATS compatibility, and identifying improvement opportunities...
        </p>
      </div>
      
      <div className="space-y-3">
        <Progress value={progress} className="h-3" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Processing...</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );

  const renderResultsStep = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Score Overview */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <ScoreBadge score={78} size="lg" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Good ATS Compatibility</h2>
            <p className="text-muted-foreground">
              Your resume passes most ATS systems. Here's how to make it even better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Keyword Match</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-2">72%</div>
              <div className="text-sm text-muted-foreground">Format Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Skills Match</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Strengths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-success">
              <CheckCircle className="h-5 w-5 mr-2" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-success mt-1 mr-3 flex-shrink-0" />
                <span>Strong technical keyword coverage (React, Node.js, AWS)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-success mt-1 mr-3 flex-shrink-0" />
                <span>Well-structured sections with clear headings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-success mt-1 mr-3 flex-shrink-0" />
                <span>Quantified achievements with specific metrics</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-warning">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-warning mt-1 mr-3 flex-shrink-0" />
                <span>Missing industry keywords: "microservices", "CI/CD"</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-warning mt-1 mr-3 flex-shrink-0" />
                <span>Use more action verbs in bullet points</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-4 w-4 text-warning mt-1 mr-3 flex-shrink-0" />
                <span>Consider adding a skills section</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="h-5 w-5 mr-2" />
            Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2">1. Add Missing Keywords</h4>
              <p className="text-sm text-muted-foreground">
                Include "microservices", "CI/CD", and "agile methodology" in your experience section
              </p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold mb-2">2. Strengthen Bullet Points</h4>
              <p className="text-sm text-muted-foreground">
                Replace "Responsible for" with action verbs like "Developed", "Implemented", "Led"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <Button size="lg" variant="outline" onClick={handleExport}>
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </Button>
        <Button size="lg" variant="outline" onClick={handleShare}>
          <Share2 className="h-5 w-5 mr-2" />
          Share Results
        </Button>
        <Button size="lg" onClick={handleAnalyzeAnother}>
          Analyze Another
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Resume Analysis</h1>
          <p className="text-muted-foreground">
            Get detailed ATS scoring and actionable improvement insights
          </p>
        </div>

        {step === "upload" && renderUploadStep()}
        {step === "analyzing" && renderAnalyzingStep()}
        {step === "results" && renderResultsStep()}
      </div>
    </div>
  );
}