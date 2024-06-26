function AboutMe() {
  return (
    <div className="w-full h-screen flex justify-start ">
      <div className="w-4/6 flex flex-col gap-1 items-center">
        <h2 className="text-6xl italic font-semibold border-y-4 py-2 border-gray-300">
          ABOUT ME ABOUT ME ABOUT ME
        </h2>
        <p className="mr-12 italic font-semibold text-xl text-gray-500 text-justify items-center">
          I graduated from Generation Thailand in the Junior Software Developer
          Bootcamp program and have expertise in designing, developing, and
          deploying both front-end and back-end web applications. I possess a
          wide range of knowledge and skills and am enthusiastic about building
          software for organizations. My commitment lies in creating top-notch
          software, and I am a dedicated team player who is always eager to
          learn. Additionally, I am self-motivated and able to work
          independently.
        </p>
      </div>
      <div className="flex items-center">
        <img
          src="/public/images/hero/img2.jpg"
          alt=""
          className="h-3/5 rounded-lg"
        />
      </div>
    </div>
  );
}
export default AboutMe;
