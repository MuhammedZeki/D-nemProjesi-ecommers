import { useSelector } from "react-redux";
import { FaCheckCircle, FaFileDownload, FaMotorcycle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import AutoTranslate from "../translate/AutoTranslate";

const SuccessContent = () => {
  const { total, items } = useSelector((state) => state.basket);
  const navigate = useNavigate();

  const { width, height } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const getDeliveryTimeRange = () => {
    const now = new Date();

    const minTime = new Date(now.getTime() + 20 * 60000);
    const maxTime = new Date(now.getTime() + 30 * 60000);

    const options = { hour: "2-digit", minute: "2-digit" };

    return `${minTime.toLocaleTimeString(
      [],
      options
    )} - ${maxTime.toLocaleTimeString([], options)}`;
  };

  const cargo = total >= 9.99 ? 9.99 : 0;
  const finalTotal = total + cargo;

  return (
    <div className="relative bg-[#FAFAFA] dark:bg-[#151725] min-h-screen flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={200}
      />

      <div className="w-full max-w-3xl mb-8 hidden sm:flex justify-between text-sm font-semibold text-gray-400">
        <span className="text-[#52c492]">
          1. <AutoTranslate>Kart</AutoTranslate>
        </span>
        <span className="h-0.5 flex-1 bg-[#52c492] mx-4 self-center"></span>
        <span className="text-[#52c492]">
          2.<AutoTranslate>Satın Alma</AutoTranslate>{" "}
        </span>
        <span className="h-0.5 flex-1 bg-[#52c492] mx-4 self-center"></span>
        <span className="text-[#252b42] dark:text-white">
          3.<AutoTranslate>Sipariş Onayı</AutoTranslate>{" "}
        </span>
      </div>

      <div className="bg-white dark:bg-[#1e2130] shadow-2xl rounded-2xl p-8 w-full max-w-3xl text-center border-t-4 border-[#52c492]">
        <div className="animate-bounce-slow">
          <FaCheckCircle className="text-[#52c492] w-20 h-20 mx-auto mb-6 shadow-green-200 drop-shadow-lg" />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#252b42] dark:text-white mb-2 tracking-tight">
          <AutoTranslate>Sipariş Alındı!</AutoTranslate>
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          <AutoTranslate>
            Teşekkürler! Siparişin hazırlanmaya başladı.
          </AutoTranslate>{" "}
          <AutoTranslate>Sipariş No:</AutoTranslate>{" "}
          <span className="text-[#252b42] dark:text-white font-bold">
            #B6CT3
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 dark:bg-[#252b42] p-4 rounded-lg flex items-center gap-3 text-left border border-blue-100 dark:border-blue-900/30">
            <div className="bg-white dark:bg-[#1e2130] p-3 rounded-full shadow-sm">
              <FaMotorcycle className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">
                <AutoTranslate>Tahmini Teslimat</AutoTranslate>
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#252b42] dark:text-white font-bold text-lg">
                  {getDeliveryTimeRange()}
                </p>
                <span className="bg-blue-200 text-blue-800 text-[10px] px-1.5 py-0.5 rounded font-bold">
                  ~30 <AutoTranslate>Dakika</AutoTranslate>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-[#252b42] p-4 rounded-lg flex items-center gap-3 text-left border border-purple-100 dark:border-purple-900/30">
            <div className="bg-white dark:bg-[#1e2130] p-3 rounded-full shadow-sm">
              <FaFileDownload className="text-purple-500 text-xl" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">
                <AutoTranslate>Sipariş Detayları</AutoTranslate>
              </p>
              <p className="text-[#252b42] dark:text-white font-semibold cursor-pointer hover:underline">
                <AutoTranslate>Fişi İndir</AutoTranslate>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#2a2f4a] p-6 rounded-xl border border-gray-100 dark:border-gray-700 mb-8">
          <h2 className="text-xl font-bold text-[#252b42] dark:text-white mb-4 flex justify-between items-center">
            <span>
              <AutoTranslate>Sipariş Özeti</AutoTranslate>
            </span>
            <span className="text-sm font-normal text-gray-500">
              {items.length} <AutoTranslate>Adet</AutoTranslate>
            </span>
          </h2>

          <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-[#1e2130] p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md border border-gray-200 dark:border-gray-600"
                    />
                    <span className="absolute -top-2 -right-2 bg-[#252b42] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.count}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#252b42] dark:text-white line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-xs">{item.department}</p>
                  </div>
                </div>
                <span className="font-bold text-[#252b42] dark:text-white">
                  ${(item.newPrice * item.count).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-gray-500 dark:text-gray-400 text-sm">
              <span>
                <AutoTranslate>Ara Toplam</AutoTranslate>
              </span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-500 dark:text-gray-400 text-sm">
              <span>
                <AutoTranslate>Kargo Ücreti</AutoTranslate>
              </span>
              <span>{cargo === 0 ? "Free" : `$${cargo.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between items-center text-xl font-bold text-[#252b42] dark:text-white pt-2">
              <span>
                <AutoTranslate>Toplam</AutoTranslate>
              </span>
              <span className="text-[#52c492]">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-[#2a2f4a] transition"
          >
            <AutoTranslate>Ana Sayfa</AutoTranslate>
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="cursor-pointer flex-1 px-6 py-3 rounded-lg bg-[#52c492] text-white font-semibold hover:bg-[#45b37f] shadow-lg shadow-green-200 dark:shadow-none transition"
          >
            <AutoTranslate>Alışverişe Devam Et</AutoTranslate>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessContent;
