import { FaCheckCircle } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { useNavigate } from "react-router-dom";
const OrderContent = () => {
  const { items, total } = useSelector((state) => state.basket);
  const navigate = useNavigate();
  const cargoFee = 9.99;
  const freeCargoLimit = 9.99;

  const productTotal = total;

  const cargo =
    items.length === 0 ? 0 : productTotal >= freeCargoLimit ? cargoFee : 0;

  const totalAmount = productTotal + cargo;

  return (
    <div className="bg-[#fafafa] dark:bg-[#3d445f]">
      <div className=" w-full px-10 lg:w-[75%] mx-auto py-8 my-10  lg:flex lg:flex-row gap-4 flex flex-col ">
        <div className="w-full lg:w-3/4 flex flex-col gap-6 font-montserrat">
          <div className=" flex flex-col gap-4">
            <h2 className="font-medium text-2xl leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
              Sepetim ({items.length} Ürün)
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
            {items.length === 0 && (
              <div className="text-center text-[#252B42] font-semibold py-6">
                Sepetiniz boş
              </div>
            )}
            {items.length > 0 &&
              items.map((item, i) => <OrderItem key={i} item={item} />)}
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col font-montserrat gap-4">
          <div className="rounded-md border border-[#737373] flex flex-col gap-10 px-3 py-5 dark:border-[#fafafa]">
            <div className="">
              <h2 className="font-medium text-2xl leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                Sipariş Özeti
              </h2>
            </div>
            <div className=" flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#c0bebe]">
                  Ürünün Toplamı
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42] dark:text-[#fafafa]">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#c0bebe]">
                  Kargo Toplam
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42] dark:text-[#fafafa]">
                  ${cargo === 0 ? "0" : `${cargo.toFixed(2)}`}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-t-[#737373] dark:border-t-[#fafafa] py-2 dark:text-[#fafafa]">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#c0bebe]">
                  Toplam
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-2xl text-[#23a6f0]">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <button className="px-2 py-3 flex items-center justify-center font-montserrat font-bold  leading-6 text-[#737373] cursor-pointer border border-[#737373] rounded-md gap-1 dark:text-[#fafafa] dark:border-[#fafafa]">
            <CiSquarePlus className="w-7 h-7 text-[#23a6f0]" />
            <span>İndirim Kodunu Gir</span>
          </button>
          <button
            onClick={() => navigate("/createOrder")}
            className="px-2 py-3 flex items-center justify-center font-montserrat font-bold  leading-6  gap-2tracking-[0.1px] text-[#fafafa] cursor-pointer bg-[#23a6f0]  rounded-md"
          >
            <span>Sepeti Onayla</span>
            <IoIosArrowForward className="w-6 h-6 text-[#fafafa]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
