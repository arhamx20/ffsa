import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileSearch, 
  GitCompare, 
  History, 
  BarChart3,
  FileText,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume Analysis Dashboard</h1>
          <p className="text-muted-foreground">
            Analyze, compare, and optimize your resumes for ATS success
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={FileText}
            title="Total Analyses"
            value="1,247"
            subtitle="+12% this week"
            trend="up"
          />
          <StatCard
            icon={BarChart3}
            title="Average ATS Score"
            value="76"
            subtitle="Industry benchmark: 65"
            trend="up"
          />
          <StatCard
            icon={Users}
            title="Success Rate"
            value="89%"
            subtitle="Users with 80+ scores"
            trend="up"
          />
          <StatCard
            icon={TrendingUp}
            title="Improvement"
            value="+18pts"
            subtitle="Average score increase"
            trend="up"
          />
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <FeatureCard
            icon={FileSearch}
            title="Analyze Single Resume"
            description="Upload your resume and get detailed ATS scoring with actionable insights"
            gradient={true}
          />
          <FeatureCard
            icon={GitCompare}
            title="Compare Resumes"
            description="Compare two resumes against a job description to find the best match"
          />
          <FeatureCard
            icon={History}
            title="Analysis History"
            description="View your previous analyses and track improvements over time"
          />
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button className="h-auto p-6 flex-col space-y-2" variant="outline" onClick={() => window.location.href = '/analyze'}>
                <FileSearch className="h-8 w-8 mb-2" />
                <span className="text-lg font-semibold">Start Analysis</span>
                <span className="text-sm text-muted-foreground">Upload PDF resume</span>
              </Button>
              <Button className="h-auto p-6 flex-col space-y-2" variant="outline" onClick={() => window.location.href = '/compare'}>
                <GitCompare className="h-8 w-8 mb-2" />
                <span className="text-lg font-semibold">Compare Mode</span>
                <span className="text-sm text-muted-foreground">Upload 2 resumes + JD</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}