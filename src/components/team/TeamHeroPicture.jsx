const TeamHeroPicture = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row gap-4 my-10">
      <div className="grow">
        <div className="flex items-center justify-center">
          <img
            src="/team/img1.jpg"
            className="object-cover lg:w-full w-[413px] lg:h-[610px] h-[530px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/team/img2.jpg"
            className="object-cover lg:w-[450px] w-[190px] h-[300px]"
          />
          <img
            src="/team/img3.jpg"
            className="object-cover lg:w-[450px] w-[190px] h-[300px]"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <img
            src="/team/img4.jpg"
            className="object-cover lg:w-[450px] w-[190px] h-[300px]"
          />
          <img
            src="/team/img5.jpg"
            className="object-cover lg:w-[450px] w-[190px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHeroPicture;
