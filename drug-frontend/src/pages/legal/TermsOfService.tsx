import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 返回上一頁
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回上一頁
          </button>
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">服務條款</CardTitle>
            <p className="text-sm text-gray-600">Terms of Service</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">數位服務本服務條款</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                數位服務本服務條款（以下稱「本條款」）約定於{' '}
                <span className="text-blue-600">您取得並開始使用本服務時即具約束力，請您詳閱本服務條款。</span>
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</div>
                服務簡介
              </h4>
              <p className="text-gray-700 text-sm">
                本服務提供各類數位服務及產品給您使用，其服務內容包括（但不限於）文件編輯、雲端儲存、即時通訊、軟體下載、媒體播放等功能。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</div>
                條款修改及生效
              </h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 我們保留隨時修改這些條款的權利。</li>
                <li>• 修訂條款將透過適當管道，不會設立分公司。</li>
                <li>• 當有任何修改時，我們會立即通知您相關變更。</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">3</div>
                使用者義務
              </h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="text-red-600">• 不得以任何方式干擾或破壞網站服務運作的功能性。</li>
                <li className="text-red-600">• 不得傳送下列任何內容：濫發、違法或不正當之內容。</li>
                <li className="text-red-600">• 不得在未經同意的情況下，取得他人資料、占領專用頻道或破壞。</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">4</div>
                免責聲明
              </h4>
              <div className="bg-yellow-100 p-3 rounded border-l-4 border-yellow-400 mb-3">
                <p className="text-yellow-800 text-sm font-medium">
                  ⚠️ 本服務無法確保資料完全保存，不對遺失或遭到破壞。
                </p>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 本服務完全免費並僅供學習，系統資料可能會記錄或推廣機構。</li>
                <li className="bg-red-50 p-2 rounded text-red-700">• 敬請的範圍內，重大免責聲明：重大條款：條款內容。</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">5</div>
                終止條款
              </h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• 本服務有權隨時終止服務提供予不當使用者。</li>
                <li>• 保留投訴意見、建立者終止平台、重建免費終止。</li>
              </ul>
            </div>

            <div className="text-center text-sm text-gray-500 border-t pt-4">
              <p>最後更新時間：2025年7月1日</p>
              <p>本條款受中華民國法律管轄並依其解釋條款</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;