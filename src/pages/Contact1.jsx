const Contact = () => {
  return (
    <div className="relative h-screen border border-black ">
      <img
        src="/home/homeBanner.jpg"
        className="object-cover h-screen w-full"
      />
      <div className="absolute top-0 left-0 h-screen w-full bg-black/50"></div>
      <div className="flex flex-col px-5 w-full items-center justify-center gap-8 font-montserrat absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="font-bold text-4xl  leading-12 tracking-[0.2px] text-[#FAFAFA]">
          Questions & Answers
        </h2>
        <p className="font-semibold leading-5 tracking-[0.2px] text-[#FAFAFA]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <button className="text-[#FAFAFA] cursor-pointer font-semibold text-xl px-3 py-5 leading-5 tracking-[0.2px] border-b border-b-[#FAFAFA]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
