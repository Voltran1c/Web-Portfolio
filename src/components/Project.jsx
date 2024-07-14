import "./Project.css";

function Project() {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-gray-50"
      id="project"
    >
      <div className="w-4/5 flex flex-col gap-4 xl:w-2/3">
        <h2 className="text-4xl lg:text-6xl italic font-semibold border-b-4 py-4 border-gray-300 text-center text-slate-800">
          <span className="text-marquee w-full xl:w-2/3 block">
            <span>PROJECT</span> <span>PROJECT</span> <span>PROJECT</span>
          </span>
        </h2>
        <div className="flex flex-col items-center gap-4">
          <a
            className="w-full flex flex-col xl:flex-row justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="https://kick-it-up.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="w-full xl:w-1/3 text-2xl lg:text-3xl italic font-semibold text-center xl:text-left text-slate-800">
              01. KICK IT UP
            </h3>
            <p className="w-full xl:w-2/3 text-lg lg:text-xl italic font-semibold text-justify text-slate-800">
              A good Ecommerce web project should have a user-friendly and
              responsive design, ensure the security of customer data, an
              efficient inventory and product management system, integration of
              various payment methods, and the use of appropriate technologies
              to ensure the website runs fast and stable.
            </p>
          </a>
          <a
            className="w-full flex flex-col xl:flex-row justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-full xl:w-1/3 text-2xl lg:text-3xl italic font-semibold text-center xl:text-left text-slate-800">
              02. MOTION DESIGN
            </h3>
            <p className="w-full xl:w-2/3 text-lg lg:text-xl italic font-semibold text-justify text-slate-800">
              Motion design focuses on creating movement within various media to
              enhance user experience and create more memorable interactions. It
              utilizes tools and techniques such as CSS animations and
              JavaScript libraries to achieve engaging visual effects and
              animations in websites or applications.
            </p>
          </a>
          <a
            className="w-full flex flex-col xl:flex-row justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-full xl:w-1/3 text-2xl lg:text-3xl italic font-semibold text-center xl:text-left text-slate-800">
              03. CHAT APPLICATION
            </h3>
            <p className="w-full xl:w-2/3 text-lg lg:text-xl italic font-semibold text-justify text-slate-800">
              Developing a chat application using React involves designing a
              user-friendly UI, efficient state management, seamless backend
              integration, and utilizing WebSocket for real-time communication.
              This setup allows immediate interaction and responsiveness for
              users.
            </p>
          </a>
          <a
            className="w-full flex flex-col xl:flex-row justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-full xl:w-1/3 text-2xl lg:text-3xl italic font-semibold text-center xl:text-left text-slate-800">
              04. PAYMENT GATEWAY
            </h3>
            <p className="w-full xl:w-2/3 text-lg lg:text-xl italic font-semibold text-justify text-slate-800">
              Create an API to integrate with online payment systems such as
              Stripe, PayPal, or other payment services. This enables the
              application to accept payments in various forms.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
