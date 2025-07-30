import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

export const SkinQuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: "skinType",
      question: "What's your skin type?",
      options: [
        { value: "oily", label: "Oily", description: "Shiny with large pores" },
        { value: "dry", label: "Dry", description: "Tight, flaky, or rough" },
        { value: "combination", label: "Combination", description: "Oily T-zone, dry cheeks" },
        { value: "sensitive", label: "Sensitive", description: "Easily irritated or reactive" },
        { value: "normal", label: "Normal", description: "Balanced and comfortable" },
      ],
    },
    {
      id: "concern",
      question: "What's your major skin concern?",
      options: [
        { value: "acne", label: "Acne & Breakouts", description: "Frequent pimples and blemishes" },
        { value: "aging", label: "Anti-Aging", description: "Fine lines and wrinkles" },
        { value: "hydration", label: "Dryness", description: "Lack of moisture" },
        { value: "brightening", label: "Dullness", description: "Uneven tone and dark spots" },
        { value: "sensitivity", label: "Sensitivity", description: "Redness and irritation" },
      ],
    },
    {
      id: "lifestyle",
      question: "Your climate & lifestyle?",
      options: [
        { value: "humid", label: "Humid Climate", description: "Hot and moist environment" },
        { value: "dry", label: "Dry Climate", description: "Low humidity conditions" },
        { value: "urban", label: "Urban Pollution", description: "City environment with pollution" },
        { value: "indoor", label: "Mostly Indoors", description: "Air conditioning and heating" },
        { value: "outdoor", label: "Active Outdoors", description: "Frequent sun exposure" },
      ],
    },
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const { skinType, concern } = answers;
    
    if (concern === "acne") return "Anti-Acne Kit";
    if (concern === "brightening") return "Brightening Kit";
    if (concern === "hydration" || skinType === "dry") return "Hydration Kit";
    if (concern === "aging") return "Anti-Aging Kit";
    return "Custom Balanced Kit";
  };

  const getKitDescription = () => {
    const kit = getRecommendation();
    const descriptions = {
      "Anti-Acne Kit": "Tea tree oil, salicylic acid, and zinc to clear breakouts",
      "Brightening Kit": "Vitamin C, turmeric, and niacinamide for radiant skin",
      "Hydration Kit": "Hyaluronic acid, aloe vera, and ceramides for deep moisture",
      "Anti-Aging Kit": "Retinol, peptides, and antioxidants for youthful skin",
      "Custom Balanced Kit": "Perfectly balanced ingredients for your unique needs",
    };
    return descriptions[kit as keyof typeof descriptions];
  };

  if (isComplete) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="animate-fade-in-scale">
                <CheckCircle className="h-20 w-20 text-primary mx-auto mb-8" />
                
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                  Your Perfect Match!
                </h1>
                
                <div className="bg-gradient-hero rounded-3xl p-8 mb-8 border border-border shadow-elegant">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Recommended Kit: {getRecommendation()}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {getKitDescription()}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✨ Personalized for {answers.skinType} skin</p>
                    <p>🎯 Targets {answers.concern} concerns</p>
                    <p>🌍 Optimized for {answers.lifestyle} lifestyle</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Shop Your Kit - ₹799
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => {
                    setCurrentStep(0);
                    setAnswers({});
                    setIsComplete(false);
                  }}>
                    Retake Quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-botanical h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {currentQuestion.question}
              </h1>
              <p className="text-muted-foreground">
                Choose the option that best describes your skin
              </p>
            </div>

            {/* Options */}
            <div className="grid gap-4 mb-12">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={option.value}
                  className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 animate-fade-in-scale ${
                    answers[currentQuestion.id] === option.value
                      ? "border-primary bg-primary/5 shadow-botanical"
                      : "border-border hover:border-primary/40 hover:bg-primary/5"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[currentQuestion.id] === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {option.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className={currentStep === 0 ? "invisible" : ""}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                variant="hero"
                onClick={nextStep}
                disabled={!answers[currentQuestion.id]}
              >
                {currentStep === questions.length - 1 ? "Get Results" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};