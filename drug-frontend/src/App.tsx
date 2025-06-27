import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";  // 新的主畫面
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import NutritionSurvey from "./pages/NutritionSurvey";
import Question1 from "./pages/nutrition/Question1";
import Question2 from "./pages/nutrition/Question2";
import Question3 from "./pages/nutrition/Question3";
import Question4 from "./pages/nutrition/Question4";
import Question5 from "./pages/nutrition/Question5";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/nutrition" element={<NutritionSurvey />} />
          <Route path="/nutrition/question/1" element={<Question1 />} />
          <Route path="/nutrition/question/2" element={<Question2 />} />
          <Route path="/nutrition/question/3" element={<Question3 />} />
          <Route path="/nutrition/question/4" element={<Question4 />} />
          <Route path="/nutrition/question/5" element={<Question5 />} />
          <Route path="*" element={<div>404 頁面不存在</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;