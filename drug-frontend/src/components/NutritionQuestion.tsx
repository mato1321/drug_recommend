
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NutritionQuestionProps {
  questionNumber: number;
  question: string;
  options: string[];
  isMultiSelect?: boolean;
  skipCondition?: string;
  currentRoute: string;
  nextRoute: string | null;
  previousRoute: string | null;
}

const NutritionQuestion = ({
  questionNumber,
  question,
  options,
  isMultiSelect = false,
  skipCondition,
  currentRoute,
  nextRoute,
  previousRoute
}: NutritionQuestionProps) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    if (isMultiSelect) {
      setSelectedOptions(prev => 
        prev.includes(option) 
          ? prev.filter(o => o !== option)
          : [...prev, option]
      );
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleNext = () => {
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  const isOptionSelected = (option: string) => selectedOptions.includes(option);
  const canProceed = selectedOptions.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Healixir</h1>
          <p className="text-blue-600">營養目標</p>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              {previousRoute && (
                <Link to={previousRoute} className="inline-flex items-center text-gray-600 hover:text-gray-800">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  上一題
                </Link>
              )}
            </div>

            <div className="mb-8">
              <p className="text-gray-800 text-lg font-medium text-center leading-relaxed">
                {question}
              </p>
              {skipCondition && (
                <p className="text-sm text-gray-500 text-center mt-2">
                  {skipCondition}
                </p>
              )}
            </div>

            <div className="grid gap-3 mb-8">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant={isOptionSelected(option) ? "default" : "outline"}
                  className={`w-full py-4 text-left justify-start text-wrap h-auto ${
                    isOptionSelected(option)
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white hover:bg-blue-50 text-gray-700 border-gray-300"
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-8 py-3 rounded-full"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">
                {questionNumber} / 48
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NutritionQuestion;
