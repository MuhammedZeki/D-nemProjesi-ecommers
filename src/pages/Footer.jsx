import { CiPhone, CiLocationOn, CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-[#252B42]">
      <div className=" flex flex-col gap-10 w-[75%] mx-auto py-12 px-4 font-montserrat">
        <div className="lg:flex lg:flex-row lg:items-center lg:py-6 lg:justify-between flex flex-col gap-8">
          <div className="flex flex-col lg:gap-4 gap-8">
            <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-white">
              Consulting Agency For Your Business
            </h3>
            <p className="font-normal leading-4 tracking-[0.2px] text-white">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <button className="bg-[#23A6F0] py-6 px-10 rounded-lg text-white font-bold leading-5 tracking-[0.2px]">
            Contact Us
          </button>
        </div>
        <div className="lg:flex lg:flex-row lg:items-start lg:gap-16 lg:py-6 font-montserrat text-white flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              Company info
            </h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Legal</h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Features</h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Resources</h5>
            <div className="flex flex-col lg:gap-2 gap-4">
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              Get In Touch
            </h5>
            <div className="flex flex-col lg:gap-6 gap-4">
              <div className="flex items-center gap-2">
                <CiPhone className="text-[#8EC2F2] lg:text-white h-8 w-8 lg:h-6 lg:w-6" />
                <span>(480) 555-0103</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-[#8EC2F2] lg:text-white h-12 w-12 lg:h-6 lg:w-6" />
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className="flex items-center gap-2">
                <CiMail className="text-[#8EC2F2] lg:text-white h-8 w-8 lg:h-6 lg:w-6" />
                <span>debra.holt@example.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between flex flex-col">
          <p className="font-bold leading-6 tracking-[0.2px] text-white">
            Made With Love By Finland All Right Reserved{" "}
          </p>
          <div className="flex items-center gap-4 my-6 lg:my-0">
            <FaFacebook className="w-6 h-6 text-[#335BF5]" />
            <IoLogoInstagram className="w-6 h-6 text-[#E51F5A]" />
            <FaTwitter className="w-6 h-6 text-[#21A6DF]" />
            <FaYoutube className="w-6 h-6 text-[#E42F08]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
