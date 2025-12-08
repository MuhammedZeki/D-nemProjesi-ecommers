import { CiClock1 } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const BlogCardItem = ({ item, key, lang }) => {
  return (
    <div key={key} className="flex flex-col dark:bg-[#3d445f]">
      <div className="relative">
        <img src={item?.img} className="object-cover h-[300px] w-full" alt="" />
        <div className=" absolute p-1 top-5 left-5 bg-[#E74040] text-white font-montserrat font-bold leading-6 tracking-[0.2px] rounded-lg">
          {item?.new}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 items-start font-montserrat shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          {item?.links.map((link, i) => (
            <p
              key={i}
              className="font-normal text-xs leading-4 tracking-[0.2px] text-[#8EC2F2] "
            >
              {link}
            </p>
          ))}
        </div>
        <div className="font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {item?.name}
        </div>
        <div className="font-normal leading-5 tracking-[0.2px] text-[#737373] dark:text-[#e6e5e5]">
          {lang === "en"
            ? "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            : "Ergonomiye ve sizinle çalıştığınız yerde buluşmaya odaklanıyoruz. Sadece bir tuş vuruşu kadar yakın."}
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between  gap-3">
            <CiClock1 className="text-[#23A6F0] w-4 h-4" />
            <span className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
              {item?.date}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCommentAlt className="text-[#23856D] w-4 h-4" />
            <span className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
              {item?.comment}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-bold leading-6 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            {lang === "en" ? "Learn More" : "Daha fazla bilgi edin"}
          </p>
          <IoIosArrowForward className="text-[#23A6F0] w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardItem;
