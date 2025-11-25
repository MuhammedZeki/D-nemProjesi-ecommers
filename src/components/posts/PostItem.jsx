import { CiClock1 } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const PostItem = ({ img }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative">
        <img
          src={`/post/post${img}.jpg`}
          className="object-cover h-[300px] w-full"
          alt=""
        />
        <div className=" absolute p-1 top-5 left-5 bg-[#E74040] text-white font-montserrat font-bold leading-6 tracking-[0.2px] rounded-lg">
          NEW
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start font-montserrat">
        <div className="flex items-center gap-3">
          <p className="font-normal text-xs leading-4 tracking-[0.2px] text-[#8EC2F2] ">
            Google
          </p>
          <p className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
            Trending
          </p>
          <p className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
            New
          </p>
        </div>
        <div className="font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42]">
          Loudest à la Madison #1 (L'integral)
        </div>
        <div className="font-normal leading-5 tracking-[0.2px] text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between  gap-3">
            <CiClock1 className="text-[#23A6F0] w-4 h-4" />
            <span className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              22 April 2021
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCommentAlt className="text-[#23856D] w-4 h-4" />
            <span className="font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
              10 comments
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Learn More
          </p>
          <IoIosArrowForward className="text-[#23A6F0] w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
