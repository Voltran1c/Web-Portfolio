function Project() {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center border-b bg-gray-50"
      id="project"
    >
      <div className="w-4/5 flex flex-col gap-4">
        <h2 className="text-6xl italic font-semibold border-y-4 py-4 border-gray-300 text-center text-slate-800">
          PROJECT PROJECT PROJECT
        </h2>
        <div className="flex flex-col items-center h-full text-slate-800 gap-4">
          <a
            className="w-full flex justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="https://kick-it-up.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="w-1/3 italic font-semibold text-3xl">
              01. KICK IT UP
            </h3>
            <p className="w-2/3 italic font-semibold text-xl text-slate-800 text-justify">
              A good Ecommerce web project should have a user-friendly and
              responsive design, ensure the security of customer data, an
              efficient inventory and product management system, integration of
              various payment methods, and the use of appropriate technologies
              to ensure the website runs fast and stable.
            </p>
          </a>
          <a
            className="w-full flex justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-1/3 italic font-semibold text-3xl">
              02. MOTION DESIGN
            </h3>
            <p className="w-2/3 italic font-semibold text-xl text-slate-800 text-justify">
              Motion design focuses on creating movement within various media to
              enhance user experience and create more memorable interactions. It
              utilizes tools and techniques such as CSS animations and
              JavaScript libraries to achieve engaging visual effects and
              animations in websites or applications.
            </p>
          </a>
          <a
            className="w-full flex justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-1/3 italic font-semibold text-3xl">
              03. USER AUTHENTICATION
            </h3>
            <p className="w-2/3 italic font-semibold text-xl text-slate-800 text-justify">
              Build an API for user authentication, including registration,
              login, and account management functionalities. Utilize JWT (JSON
              Web Tokens) for security measures.
            </p>
          </a>
          <a
            className="w-full flex justify-between items-center border-b-2 py-4 px-6 bg-white shadow-md hover:bg-slate-200 transition-all duration-300 ease-in-out"
            href="#"
          >
            <h3 className="w-1/3 italic font-semibold text-3xl">
              04. PAYMENT GATEWAY
            </h3>
            <p className="w-2/3 italic font-semibold text-xl text-slate-800 text-justify">
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
