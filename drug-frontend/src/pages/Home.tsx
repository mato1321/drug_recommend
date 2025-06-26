import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* 標題區域 */}
          <div className="px-8 pt-8 pb-6 text-center bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">歡迎使用</h1>
            <p className="text-gray-500 text-sm">藥物推薦系統</p>
          </div>

          {/* 按鈕區域 */}
          <div className="px-8 pb-8 space-y-4">
            <Link to="/login" className="block">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">登入</span>
                </div>
              </button>
            </Link>
            
            <Link to="/register" className="block">
              <button className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">註冊新帳戶</span>
                </div>
              </button>
            </Link>

            {/* 功能預覽 */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-center text-gray-600 font-semibold mb-4">主要功能</h3>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold text-sm">💊</div>
                  <div className="text-xs text-gray-600 mt-1">藥物推薦</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold text-sm">🏥</div>
                  <div className="text-xs text-gray-600 mt-1">症狀分析</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-lg">
                  <div className="text-purple-600 font-semibold text-sm">📊</div>
                  <div className="text-xs text-gray-600 mt-1">健康記錄</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg">
                  <div className="text-orange-600 font-semibold text-sm">🤖</div>
                  <div className="text-xs text-gray-600 mt-1">AI 客服</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;