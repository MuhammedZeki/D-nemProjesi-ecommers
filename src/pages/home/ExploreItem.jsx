const ExploreItem = ({ item, key }) => {
  return (
    <div
      key={key}
      className="border grow border-[#ECECEC] flex items-center bg-white rounded-md px-4 py-6 font-montserrat justify-center"
    >
      <div className="flex flex-col gap-2 ">
        <span className="font-bold text-xl leading-6 tracking-[0.2px] text-[#737373]">
          {item?.title}
        </span>
        <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] max-w-[190px]">
          {item?.subTitle}
        </h2>
        <h6 className="font-normal text-md  leading-4 tracking-[0.2px] text-[#252B42]">
          {item?.ex}
        </h6>
      </div>
      <div>
        <img src={item?.img} className="object-contain h-52 w-56 rounded-md" />
      </div>
    </div>
  );
};

export default ExploreItem;
