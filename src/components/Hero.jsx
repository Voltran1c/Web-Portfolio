function Hero() {
  return (
    <div className="flex justify-center w-full h-screen content-center relative">
      <div className="w-[34rem] h-full bg-white z-10 absolute mr-[32rem] text-right font-semibold text-6xl content-center pt-8 pb-20">
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          DON'T
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          DESIGN
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          FOR
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          DESIGNERS.
        </p>
        <br />
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          DESIGN
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          FOR
        </p>
        <p className="pr-4 italic font-semibold drop-shadow-[-10px_1px_1px_rgb(209,213,219)] py-7">
          PEOPLE.
        </p>
      </div>
      <img
        src="/images/hero/pic1.png"
        alt="pic2.2"
        className="place-items-center z-0 pb-14 drop-shadow-[15px_1px_5px_rgb(0,0,0)]"
      />
    </div>
  );
}
export default Hero;
