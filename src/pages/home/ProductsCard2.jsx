import { BsDownload } from "react-icons/bs";
import { useLang } from "../../context/LangContext";
const ProductsCard2 = () => {
  const { lang } = useLang();

  const texts = {
    en: {
      title: "MOST POPULAR",
      content:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      department: "Meat Department",
      sales: "sales",
    },
    tr: {
      title: "EN POPÜLER",
      content:
        "Ergonomiye odaklanıyor ve çalıştığınız yerde size eşlik ediyoruz. Sadece bir tuş uzağınızda.",
      department: "Et Bölümü",
      sales: "Satış",
    },
  };

  const t = texts[lang];
  return (
    <div className="lg:w-[75%] lg:mx-auto lg:py-8 lg:px-4 flex flex-col gap-4 mt-10">
      <div className="lg:flex lg:flex-row flex flex-col-reverse">
        <div className=" lg:w-1/3 w-full bg-[#FAFAFA] dark:bg-[#3d445f] flex flex-col gap-2 items-center px-12 py-6 justify-center font-montserrat">
          <div className="flex flex-col gap-2 items-center text-center">
            <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
              {t.title}
            </h5>
            <p className="font-normal text-md leading-5  tracking-[0.2px] text-[#737373] dark:text-[#bababa]">
              {t.content}
            </p>
          </div>
          <div className="py-1">
            <img src="/products/et-1.jpg" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-6 items-center text-center">
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
              {t.department}
            </p>
            <p className="font-bold text-md leading-6 tracking-[0.2px] text-[#737373] dark:text-[#bababa] flex items-center gap-2">
              <BsDownload className="w-5 h-5" />
              <p>15 {t.sales}</p>
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#BDBDBD]">
                $16.48
              </span>
              <span className="font-bold text-lg leading-6 tracking-[0.1px] text-[#23856D]">
                $6.48
              </span>
            </div>
            <p className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
              <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
              <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
            </p>
          </div>
        </div>
        <div className=" lg:w-2/3 w-full">
          <img
            src="/products/yemek.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard2;
