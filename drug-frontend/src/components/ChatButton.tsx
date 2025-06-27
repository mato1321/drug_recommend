import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLineClick = () => {
    // 這裡可以添加 LINE 的連結邏輯
    console.log("開啟 LINE");
  };

  return (
    <>
      {/* 聊天按鈕 */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-400 hover:bg-blue-500 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <MessageCircle className="w-12 h-12 text-white" />
        </Button>
      </div>

      {/* 對話框 */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-blue-400 text-white border-0">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-lg font-bold">
                Healixir-為你的健康量身推薦的保健食品
              </DialogTitle>
            </div>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="space-y-3">
              {/* LINE 按鈕 */}
              <Button
                onClick={handleLineClick}
                className="w-full bg-white text-gray-800 hover:bg-gray-100 justify-start p-4 h-auto shadow-md"
              >
                <img 
                  src="/line.ico" 
                  alt="LINE" 
                  className="w-12 h-12 mr-4"
                />
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-base">專業藥師諮詢</span>
                  <span className="text-sm text-gray-600 mt-1">營業時間內藥師即時回覆 • 其他時段 AI 智能協助</span>
                </div>
              </Button>
            </div>

            {/* QR Code 區域 */}
            <div className="mt-6 text-center">
              <div className="w-32 h-32 bg-white mx-auto rounded-xl shadow-md flex items-center justify-center">
                <div className="text-gray-400 text-xs">LINE QR Code</div>
              </div>
              <p className="text-sm mt-3 opacity-90">掃描 QR Code 或點擊上方按鈕</p>
              <p className="text-xs mt-1 opacity-75">立即獲得專業健康諮詢</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatButton;