import { PiArrowArcRightLight } from "react-icons/pi";

const ContactTalk = () => {
  return (
    <div className="flex items-center w-full px-10 lg:w-[75%] mx-auto my-10 py-8">
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <PiArrowArcRightLight className="text-[#23A6F0] h-24 w-24 rotate-45" />
        <div className="flex flex-col gap-6 items-center font-montserrat">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
            WE Can't WAIT TO MEET YOU
          </h5>
          <h2 className="font-bold text-6xl leading-20 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            Let’s Talk
          </h2>
          <div>
            <button className="bg-[#23A6F0] cursor-pointer text-white px-8 py-4 rounded-lg font-bold leading-5 tracking-[0.2px]">
              Try it free now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTalk;
