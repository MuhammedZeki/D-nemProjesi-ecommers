const ExploreItem = ({ item }) => {
  const { title, subTitle, ex, img } = item;
  return (
    <div className="border grow border-[#ECECEC] flex items-center bg-white px-4 py-2 font-montserrat justify-center">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-xl leading-6 tracking-[0.2px] text-[#737373]">
          {title}
        </span>
        <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] max-w-[190px]">
          {subTitle}
        </h2>
        <h6 className="font-normal text-md  leading-4 tracking-[0.2px] text-[#252B42]">
          {ex}
        </h6>
      </div>
      <div>
        <img src={img} className="object-contain h-52" />
      </div>
    </div>
  );
};

export default ExploreItem;
