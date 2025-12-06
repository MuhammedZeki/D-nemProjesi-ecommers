const AboutDescription = () => {
  return (
    <div className="flex items-center justify-center w-full mt-5 px-10 lg:w-[75%] mx-auto py-8">
      <div className="lg:flex lg:flex-row flex flex-col items-center gap-16 font-montserrat lg:px-20 lg:py-10 p-6 text-center lg:text-start">
        <div className="flex flex-col gap-4">
          <p className="text-[#E74040] font-medium leading-5 tracking-[0.2px] dark:text-[#a56464]">
            Problems trying
          </p>
          <h2 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
        <div>
          <p className="text-[#737373] dark:text-[#fafafa] font-medium leading-5 tracking-[0.2px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
