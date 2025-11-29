import { FaPlay } from "react-icons/fa";
const VideoCard = () => {
  return (
    <div className="w-full px-10 lg:w-[75%] mx-auto py-8">
      <div className="flex items-center justify-center relative">
        <img
          src="/about/video.jpg"
          className="rounded-lg object-cover lg:w-3/4"
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] -tranlate-y-1/2 -tranlate-x-1/2">
          <button className="flex cursor-pointer items-center justify-center bg-[#23A6F0] lg:p-7 p-3 rounded-full lg:-ml-9 -ml-5">
            <FaPlay className="text-white lg:w-6 lg:h-6 w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
