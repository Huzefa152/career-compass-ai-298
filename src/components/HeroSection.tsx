import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-secondary px-4 py-2 rounded-full border border-border/50 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Career Intelligence</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Discover Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Perfect Career Path
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Let our AI analyze your skills, interests, and goals to recommend personalized career paths 
              with growth opportunities and learning roadmaps.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-primary hover:animate-glow shadow-glow text-lg px-8 py-4 h-auto"
            >
              Start Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border/50 hover:bg-accent text-lg px-8 py-4 h-auto"
            >
              See How It Works
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-secondary border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Analysis</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your unique combination of skills, interests, and career goals.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-secondary border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Recommendations</h3>
              <p className="text-muted-foreground">
                Get tailored career suggestions with growth rates and market demand insights.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-secondary border border-border/50 backdrop-blur-sm hover:shadow-soft transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Learning Roadmaps</h3>
              <p className="text-muted-foreground">
                Receive step-by-step learning paths to achieve your career objectives.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-16 border-t border-border/50">
            <p className="text-muted-foreground mb-8">Trusted by professionals worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-muted-foreground">|</div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-muted-foreground">|</div>
              <div className="text-2xl font-bold">500+</div>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground mt-2">
              <div>Users Helped</div>
              <div className="opacity-0">|</div>
              <div>Satisfaction Rate</div>
              <div className="opacity-0">|</div>
              <div>Career Paths</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;