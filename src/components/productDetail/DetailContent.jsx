import { useState, useRef, useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import useProducts from "../../hooks/useProducts";
import { CounterContextt } from "../../context/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { toBasket } from "../store/actions/basketActions";
import { deleteFav, toFav } from "../store/actions/favoritesAction";
import { toast } from "react-toastify";
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

const DetailContent = () => {
  const [activeImg, setActiveImg] = useState(0);
  const sliderRef = useRef();
  const { id } = useParams();
  const { count, increment, descrement } = useContext(CounterContextt);
  const { data, isLoading, isError } = useProducts();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);
  const newProduct = data?.find((i) => i.id === Number(id));
  const addToBasket = (data) => {
    const basketObj = {
      ...data,
      count: count,
    };
    dispatch(toBasket(basketObj));
    toast.success("Sepetinize eklendi!");
  };
  const toggleFav = (product) => {
    const isFav = favorites.find((i) => i.id === product.id);

    if (isFav) {
      dispatch(deleteFav(product.id));
      toast.info("Favorilerden çıkarıldı!");
    } else {
      dispatch(toFav(product));
      toast.success("Favorilere eklendi!");
    }
  };
  const IMG = [newProduct?.img, "/DetailsImg/p2.jpg"];
  const isHeart = favorites?.find((i) => i?.id === newProduct?.id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

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
    <div className="flex flex-col lg:flex lg:flex-row gap-8 lg:gap-10">
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

      <div className="lg:w-2/3 w-full font-montserrat flex flex-col items-center sm:items-start gap-6">
        <h4 className="font-semibold text-xl leading-7 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {newProduct.name}
        </h4>
        <div className="flex items-center gap-3 ">
          <div className="flex items-center">
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStar className="w-6 h-6 text-[#F3CD03]" />
            <MdOutlineStarBorder className="w-6 h-6 text-[#F3CD03]" />
          </div>
          <h6 className="font-bold leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            10 Reviews
          </h6>
        </div>
        <h5 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
          ${newProduct.newPrice}
        </h5>
        <div className="flex items-center gap-1">
          <p className="font-bold leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            Availability :
          </p>
          <p className="font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
            In Stock
          </p>
        </div>
        <p className="font-normal border-b py-6 border-b-[#BDBDBD] leading-5 tracking-[0.2px] text-[#858585] dark:text-[#dbdbdb] max-w-2/3 text-center sm:text-start">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="flex items-center justify-center sm:justify-start">
          <button
            onClick={() => descrement()}
            className="cursor-pointer bg-[#076297] px-6 py-2 flex items-center justify-center text-[#FAFAFA] text-xl"
          >
            -
          </button>
          <div className="px-6 text-[#FAFAFA] text-xl py-2 bg-[#23A6F0] flex items-center justify-center">
            {count}
          </div>
          <button
            onClick={() => increment()}
            className="cursor-pointer px-6 text-xl py-2 bg-[#233844] flex items-center justify-center text-[#FAFAFA] "
          >
            +
          </button>
        </div>
        <div className="sm:flex sm:flex-row sm:items-center flex flex-col gap-3">
          <button className="bg-[#23A6F0] hover:bg-[#79c9f8] transition duration-300 cursor-pointer rounded-sm text-white px-5 py-4 font-bold leading-6 tracking-[0.2px]">
            Select Options
          </button>
          <div className="flex flex-col gap-3 sm:flex sm:flex-row">
            <div
              onClick={() => toggleFav(newProduct)}
              className={`group hover:border-[#CB0404] cursor-pointer hover:bg-[#f8c0c0] flex items-center p-2 justify-center rounded-full transition duration-300 ${
                isHeart
                  ? "border border-[#CB0404] bg-[#f8c0c0] "
                  : "border border-[#E8E8E8]"
              }`}
            >
              <CiHeart
                className={`w-6 h-6 group-hover:text-[#CB0404] transition duration-300 ${
                  isHeart
                    ? "text-[#CB0404]"
                    : "text-[#737373] dark:text-[#fafafa]"
                }`}
              />
            </div>
            <div
              onClick={() => addToBasket(newProduct)}
              className="group border border-[#E8E8E8] hover:border-[#23A6F0] cursor-pointer hover:bg-[#c2e9ff] flex items-center p-2 justify-center rounded-full transition duration-300 gap-2 text-[#737373] dark:text-[#fafafa] tracking-[0.1px] leading-6 hover:text-[#23A6F0]"
            >
              <CiShoppingBasket className="w-6 h-6 text-[#737373] dark:text-[#fafafa] group-hover:text-[#23A6F0] transition duration-300" />
              Sepete Ekle
            </div>
          </div>
          {/* <div className="border border-[#E8E8E8] flex items-center p-2 justify-center rounded-full">
            <FaEye className="w-6 h-6" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
