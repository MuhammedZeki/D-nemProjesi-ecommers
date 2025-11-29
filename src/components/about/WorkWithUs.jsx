const WorkWithUs = () => {
  return (
    <div className="flex my-10">
      <div className="lg:w-2/3 w-full bg-[#8f300b] flex flex-col items-center justify-center gap-4 p-10 lg:p-0 text-center lg:text-start">
        <div className="flex flex-col gap-10 font-montserrat text-white">
          <h5 className="font-bold leading-6 tracking-[0.1px]">WORK WITH US</h5>
          <h2 className="font-bold text-5xl leading-12 tracking-[0.2px]">
            Now Let’s grow Yours
          </h2>
          <p className="font-medium leading-5 tracking-[0.2px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <div>
            <button className="border border-white rounded-lg px-8 py-4">
              Click Me
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 lg:flex lg:items-center lg:justify-center hidden">
        <img
          src="/about/oldmoney.jpg"
          className="object-cover w-full h-[700px]"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
