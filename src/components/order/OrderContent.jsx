import { useContext } from "react";
import { FaCheckCircle, FaCarSide, FaTrash } from "react-icons/fa";
import { CounterContextt } from "../../context/CounterContext";
import { CiHeart, CiSquarePlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const OrderContent = () => {
  const { count, increment, descrement } = useContext(CounterContextt);
  return (
    <div className=" w-full px-10 lg:w-[75%] mx-auto py-8 my-10  lg:flex lg:flex-row gap-4 flex flex-col ">
      <div className="w-full lg:w-3/4 flex flex-col gap-6 font-montserrat">
        <div className=" flex flex-col gap-4">
          <h2 className="font-medium text-2xl leading-6 tracking-[0.1px] text-[#252B42] ">
            Sepetim (2 Ürün)
          </h2>
          <div className="sm:flex sm:flex-row items-center flex flex-col bg-[#f5f8ff] py-4 px-2 rounded-sm gap-2">
            <div>
              <FaCheckCircle className="text-[#0bbf5c] w-6 h-6" />
            </div>
            <p className="font-bold text-lg leading-6 tracking-[0.1px] text-[#252B42]">
              Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek
              Alabilirsin.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <div className="md:flex md:flex-row md:items-center flex flex-col md:gap-4 gap-6 ">
            <div className=" grow sm:flex sm:flex-row md:items-start flex flex-col gap-4 ">
              <div className="flex  justify-center sm:justify-start">
                <img
                  src="/shop/item1.jpg"
                  className="object-cover w-[200px] sm:w-[200px] rounded-md"
                />
              </div>
              <div className=" grow flex flex-col items-center sm:items-start gap-2">
                <p className="font-normal text-[#737373] leading-6 tracking-[0.1px] max-w-[350px]">
                  <span className="font-bold text-[#252B42] text-lg leading-6 tracking-[0.1px] ">
                    Sütlü çikolatlı kek
                  </span>
                </p>
                <p className=" text-[#737373] leading-6 tracking-[0.1px]">
                  Malzemeler: Süt, kakao, un, şeker...
                </p>
                <p className=" text-[#0bbf5c] leading-6 tracking-[0.1px]">
                  Stokta: 5 ürün kaldı
                </p>
                <div className="flex items-center gap-1">
                  <FaCarSide className="text-[#0bbf5c] w-6 h-6 " />
                  <p className="font-normal text-[#737373] leading-6 tracking-[0.1px]">
                    <span className="font-bold text-[#252B42] leading-6 tracking-[0.1px]">
                      35 dakika
                    </span>{" "}
                    içinde siparişiniz geliyor!
                  </p>
                </div>
              </div>
            </div>
            <div className=" grow flex gap-5 items-center justify-between px-2">
              <div className="flex items-center">
                <button
                  onClick={() => descrement()}
                  className="cursor-pointer bg-[#076297] px-4 py-1 flex items-center justify-center text-[#FAFAFA] text-xl"
                >
                  -
                </button>
                <div className="px-5 text-[#FAFAFA] text-xl py-1 bg-[#23A6F0] flex items-center justify-center">
                  {count}
                </div>
                <button
                  onClick={() => increment()}
                  className="cursor-pointer px-4 text-xl py-1 bg-[#233844] flex items-center justify-center text-[#FAFAFA] "
                >
                  +
                </button>
              </div>
              <div className="font-bold text-2xl tracking-[0.1px] leading-6 text-[#252b42]">
                $15
              </div>
              <div className="flex items-center gap-2">
                <FaTrash className="w-5 h-5 text-[#252b42] cursor-pointer hover:text-red-700" />
                <CiHeart className="w-7 h-7 text-[#252b42] transition duration-300 cursor-pointer hover:text-red-700" />
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-row md:items-center flex flex-col md:gap-4 gap-6 ">
            <div className=" grow sm:flex sm:flex-row md:items-start flex flex-col gap-4 ">
              <div className="flex  justify-center sm:justify-start">
                <img
                  src="/shop/item1.jpg"
                  className="object-cover w-[200px] sm:w-[200px] rounded-md"
                />
              </div>
              <div className=" grow flex flex-col items-center sm:items-start gap-2">
                <p className="font-normal text-[#737373] leading-6 tracking-[0.1px] max-w-[350px]">
                  <span className="font-bold text-[#252B42] text-lg leading-6 tracking-[0.1px] ">
                    Sütlü çikolatlı kek
                  </span>
                </p>
                <p className=" text-[#737373] leading-6 tracking-[0.1px]">
                  Malzemeler: Süt, kakao, un, şeker...
                </p>
                <p className=" text-[#0bbf5c] leading-6 tracking-[0.1px]">
                  Stokta: 5 ürün kaldı
                </p>
                <div className="flex items-center gap-1">
                  <FaCarSide className="text-[#0bbf5c] w-6 h-6 " />
                  <p className="font-normal text-[#737373] leading-6 tracking-[0.1px]">
                    <span className="font-bold text-[#252B42] leading-6 tracking-[0.1px]">
                      35 dakika
                    </span>{" "}
                    içinde siparişiniz geliyor!
                  </p>
                </div>
              </div>
            </div>
            <div className=" grow flex gap-5 items-center justify-between px-2">
              <div className="flex items-center">
                <button
                  onClick={() => descrement()}
                  className="cursor-pointer bg-[#076297] px-4 py-1 flex items-center justify-center text-[#FAFAFA] text-xl"
                >
                  -
                </button>
                <div className="px-5 text-[#FAFAFA] text-xl py-1 bg-[#23A6F0] flex items-center justify-center">
                  {count}
                </div>
                <button
                  onClick={() => increment()}
                  className="cursor-pointer px-4 text-xl py-1 bg-[#233844] flex items-center justify-center text-[#FAFAFA] "
                >
                  +
                </button>
              </div>
              <div className="font-bold text-2xl tracking-[0.1px] leading-6 text-[#252b42]">
                $15
              </div>
              <div className="flex items-center gap-2">
                <FaTrash className="w-5 h-5 text-[#252b42] cursor-pointer hover:text-red-700" />
                <CiHeart className="w-7 h-7 text-[#252b42] transition duration-300 cursor-pointer hover:text-red-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col font-montserrat gap-4">
        <div className="rounded-md border border-[#737373] flex flex-col gap-10 px-3 py-5">
          <div className="">
            <h2 className="font-medium text-2xl leading-6 tracking-[0.1px] text-[#252B42]">
              Sipariş Özeti
            </h2>
          </div>
          <div className=" flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="font-normal leading-6 tracking-[0.1px] text-[#737373]">
                Ürünün Toplamı
              </p>
              <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42]">
                8.448,99TL
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-normal leading-6 tracking-[0.1px] text-[#737373]">
                Kargo Toplam
              </p>
              <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42]">
                29,99TL
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-t-[#737373] py-2">
              <p className="font-normal leading-6 tracking-[0.1px] text-[#737373]">
                Toplam
              </p>
              <span className="font-bold leading-6 tracking-[0.1px] text-2xl text-[#23a6f0]">
                29,99TL
              </span>
            </div>
          </div>
        </div>
        <button className="px-2 py-3 flex items-center justify-center font-montserrat font-bold  leading-6 text-[#737373] cursor-pointer border border-[#737373] rounded-md gap-1">
          <CiSquarePlus className="w-7 h-7 text-[#23a6f0]" />
          <span>İndirim Kodunu Gir</span>
        </button>
        <button className="px-2 py-3 flex items-center justify-center font-montserrat font-bold  leading-6  gap-2tracking-[0.1px] text-[#fafafa] cursor-pointer bg-[#23a6f0]  rounded-md">
          <span>Sepeti Onayla</span>
          <IoIosArrowForward className="w-6 h-6 text-[#fafafa]" />
        </button>
      </div>
    </div>
  );
};

export default OrderContent;
