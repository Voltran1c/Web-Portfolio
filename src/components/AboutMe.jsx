import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="w-full h-screen flex justify-start" id="aboutme">
      <div className="w-4/6 flex flex-col gap-1 items-center mt-44 text-slate-800">
        <h2 className="text-6xl italic font-semibold border-y-4 py-4 border-gray-300">
          <span className="text-marquee-aboutme w-2/3">
            <span>ABOUT ME</span>
            <span>ABOUT ME</span>
            <span>ABOUT ME</span>
          </span>
        </h2>
        <p className="w-9/12 h-auto mr-12 italic font-semibold text-xl text-slate-800 text-justify content-center pt-10 pl-10">
          I graduated from Generation Thailand in the Junior Software Developer
          Bootcamp program and have expertise in designing, developing, and
          deploying both front-end and back-end web applications. I possess a
          wide range of knowledge and skills and am enthusiastic about building
          software for organizations. My commitment lies in creating top-notch
          software, and I am a dedicated team player who is always eager to
          learn. Additionally, I am self-motivated and able to work
          independently.
        </p>
        <div>
          <div className="flex flex-row mt-8 border-y-4 py-4 border-gray-300">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=watcharapong.k.korn@gmail.com&su=หัวข้ออีเมล&body=เนื้อหาอีเมล"
              target="_blank"
            >
              <img
                src="/images/logo/google.svg"
                alt="google"
                className="w-10 h-10 mx-12"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/watcharapong1996"
              target="_blank"
            >
              <img
                src="/images/logo/linkedin.svg"
                alt="linkedin"
                className="w-10 h-10 mx-12"
              />
            </a>
            <a href="https://github.com/Voltran1c" target="_blank">
              <img
                src="/images/logo/github.svg"
                alt="github"
                className="w-10 h-10 mx-12"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1YvWvdbMm1pytBJuC2yS33cM69VnCS2AC/view?usp=sharing"
              target="_blank"
            >
              <img
                src="/images/logo/CV.svg"
                alt="cv"
                className="w-10 h-10 mx-12"
              />
            </a>
            <a
              href="https://www.instagram.com/pp.watcharapong/"
              target="_blank"
            >
              <img
                src="/images/logo/instagram.svg"
                alt="instagram"
                className="w-10 h-10 mx-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/images/hero/img2.jpg" alt="" className="h-3/5 rounded-lg" />
      </div>
    </div>
  );
}

export default AboutMe;
