const ProductCardItem = ({ count }) => {
  return (
    <div className="py-12 px-3.5">
      <div className="flex items-start gap-2 px-8 py-2 lg:px-0 lg:py-0">
        <h2 className="font-bold text-4xl leading-12 tracking-[0.2px] text-[#E74040]">
          {count}.
        </h2>
        <div className="flex flex-col gap-2">
          <h6 className="font-bold text-md leading-6 tracking-[0.2px] text-[#252B42] dark:text-[#fafafa]">
            Easy to use
          </h6>
          <p className="font-normal text-sm leading-4 tracking-[0.2px] text-[#737373] dark:text-[#fafafa]">
            Things on a very small that you have any direct
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardItem;
