import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回
          </Link>
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 pb-2 text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">聯絡我們</h3>
            <p className="text-sm text-gray-600">Contact Us</p>
          </div>
          <div className="p-6 pt-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">聯絡方式</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                我們提供多種聯絡方式，適時回應客戶需求並提供完善的客戶服務。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</div>
                客服專線
              </h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  客服電話：(02) 2955-8799
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  客服時間：星期一至五 09:00-18:00
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  傳真號碼：(02) 2955-8799
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</div>
                電子信箱
              </h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 text-sm">
                  <Mail className="w-4 h-4 mr-2 text-green-600" />
                  一般詢問：support@company.com
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Mail className="w-4 h-4 mr-2 text-green-600" />
                  技術支援：tech@company.com
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Mail className="w-4 h-4 mr-2 text-green-600" />
                  商務合作：business@company.com
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">3</div>
                公司地址
              </h4>
              <div className="space-y-2">
                <div className="flex items-start text-gray-700 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-green-600 mt-0.5" />
                  <div>
                    <p>註冊地址：臺北市內湖區民權東路六段109號</p>
                    <p className="mt-1">營業地址：台北市 SOHO大樓10樓 104B</p>
                    <p className="mt-1">郵遞區號：台北市 SOHO 11491</p>
                    <p className="mt-1">營業地址：244</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 border-t pt-4">
              <p>營業時間：週一至週五 09:00-18:00</p>
              <p>客服回應時間：24-48小時內回覆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;