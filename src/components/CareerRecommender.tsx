import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Target, TrendingUp, BookOpen, Users, Code, Palette, BarChart3 } from "lucide-react";

interface UserProfile {
  name: string;
  skills: string[];
  interests: string[];
  experience: string;
  goals: string;
}

interface CareerRecommendation {
  title: string;
  match: number;
  description: string;
  requiredSkills: string[];
  growthRate: string;
  icon: any;
  learningPath: string[];
}

const CareerRecommender = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    skills: [],
    interests: [],
    experience: "",
    goals: ""
  });
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  const skillOptions = [
    "JavaScript", "Python", "React", "Data Analysis", "Design", "Marketing", 
    "Project Management", "Communication", "Problem Solving", "Leadership",
    "Machine Learning", "SQL", "UI/UX Design", "Content Writing", "Sales"
  ];

  const interestOptions = [
    "Technology", "Creative Arts", "Business", "Healthcare", "Education",
    "Finance", "Environment", "Gaming", "Social Impact", "Research",
    "Startups", "Data Science", "Artificial Intelligence", "Marketing"
  ];

  const generateRecommendations = () => {
    const mockRecommendations: CareerRecommendation[] = [
      {
        title: "Full Stack Developer",
        match: 92,
        description: "Build end-to-end web applications using modern frameworks and technologies.",
        requiredSkills: ["JavaScript", "React", "Node.js", "Databases"],
        growthRate: "+22% by 2032",
        icon: Code,
        learningPath: ["Master React", "Learn Node.js", "Database Design", "DevOps Basics"]
      },
      {
        title: "Data Scientist",
        match: 87,
        description: "Extract insights from data to drive business decisions and innovation.",
        requiredSkills: ["Python", "Machine Learning", "Statistics", "SQL"],
        growthRate: "+35% by 2032",
        icon: BarChart3,
        learningPath: ["Advanced Python", "ML Algorithms", "Data Visualization", "Cloud Platforms"]
      },
      {
        title: "UX/UI Designer",
        match: 85,
        description: "Create intuitive and beautiful user experiences for digital products.",
        requiredSkills: ["Design Thinking", "Figma", "User Research", "Prototyping"],
        growthRate: "+13% by 2032",
        icon: Palette,
        learningPath: ["Design Systems", "User Psychology", "Accessibility", "Design Tools"]
      }
    ];

    setRecommendations(mockRecommendations);
    setStep(4);
  };

  const handleSkillToggle = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card className="p-8 bg-gradient-secondary border-border/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Target className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-2xl font-bold">Tell us about yourself</h2>
                <p className="text-muted-foreground">Let's start with some basic information</p>
              </div>
              
              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <Label htmlFor="name">What's your name?</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="experience">Your experience level</Label>
                  <select
                    className="mt-2 w-full p-3 rounded-md bg-input border border-border text-foreground"
                    value={profile.experience}
                    onChange={(e) => setProfile(prev => ({ ...prev, experience: e.target.value }))}
                  >
                    <option value="">Select experience level</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior Level (5+ years)</option>
                    <option value="student">Student/Recent Graduate</option>
                  </select>
                </div>

                <Button 
                  onClick={() => setStep(2)} 
                  disabled={!profile.name || !profile.experience}
                  className="w-full bg-gradient-primary hover:animate-glow"
                >
                  Continue
                </Button>
              </div>
            </div>
          </Card>
        );

      case 2:
        return (
          <Card className="p-8 bg-gradient-secondary border-border/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Sparkles className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-2xl font-bold">What are your skills?</h2>
                <p className="text-muted-foreground">Select all that apply to you</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
                {skillOptions.map((skill) => (
                  <Badge
                    key={skill}
                    variant={profile.skills.includes(skill) ? "default" : "secondary"}
                    className={`cursor-pointer transition-all ${
                      profile.skills.includes(skill) 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "hover:bg-accent"
                    }`}
                    onClick={() => handleSkillToggle(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button 
                  onClick={() => setStep(3)} 
                  disabled={profile.skills.length === 0}
                  className="bg-gradient-primary hover:animate-glow"
                >
                  Continue
                </Button>
              </div>
            </div>
          </Card>
        );

      case 3:
        return (
          <Card className="p-8 bg-gradient-secondary border-border/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-2xl font-bold">What interests you?</h2>
                <p className="text-muted-foreground">Choose areas that excite you</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
                {interestOptions.map((interest) => (
                  <Badge
                    key={interest}
                    variant={profile.interests.includes(interest) ? "default" : "secondary"}
                    className={`cursor-pointer transition-all ${
                      profile.interests.includes(interest) 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "hover:bg-accent"
                    }`}
                    onClick={() => handleInterestToggle(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <Label htmlFor="goals">What are your career goals?</Label>
                <Input
                  id="goals"
                  value={profile.goals}
                  onChange={(e) => setProfile(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="e.g., Lead a team, Start my own company, Work remotely..."
                  className="mt-2"
                />
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button 
                  onClick={generateRecommendations} 
                  disabled={profile.interests.length === 0}
                  className="bg-gradient-primary hover:animate-glow"
                >
                  Get My Recommendations
                </Button>
              </div>
            </div>
          </Card>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-primary p-4 rounded-full">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Your Career Recommendations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Based on your skills, interests, and goals, here are personalized career paths for you, {profile.name}!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((rec, index) => (
                <Card key={index} className="p-6 bg-gradient-secondary border-border/50 backdrop-blur-sm hover:shadow-glow transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <rec.icon className="h-8 w-8 text-primary" />
                      <Badge className="bg-success text-success-foreground">
                        {rec.match}% match
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{rec.title}</h3>
                      <p className="text-muted-foreground text-sm">{rec.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Growth: {rec.growthRate}
                      </h4>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {rec.requiredSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Learning Path:
                      </h4>
                      <ul className="space-y-1">
                        {rec.learningPath.slice(0, 3).map((step, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:animate-glow group-hover:shadow-glow">
                      Explore Path
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setStep(1);
                  setProfile({ name: "", skills: [], interests: [], experience: "", goals: "" });
                  setRecommendations([]);
                }}
                className="border-border/50 hover:bg-accent"
              >
                Start Over
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="relative">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          {step < 4 && (
            <div className="max-w-md mx-auto mb-8">
              <Progress value={((step - 1) / 3) * 100} className="h-2" />
              <p className="text-center text-sm text-muted-foreground mt-2">
                Step {step} of 3
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default CareerRecommender;