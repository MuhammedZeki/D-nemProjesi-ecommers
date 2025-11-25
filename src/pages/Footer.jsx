import { CiPhone, CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-[#252B42]">
      <div className=" flex flex-col gap-10 w-[75%] mx-auto py-12 px-4 font-montserrat">
        <div className="flex items-center py-6 justify-between">
          <div className="flex flex-col gap-4">
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
        <div className="flex items-start gap-16 py-6 font-montserrat text-white">
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">
              Company info
            </h5>
            <div className="flex flex-col gap-2">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Legal</h5>
            <div className="flex flex-col gap-2">
              <p>About Us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Features</h5>
            <div className="flex flex-col gap-2">
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold leading-6 tracking-[0.1px]">Resources</h5>
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CiPhone />
                <span>(480) 555-0103</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn />
                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
              </div>
              <div className="flex items-center gap-2">
                <CiMail />
                <span>debra.holt@example.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold leading-6 tracking-[0.2px] text-white">
            Made With Love By Finland All Right Reserved{" "}
          </p>
          <div className="flex items-center gap-4">
            <FaFacebook className="w-6 h-6 text-[#23A6F0]" />
            <IoLogoInstagram className="w-6 h-6 text-[#23A6F0]" />
            <FaTwitter className="w-6 h-6 text-[#23A6F0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
