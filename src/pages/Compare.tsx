import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  GitCompare, 
  Trophy,
  Target,
  Download,
  Share2,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export default function Compare() {
  const [step, setStep] = useState<"upload" | "analyzing" | "results">("upload");
  const [progress, setProgress] = useState(0);

  const handleCompare = () => {
    setStep("analyzing");
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("results");
          return 100;
        }
        return prev + 25;
      });
    }, 800);
  };

  const renderUploadStep = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Resume Uploads */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Resume A</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-brand/50 transition-colors cursor-pointer">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-3">Upload first resume</p>
              <Button variant="outline" size="sm">Choose File</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resume B</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-brand/50 transition-colors cursor-pointer">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-3">Upload second resume</p>
              <Button variant="outline" size="sm">Choose File</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Job Description
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input id="jobTitle" placeholder="e.g. Senior Software Engineer" />
          </div>
          <div>
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea 
              id="jobDescription" 
              placeholder="Paste the full job description here..."
              rows={6}
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={handleCompare} className="px-8">
          <GitCompare className="h-5 w-5 mr-2" />
          Compare Resumes
        </Button>
      </div>
    </div>
  );

  const renderAnalyzingStep = () => (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="animate-pulse">
        <GitCompare className="h-16 w-16 text-brand mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Comparing Resumes</h2>
        <p className="text-muted-foreground mb-6">
          Analyzing both resumes against the job description and identifying the best match...
        </p>
      </div>
      
      <div className="space-y-3">
        <Progress value={progress} className="h-3" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Processing comparison...</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );

  const renderResultsStep = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Winner Declaration */}
      <Card className="bg-gradient-brand text-white">
        <CardContent className="p-8 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Resume A Wins!</h2>
          <p className="text-lg opacity-90">
            Better keyword match and stronger experience alignment for this role
          </p>
        </CardContent>
      </Card>

      {/* Score Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-success">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Resume A</span>
              <Badge className="bg-success text-white">Winner</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <ScoreBadge score={82} size="lg" />
              <p className="text-sm text-muted-foreground mt-2">Fit Score</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-success">78</div>
                <div className="text-xs text-muted-foreground">ATS Score</div>
              </div>
              <div>
                <div className="text-xl font-bold text-success">89%</div>
                <div className="text-xs text-muted-foreground">Keywords</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resume B</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <ScoreBadge score={74} size="lg" />
              <p className="text-sm text-muted-foreground mt-2">Fit Score</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-bold">71</div>
                <div className="text-xs text-muted-foreground">ATS Score</div>
              </div>
              <div>
                <div className="text-xl font-bold">76%</div>
                <div className="text-xs text-muted-foreground">Keywords</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Criteria</th>
                  <th className="text-center py-3 px-4">Resume A</th>
                  <th className="text-center py-3 px-4">Resume B</th>
                  <th className="text-left py-3 px-4">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4 font-medium">Keyword Coverage</td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-success text-white">89%</Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="secondary">76%</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <CheckCircle className="h-4 w-4 text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Experience Match</td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-success text-white">85%</Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="secondary">72%</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <CheckCircle className="h-4 w-4 text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Skills Alignment</td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="secondary">78%</Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-success text-white">88%</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Format Quality</td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-success text-white">92%</Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="secondary">68%</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <CheckCircle className="h-4 w-4 text-success" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <h4 className="font-semibold text-success mb-2">✓ Go with Resume A</h4>
              <p className="text-sm">
                Resume A shows stronger alignment with the job requirements, particularly in keyword coverage and relevant experience. The candidate demonstrates more direct experience with the required technologies.
              </p>
            </div>
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 className="font-semibold text-warning mb-2">⚠ Areas to Improve (Resume A)</h4>
              <ul className="text-sm space-y-1">
                <li>• Add more specific skills mentioned in the job description</li>
                <li>• Include industry certifications if available</li>
                <li>• Quantify achievements with more metrics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <Button size="lg" variant="outline">
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </Button>
        <Button size="lg" variant="outline">
          <Share2 className="h-5 w-5 mr-2" />
          Share Results
        </Button>
        <Button size="lg">
          Compare Again
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Resume Comparison</h1>
          <p className="text-muted-foreground">
            Compare two resumes against a job description to find the best match
          </p>
        </div>

        {step === "upload" && renderUploadStep()}
        {step === "analyzing" && renderAnalyzingStep()}
        {step === "results" && renderResultsStep()}
      </div>
    </div>
  );
}