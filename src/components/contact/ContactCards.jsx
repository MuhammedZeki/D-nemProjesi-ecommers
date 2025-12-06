import { FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
const ContactCards = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#3d445f]">
      <div className="flex items-center w-full px-10 lg:w-[75%] mx-auto my-10 py-8 ">
        <div className="flex flex-col gap-16 p-3 items-center justify-center w-full font-montserrat">
          <div className="">
            <div className="flex flex-col items-center justify-center gap-4">
              <h6 className="font-bold leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
                VISIT OUR OFFICE
              </h6>
              <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa] text-center lg:text-start">
                We help small businesses with big ideas
              </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row items-center">
            <div className=" flex flex-col bg-white gap-8 items-center justify-center rounded-sm px-15 py-10">
              <FiPhone className="text-[#23A6F0] h-18 w-18" />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
                  georgia.young@example.com
                </p>
                <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
                  georgia.young@ple.com
                </p>
              </div>
              <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                Get Support
              </h5>
              <div>
                <button className="border border-[#23A6F0] rounded-lg px-8 py-4 text-[#23A6F0]">
                  Submit Request
                </button>
              </div>
            </div>
            <div className="border bg-[#252B42] border-black flex flex-col gap-8 rounded-sm items-center justify-center px-15 py-17">
              <FaLocationDot className="text-[#23A6F0] h-18 w-18" />
              <div className="flex flex-col gap-2 items-center text-white">
                <p className="font-bold leading-6 tracking-[0.2px] ">
                  georgia.young@example.com
                </p>
                <p className="font-bold leading-6 tracking-[0.2px] ">
                  georgia.young@ple.com
                </p>
              </div>
              <h5 className="font-bold leading-6 tracking-[0.1px] text-white">
                Get Support
              </h5>
              <div>
                <button className="border border-[#23A6F0] rounded-lg px-8 py-4 text-[#23A6F0]">
                  Submit Request
                </button>
              </div>
            </div>
            <div className=" flex flex-col bg-white gap-8 items-center justify-center rounded-sm px-15 py-10">
              <TiMessages className="text-[#23A6F0] h-18 w-18" />
              <div className="flex flex-col gap-2 items-center">
                <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
                  georgia.young@example.com
                </p>
                <p className="font-bold leading-6 tracking-[0.2px] text-[#252B42]">
                  georgia.young@ple.com
                </p>
              </div>
              <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42]">
                Get Support
              </h5>
              <div>
                <button className="border border-[#23A6F0] rounded-lg px-8 py-4 text-[#23A6F0]">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
