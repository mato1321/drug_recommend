
import NutritionQuestion from "@/components/NutritionQuestion";

const Question48 = () => {
  return (
    <NutritionQuestion
      questionNumber={48}
      question="您有重量控制的需求嗎"
      options={["無", "有，考慮中", "有，正在進行"]}
      currentRoute="/nutrition/question/48"
      nextRoute="/nutrition/result"
      previousRoute="/nutrition/question/47"
    />
  );
};

export default Question48;
