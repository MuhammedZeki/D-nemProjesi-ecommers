import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-4  cursor-pointer text-white"
      onClick={onClick}
    >
      <IoIosArrowForward className="h-12 w-12" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-4 text-white cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack className="h-12 w-12" />
    </div>
  );
}

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => <div className="w-16 h-1 bg-white/50"></div>,
    dotsClass: "slick-dots custom-dots",
  };
  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div className="relative w-full">
          <img
            src="/home/homeBanner.jpg"
            alt=""
            className="w-full h-[640px] object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col gap-4 items-center">
            <h1 className="font-montserrat font-bold text-6xl leading-20 tracking-[0.2px]">
              GROCERIES DELIVERY
            </h1>
            <span className="font-montserrat font-normal text-xl leading-7 tracking-[0.2px]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </span>
            <button className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] p-6 cursor-pointer rounded-xl bg-[#23A6F0]">
              Start Now
            </button>
          </h3>
        </div>

        <div className="relative w-full">
          <img
            src="/home/homeBanner.jpg"
            alt=""
            className="w-full h-[640px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col gap-4 items-center">
            <h1 className="font-montserrat font-bold text-6xl leading-20 tracking-[0.2px]">
              GROCERIES DELIVERY
            </h1>
            <span className="font-montserrat font-normal text-xl leading-7 tracking-[0.2px]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </span>
            <button className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] p-6 cursor-pointer rounded-xl bg-[#23A6F0]">
              Start Now
            </button>
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
