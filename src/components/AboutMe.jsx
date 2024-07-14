import "./AboutMe.css";

function AboutMe() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-100"
      id="aboutme"
    >
      <div className="max-w-screen-lg mx-6 md:mx-10 lg:mx-20 xl:mx-32 flex flex-col gap-4 items-center mt-20 xl:mt-44 text-slate-800">
        <h2 className="text-4xl md:text-6xl italic font-semibold border-b-4 py-2 border-gray-300 text-center">
          ABOUT ME
        </h2>
        <p className="text-lg md:text-xl italic font-semibold text-slate-800 text-justify px-4 md:px-10">
          I graduated from Generation Thailand in the Junior Software Developer
          Bootcamp program and have expertise in designing, developing, and
          deploying both front-end and back-end web applications. I possess a
          wide range of knowledge and skills and am enthusiastic about building
          software for organizations. My commitment lies in creating top-notch
          software, and I am a dedicated team player who is always eager to
          learn. Additionally, I am self-motivated and able to work
          independently.
        </p>
        <div className="flex flex-row mt-4 md:mt-8 justify-center space-x-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=watcharapong.k.korn@gmail.com&su=หัวข้ออีเมล&body=เนื้อหาอีเมล"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/google.svg"
              alt="google"
              className="w-10 h-10 mx-2 md:mx-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/watcharapong1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/linkedin.svg"
              alt="linkedin"
              className="w-10 h-10 mx-2 md:mx-4"
            />
          </a>
          <a
            href="https://github.com/Voltran1c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/github.svg"
              alt="github"
              className="w-10 h-10 mx-2 md:mx-4"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1YvWvdbMm1pytBJuC2yS33cM69VnCS2AC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/CV.svg"
              alt="cv"
              className="w-10 h-10 mx-2 md:mx-4"
            />
          </a>
          <a
            href="https://www.instagram.com/pp.watcharapong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/instagram.svg"
              alt="instagram"
              className="w-10 h-10 mx-2 md:mx-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
