import { IoIosArrowForward } from "react-icons/io";
const DetailDescription = () => {
  return (
    <div className=" w-full px-10 lg:w-[75%] mx-auto my-3 py-8 flex flex-col gap-3">
      <div className=" gap-8  flex items-center justify-center p-4 font-montserrat border-b border-b-[#ECECEC]">
        <div className="font-semibold cursor-pointer leading-6 tracking-[0.2px] text-[#737373] p-2">
          Description
        </div>
        <div className="font-semibold cursor-pointer leading-6 tracking-[0.2px] text-[#737373] p-2">
          Additional Information
        </div>
        <div className="font-semibold cursor-pointer leading-6 tracking-[0.2px] text-[#737373] p-2 flex items-center gap-1">
          Reviews
          <span className="text-[#23856D]">(0)</span>
        </div>
      </div>
      <div className=" mt-8 flex gap-8 font-montserrat">
        <div className="w-1/3">
          <img
            src="/DetailsImg/desc1.jpg"
            className="object-cover rounded-lg h-full"
          />
        </div>
        <div className="flex w-1/3 flex-col gap-6 grow">
          <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
            the quick fox jumps over{" "}
          </h5>
          <p className="font-medium text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met. Met
            minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="font-medium text-sm leading-5 tracking-[0.2px] text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met. Met
            minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex w-1/3 flex-col gap-8 grow">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
              the quick fox jumps over{" "}
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
              the quick fox jumps over{" "}
            </h5>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="w-5 h-5 text-[#737373]" />
                <span className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">
                  the quick fox jumps over the lazy dog
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDescription;
