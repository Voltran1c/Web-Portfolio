import CircumIcon from "@klarr-agency/circum-icons-react";

function Navbar() {
  return (
    <div className="dropdown dropdown-bottom dropdown-end flex justify-end fixed right-0 mr-2 mt-2">
      <div
        tabIndex="0"
        role="button"
        className="btn-circle bg-gray-400 flex justify-center items-center hover:bg-gray-300"
      >
        <CircumIcon name="box_list" />
      </div>
      <ul
        tabIndex="0"
        className="dropdown-content z-[1] text-right py-2 pr-2 cursor-pointer"
      >
        <li>
          <a
            className="hover:text-black font-bold text-3xl italic hover:font-extrabold text-slate-500"
            href="#home"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="hover:text-black font-bold text-3xl italic hover:font-extrabold text-slate-500"
            href="#miniproject"
          >
            MINIPROJECT
          </a>
        </li>
        <li>
          <a
            className="hover:text-black font-bold text-3xl italic hover:font-extrabold text-slate-500"
            href="#logotechstack"
          >
            TECH STACK
          </a>
        </li>
        <li>
          <a
            className="hover:text-black font-bold text-3xl italic hover:font-extrabold text-slate-500"
            href="#portfolio"
          >
            PROJECT
          </a>
        </li>
        <li>
          <a
            className="hover:text-black font-bold text-3xl italic hover:font-extrabold text-slate-500"
            href="#aboutme"
          >
            ABOUT ME
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
