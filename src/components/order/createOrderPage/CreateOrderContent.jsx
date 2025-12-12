import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
import AddressInformation from "./AddressInformation";
import PaymentOptions from "./PaymentOptions";
import { useNavigate } from "react-router-dom";
import AutoTranslate from "../../translate/AutoTranslate";

const CreateOrderContent = () => {
  const { items, total } = useSelector((state) => state.basket);
  const { addresses } = useSelector((state) => state.address);
  const [tabs, setTabs] = useState(1);
  const cargoFee = 9.99;
  const freeCargoLimit = 9.99;
  const navigate = useNavigate();
  const productTotal = total;
  const cargo =
    items.length === 0 ? 0 : productTotal >= freeCargoLimit ? cargoFee : 0;

  const totalAmount = productTotal + cargo;

  const getIndex = JSON.parse(localStorage.getItem("selectedIndex"));
  const getAddress = addresses[getIndex];
  const [installmentTotal, setInstallmentTotal] = useState(null);

  return (
    <div className="bg-[#fafafa] dark:bg-[#2e3449]">
      <div className="w-full px-10 lg:w-[75%] mx-auto py-8 my-10 lg:flex lg:flex-row gap-4 flex flex-col">
        <div className="w-full lg:w-3/4 flex flex-col gap-4 font-montserrat">
          <div className="flex gap-2">
            <div
              onClick={() => setTabs(1)}
              className="w-1/2 flex flex-col justify-between cursor-pointer"
            >
              <div
                className={`flex gap-3 border grow rounded-tl-md rounded-tr-md font-montserrat p-2 h-[140px] ${
                  tabs === 1
                    ? "border-[#24a5f0] bg-[#24a5f0]/10"
                    : "border-[#737373] bg-[#737373]/10"
                }`}
              >
                <h1
                  className={`font-bold text-3xl text-[#24a5f0] -mt-1 ${
                    tabs === 1
                      ? "text-[#24a5f0]"
                      : "text-[#737373] dark:text-[#bebebe]"
                  }`}
                >
                  1.
                </h1>
                <div className="flex flex-col gap-1.5">
                  <h2
                    className={`font-bold text-xl  leading-6 tracking-[0.1px] ${
                      tabs === 1
                        ? "text-[#24a5f0]"
                        : "text-[#737373] dark:text-[#bebebe]"
                    }`}
                  >
                    <AutoTranslate>Adres Bilgileri</AutoTranslate>
                  </h2>
                  <h5 className="font-medium text-[#737373] tracking-[0.1px] leading-6 dark:text-[#bebebe]">
                    <AutoTranslate>Ev</AutoTranslate>
                  </h5>
                  <p className="font-medium text-sm text-[#737373] tracking-[0.1px] leading-6 dark:text-[#bebebe] truncate md:whitespace-normal md:line-clamp-none max-w-[150px] md:max-w-full">
                    {getAddress?.address}
                  </p>
                </div>
              </div>
              <div
                className={`w-full h-0.5 ${
                  tabs === 1 ? "bg-[#24a5f0]" : "bg-[#737373]"
                }`}
              ></div>
            </div>
            <div
              onClick={() => setTabs(2)}
              className="w-1/2 flex flex-col cursor-pointer"
            >
              <div
                className={`flex gap-3 border grow rounded-tl-md rounded-tr-md font-montserrat p-2 h-[140px] ${
                  tabs === 2
                    ? "border-[#24a5f0] bg-[#24a5f0]/10"
                    : "border-[#737373] bg-[#737373]/10"
                }`}
              >
                <h1
                  className={`font-bold text-3xl -mt-1 ${
                    tabs === 2
                      ? "text-[#24a5f0]"
                      : "text-[#737373] dark:text-[#bebebe]"
                  }`}
                >
                  2.
                </h1>
                <div className="flex flex-col gap-2">
                  <h2
                    className={`font-bold text-xl leading-6 tracking-[0.1px] ${
                      tabs === 2
                        ? "text-[#24a5f0]"
                        : "text-[#737373] dark:text-[#bebebe]"
                    }`}
                  >
                    <AutoTranslate>Ödeme Seçenekleri</AutoTranslate>
                  </h2>
                  <div className="text-[#737373] leading-6 tracking-[0.1px] dark:text-[#bebebe] truncate md:whitespace-normal md:line-clamp-none max-w-[150px] md:max-w-full">
                    <span className="text-[#252b42] font-medium underline tracking-[0.1px] leading-6 dark:text-[#e6e6e6]">
                      <AutoTranslate>Banka/Kredi Kartı</AutoTranslate>
                    </span>{" "}
                    <AutoTranslate>veya</AutoTranslate>{" "}
                    <span className="text-[#252b42] font-medium underline tracking-[0.1px] leading-6 dark:text-[#e6e6e6]">
                      <AutoTranslate>Alışveriş Kredisi</AutoTranslate>
                    </span>{" "}
                    <AutoTranslate>
                      ile ödemenizi güvenle yapabilirsiniz.
                    </AutoTranslate>
                  </div>
                </div>
              </div>
              <div
                className={`w-full h-0.5 ${
                  tabs === 2 ? "bg-[#24a5f0]" : "bg-[#737373]"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex gap-2 border border-[#737373] rounded-md p-2">
            <IoIosInformationCircle className="text-[#24a5f0] w-9 h-9" />
            <span className="text-[#252b42] leading-6 tracking-[0.2px] font-bold dark:text-[#e6e6e6]">
              <AutoTranslate>
                Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
                Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı Kurumsal
                Fatura adresinizi seçin.
              </AutoTranslate>
            </span>
          </div>

          {tabs === 1 && <AddressInformation />}
          {tabs === 2 && (
            <PaymentOptions
              totalAmount={totalAmount}
              onInstallmentChange={setInstallmentTotal}
            />
          )}
        </div>

        <div className="w-full lg:w-1/4 flex flex-col font-montserrat gap-4">
          <div className="rounded-md border border-[#737373] flex flex-col gap-10 px-3 py-5 dark:border-[#fafafa]">
            <div className="flex items-start gap-2 text-[#737373] dark:text-[#bababa]">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="cursor-pointer"
              />
              <label htmlFor="check" className="cursor-pointer">
                <span className="text-[#252b42] underline font-bold tracking-[0.1px] leading-6 dark:text-[#e6e6e6]">
                  <AutoTranslate>Ön Bilgilendirme Koşulları</AutoTranslate>
                </span>
                'nı ve{" "}
                <span className="text-[#252b42] underline font-bold tracking-[0.1px] leading-6 dark:text-[#e6e6e6]">
                  <AutoTranslate>Mesafeli Satış Sözleşmesi</AutoTranslate>
                </span>
                'ni okudum, onaylıyorum.
              </label>
            </div>
          </div>

          <div className="rounded-md border border-[#737373] flex flex-col gap-10 px-3 py-5 dark:border-[#fafafa]">
            <div className="">
              <h2 className="font-medium text-2xl leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
                <AutoTranslate>Sipariş Özeti</AutoTranslate>
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#dfdfdf]">
                  <AutoTranslate>Ürünün Toplamı</AutoTranslate>
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42] dark:text-[#fafafa]">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#dfdfdf]">
                  <AutoTranslate>Kargo Toplam</AutoTranslate>
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-[#252b42] dark:text-[#fafafa]">
                  ${cargo === 0 ? "0" : `${cargo.toFixed(2)}`}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-t-[#737373] dark:border-t-[#fafafa] py-2 dark:text-[#fafafa]">
                <p className="font-normal leading-6 tracking-[0.1px] text-[#737373] dark:text-[#dfdfdf]">
                  <AutoTranslate>Toplam</AutoTranslate>
                </p>
                <span className="font-bold leading-6 tracking-[0.1px] text-2xl text-[#23a6f0]">
                  ${(installmentTotal ?? totalAmount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setTabs(2)}
            className="px-2 py-3 flex items-center justify-center font-montserrat font-bold leading-6 gap-2 tracking-[0.1px] text-[#fafafa] cursor-pointer bg-[#23a6f0] rounded-md"
          >
            {tabs !== 2 ? (
              <>
                <span>
                  <AutoTranslate>Kaydet ve Devam Et</AutoTranslate>
                </span>
                <IoIosArrowForward className="w-6 h-6 text-[#fafafa]" />
              </>
            ) : (
              <span onClick={() => navigate("/successOrder")}>
                <AutoTranslate>Ödeme Yap</AutoTranslate>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderContent;
