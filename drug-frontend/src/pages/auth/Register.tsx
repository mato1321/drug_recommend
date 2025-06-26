import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Calendar } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* 主卡片 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* 頂部裝飾 */}
          <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
          
          {/* 頭部區域 */}
          <div className="px-8 pt-8 pb-6 text-center">
            {/* Logo */}
            <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-8 h-8 bg-white/90 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">建立新帳戶</h1>
            <p className="text-gray-500 text-sm">請填寫您的個人資訊</p>
          </div>

          {/* 表單區域 */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 姓名 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">
                  姓名
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="請輸入您的姓名"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-inner"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 pointer-events-none"></div>
                </div>
              </div>

              {/* 性別 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">性別</label>
                <div className="flex space-x-4 py-1">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                        formData.gender === "male" 
                          ? "border-purple-500 bg-purple-500" 
                          : "border-gray-300 group-hover:border-purple-400"
                      }`}>
                        {formData.gender === "male" && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-3 text-sm text-gray-700">男性</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                        formData.gender === "female" 
                          ? "border-purple-500 bg-purple-500" 
                          : "border-gray-300 group-hover:border-purple-400"
                      }`}>
                        {formData.gender === "female" && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                      </div>
                    </div>
                    <span className="ml-3 text-sm text-gray-700">女性</span>
                  </label>
                </div>
              </div>

              {/* 出生日期 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">
                  出生日期
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange("birthDate", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 text-gray-800 shadow-inner"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 pointer-events-none"></div>
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* 電子郵件 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">
                  電子郵件
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="請輸入您的電子郵件"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-inner"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 pointer-events-none"></div>
                </div>
              </div>
              
              {/* 密碼 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">
                  密碼
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="請輸入您的密碼"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-inner pr-12"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 pointer-events-none"></div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* 確認密碼 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 pl-1">
                  確認密碼
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="請再次輸入您的密碼"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-inner pr-12"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/50 pointer-events-none"></div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* 註冊按鈕 */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">註冊</span>
                </button>
              </div>

              {/* 分隔線 */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500 text-xs">或</span>
                </div>
              </div>

              {/* Google 註冊 */}
              <button
                type="button"
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg border border-gray-100"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm">使用 Google 註冊</span>
              </button>

              {/* 登入連結 */}
              <div className="text-center pt-4">
                <p className="text-gray-600 text-sm">
                  已經有帳號了？{" "}
                  <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors">
                    立即登入
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* 返回首頁連結 */}
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
            ← 返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;