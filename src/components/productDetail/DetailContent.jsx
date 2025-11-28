import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-4 cursor-pointer text-white"
      onClick={onClick}
    >
      <IoIosArrowForward className="h-12 w-12" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-4 cursor-pointer text-white"
      onClick={onClick}
    >
      <IoIosArrowBack className="h-12 w-12" />
    </div>
  );
}

const IMG = ["/DetailsImg/product1.jpg", "/DetailsImg/product2.jpg"];

const DetailContent = () => {
  const [activeImg, setActiveImg] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:gap-10">
      <div className="lg:w-1/3 w-full flex flex-col gap-4">
        <div>
          <Slider
            ref={sliderRef}
            {...settings}
            afterChange={(i) => setActiveImg(i)}
          >
            {IMG.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden w-full h-[450px] flex items-center justify-center"
              >
                <img src={img} className={`w-full h-full object-cover `} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex items-center gap-2 ">
          {IMG.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer p-1"
              onClick={() => sliderRef.current.slickGoTo(i)}
            >
              <img
                src={img}
                className={`w-[100px] h-[75px] object-cover transition
                  ${activeImg === i ? "brightness-75" : "hover:brightness-95"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-2/3 w-full font-montserrat flex flex-col gap-6">
        <h4 className="font-semibold text-xl leading-7 tracking-[0.2px] text-[#252B42]">
          Floating Phone
        </h4>
        <div className="flex items-center gap-3 ">
          <div className="flex items-center">
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStarBorder className="w-6 h-6 text-[#F3CD03]" />
          </div>
          <h6 className="font-bold leading-6 tracking-[0.2px] text-[#737373]">
            10 Reviews
          </h6>
        </div>
        <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">
          $1,139.33
        </h5>
        <div className="flex items-center gap-1">
          <p className="font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Availability :
          </p>
          <p className="font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
            In Stock
          </p>
        </div>
        <p className="font-normal border-b py-6 border-b-[#BDBDBD] leading-5 tracking-[0.2px] text-[#858585] max-w-2/3">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
          <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></div>
          <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
          <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#23A6F0] rounded-sm text-white px-5 py-4 font-bold leading-6 tracking-[0.2px]">
            Select Options
          </button>
          <div className="border border-[#E8E8E8] flex items-center p-2 justify-center rounded-full">
            <CiHeart className="w-6 h-6" />
          </div>
          <div className="border border-[#E8E8E8] flex items-center p-2 justify-center rounded-full">
            <CiShoppingBasket className="w-6 h-6" />
          </div>
          <div className="border border-[#E8E8E8] flex items-center p-2 justify-center rounded-full">
            <FaEye className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
