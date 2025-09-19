import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CareerRecommender from "@/components/CareerRecommender";

const Index = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return <CareerRecommender />;
  }

  return <HeroSection onGetStarted={() => setShowAssessment(true)} />;
};

export default Index;
