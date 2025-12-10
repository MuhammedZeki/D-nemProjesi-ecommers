import { FaCarSide, FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  deleteBasket,
  incrementItem,
} from "../store/actions/basketActions";
import { deleteFav, toFav } from "../store/actions/favoritesAction";
import { toast } from "react-toastify";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorite);

  const toggleFav = (item) => {
    const isFav = favorites.find((i) => i.id === item.id);

    if (isFav) {
      dispatch(deleteFav(item?.id));
      toast.info("Favorilerden çıkarıldı!");
    } else {
      dispatch(toFav(item));
      toast.success("Favorilere eklendi!");
    }
  };
  const isHeart = favorites?.find((i) => i?.id === item?.id);

  return (
    <div className="md:flex md:flex-row md:items-center flex flex-col md:gap-4 gap-6 ">
      <div className=" grow sm:flex sm:flex-row md:items-start flex flex-col gap-4 ">
        <div className="flex  justify-center sm:justify-start">
          <img
            src={item?.img}
            className="object-cover w-[270px] h-[250px]  rounded-md"
          />
        </div>
        <div className=" grow flex flex-col items-center sm:items-start gap-2">
          <p className="font-normal text-[#737373] leading-6 tracking-[0.1px] max-w-[350px] dark:text-[#fafafa]">
            <span className="font-bold text-[#252B42] text-lg leading-6 tracking-[0.1px] dark:text-[#fafafa]">
              {item?.name}
            </span>
          </p>
          <p className=" text-[#737373] leading-6 tracking-[0.1px] dark:text-[#c0bebe]">
            Malzemeler: Süt, kakao, un, şeker...
          </p>
          <p className=" text-[#0bbf5c] leading-6 tracking-[0.1px]">
            Stokta: 5 ürün kaldı
          </p>
          <div className="flex items-center gap-1">
            <FaCarSide className="text-[#0bbf5c] w-6 h-6 " />
            <p className="font-normal text-[#737373] leading-6 tracking-[0.1px] dark:text-[#c0bebe]">
              <span className="font-bold text-[#252B42] leading-6 tracking-[0.1px] dark:text-[#fafafa]">
                35 dakika
              </span>{" "}
              içinde siparişiniz geliyor!
            </p>
          </div>
        </div>
      </div>
      <div className=" grow flex gap-5 items-center justify-between px-2">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(decrementItem(item?.id))}
            className="cursor-pointer bg-[#076297] px-4 py-1 flex items-center justify-center text-[#FAFAFA] text-xl "
          >
            -
          </button>
          <div className="px-5 text-[#FAFAFA] text-xl py-1 bg-[#23A6F0] flex items-center justify-center">
            {item?.count}
          </div>
          <button
            onClick={() => dispatch(incrementItem(item?.id))}
            className="cursor-pointer px-4 text-xl py-1 bg-[#233844] flex items-center justify-center text-[#FAFAFA] "
          >
            +
          </button>
        </div>
        <div className="font-bold text-2xl tracking-[0.1px] leading-6 text-[#252b42] dark:text-[#fafafa]">
          ${item?.newPrice}
        </div>
        <div className="flex items-center gap-2">
          <FaTrash
            onClick={() => dispatch(deleteBasket(item?.id))}
            className="w-5 h-5 text-[#252b42] cursor-pointer hover:text-red-700 dark:text-[#fafafa]"
          />
          <div
            onClick={() => toggleFav(item)}
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
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
