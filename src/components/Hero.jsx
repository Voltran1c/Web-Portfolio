function Hero() {
  return (
    <div
      className="flex justify-center w-full h-screen content-center text-slate-800 border-b"
      id="#hero"
    >
      <div className="w-full xl:w-[34rem] h-full z-10 absolute sm:static xl:absolute xl:mr-[38rem] xl:text-right font-semibold text-4xl xl:text-7xl content-center pt-8 pb-20 pr-4 xl:pr-0 xl:ml-auto">
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          DON`T
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          DESIGN
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          FOR
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          DESIGNERS.
        </p>
        <br />
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          DESIGN
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          FOR
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-6">
          PEOPLE.
        </p>
      </div>
      <img
        src="/images/hero/pic2.1.png"
        alt="pic2"
        className="place-items-center z-0 ml-0 xl:ml-[460px] drop-shadow-[15px_1px_5px_rgb(100,116,139)] pb-1"
      />
    </div>
  );
}
export default Hero;
