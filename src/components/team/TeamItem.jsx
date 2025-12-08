import React from "react";

const TeamItem = ({ img, name, job }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={img} className="w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <h5 className="font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
          {name}
        </h5>
        <p className="font-normal text-sm leading-8 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
          {job}
        </p>
      </div>
    </div>
  );
};

export default TeamItem;
