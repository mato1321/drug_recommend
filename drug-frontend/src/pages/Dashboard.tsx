import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle,
  Brain,
  Pill,
  ShoppingCart,
  Sparkles,
  Users,
  Shield,
  User,
  LogOut,
  Star,
  UserCheck
} from "lucide-react";
import ChatButton from "@/components/ChatButton";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 檢查用戶登入狀態
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 頂部導航 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/favicon.ico" 
                alt="Logo" 
                className="w-8 h-8 mr-3"
              />
              <h1 className="text-xl font-bold text-gray-800">Healixir</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600">首頁</Link>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                個人資料
              </Button>
              <Link to="/nutrition" className="text-blue-600 hover:text-blue-800 font-medium">免費評估</Link>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-4 h-4 mr-2" />
              </Button>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  登入
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              為你的健康量身推薦
              <br />
              保健食品
            </h1>
            <p className="text-xl mb-8 opacity-90">
              只需 3 分鐘，完成健康問卷，獲得專屬營養建議
            </p>
            <Link to="/nutrition">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                <Star className="w-5 h-5 mr-2" fill="currentColor" />
                立即免費評估 →
              </Button>
            </Link>
          </div>
        </section>

        {/* 四步驟流程 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              簡單四步驟，找到最適合的保健方案
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">填寫健康問卷</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    3分鐘快速問卷，了解您的健康狀況
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">AI 分析生活狀況</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    智能分析您的身體與生活習慣
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">推薦專屬保健食品</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    獲得個人化的營養補充建議
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">線上選購或藥局諮詢</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    方便購買或至合作藥局專業諮詢
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 為什麼選擇我們 */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              為什麼選擇我們的健康評估？
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">AI 精準分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    運用先進人工智慧技術，精準分析您的健康需求
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">與實體藥局合作</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    與專業藥師合作，提供最可靠的健康建議
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">快速且隱私保護</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    快速完成評估，嚴格保護您的個人隱私資料
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 用戶真實回饋 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              用戶真實回饋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3 border-2 border-pink-200">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">李小姐</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "問卷很簡單，推薦的保健食品真的很適合我的需求！"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 border-2 border-blue-200">
                      <span className="text-2xl">👨</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">陳先生</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "3分鐘就完成評估，獲得了很實用的營養建議。"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3 border-2 border-pink-200">
                      <span className="text-2xl">🧓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">王太太</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "AI分析很準確，藥師的專業建議讓我很放心。"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              開始您的健康之旅
            </h2>
            <p className="text-xl mb-8 opacity-90">
              立即進行免費評估，讓 AI 為您推薦最適合的保健方案
            </p>
            <Link to="/nutrition">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
                <Star className="w-5 h-5 mr-2" fill="currentColor" />
                立即免費評估 →
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* 聊天按鈕 */}
      <ChatButton />
    </div>
  );
};

export default Dashboard;