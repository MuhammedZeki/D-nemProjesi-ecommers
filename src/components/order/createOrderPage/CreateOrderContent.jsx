import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
import AddressInformation from "./AddressInformation";
import PaymentOptions from "./PaymentOptions";
const CreateOrderContent = () => {
  const { items, total } = useSelector((state) => state.basket);
  const [tabs, setTabs] = useState(1);
  const navigate = useNavigate();
  const cargoFee = 9.99;
  const freeCargoLimit = 9.99;

  const productTotal = total;

  const cargo =
    items.length === 0 ? 0 : productTotal >= freeCargoLimit ? cargoFee : 0;

  const totalAmount = productTotal + cargo;
  return (
    <div className=" w-full px-10 lg:w-[75%] mx-auto py-8 my-10  lg:flex lg:flex-row gap-4 flex flex-col ">
      <div className="w-full lg:w-3/4 flex flex-col gap-4 font-montserrat ">
        <div className="flex gap-2">
          <div
            onClick={() => setTabs(1)}
            className=" w-1/2 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex gap-3 border border-[#24a5f0] rounded-tl-md rounded-tr-md font-montserrat p-2">
              <h1 className="font-bold text-3xl text-[#24a5f0] -mt-1">1.</h1>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-bold text-xl text-[#24a5f0] leading-6 tracking-[0.1px]">
                  Adres Bilgileri
                </h2>
                <h5 className="font-medium  text-[#737373] tracking-[0.1px] leading-6">
                  Ev
                </h5>
                <p className="font-medium text-sm text-[#737373] tracking-[0.1px] leading-6">
                  Evin adresim Lorem ipsum dolor sit amet.
                </p>
                <p className="font-medium text-sm text-[#737373] tracking-[0.1px] leading-6">
                  53020 - Istanbul-beyoglu adresim Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#24a5f0]"></div>
          </div>
          <div
            onClick={() => setTabs(2)}
            className="w-1/2 flex flex-col cursor-pointer"
          >
            <div className="flex gap-3 border border-[#737373] grow bg-[#f8f8f8] rounded-tl-md rounded-tr-md font-montserrat p-2">
              <h1 className="font-bold text-3xl text-[#737373] -mt-1">2.</h1>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl text-[#737373] leading-6 tracking-[0.1px]">
                  Ödeme Seçenekleri
                </h2>
                <div className="text-[#737373] leading-6 tracking-[0.1px]">
                  <span className="text-[#252b42]  font-medium underline  tracking-[0.1px] leading-6">
                    Banka/Kredi Kartı
                  </span>{" "}
                  veya{" "}
                  <span className="text-[#252b42]  font-medium underline tracking-[0.1px] leading-6">
                    Alışveriş Kredisi
                  </span>{" "}
                  ile ödemenizi güvenle yapabilirsiniz.
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#737373]"></div>
          </div>
        </div>
        <div className="flex gap-2 border border-[#737373] rounded-md p-2">
          <IoIosInformationCircle className="text-[#24a5f0] w-9 h-9" />
          <span className="text-[#252b42]  leading-6 tracking-[0.2px] font-bold">
            Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
            Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal
            Fatura adresinizi seçin.
          </span>
        </div>
        {tabs === 1 && <AddressInformation />}
        {tabs === 2 && <PaymentOptions />}
      </div>
      <div className="w-full lg:w-1/4 flex flex-col font-montserrat gap-4">
        <div className="rounded-md border border-[#737373] flex flex-col gap-10 px-3 py-5 dark:border-[#fafafa]">
          <div className="flex items-start gap-2 text-[#737373] ">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="cursor-pointer"
            />
            <label htmlFor="check" className="cursor-pointer">
              <span className="text-[#252b42] underline font-bold  tracking-[0.1px] leading-6">
                Ön Bilgilendirme Koşulları
              </span>
              'nı ve{" "}
              <span className="text-[#252b42] underline font-bold  tracking-[0.1px] leading-6">
                Mesafeli Satış Sözleşmesi
              </span>
              'ni okudum, onaylıyorum.
            </label>
          </div>
        </div>
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
        <button
          onClick={() => navigate("/createOrder")}
          className="px-2 py-3 flex items-center justify-center font-montserrat font-bold  leading-6  gap-2tracking-[0.1px] text-[#fafafa] cursor-pointer bg-[#23a6f0]  rounded-md"
        >
          <span>Kaydet ve Devam Et</span>
          <IoIosArrowForward className="w-6 h-6 text-[#fafafa]" />
        </button>
      </div>
    </div>
  );
};

export default CreateOrderContent;
