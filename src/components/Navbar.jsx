import CircumIcon from "@klarr-agency/circum-icons-react";

function Navbar() {
  return (
    <div className="flex justify-between px-4 border-b-2 cursor-pointer relative">
      <div className="text-2xl font-semibold content-center italic drop-shadow-[3px_1px_2px_rgb(30,41,59)]">
        SPACEMAN1O1
      </div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex="0"
          role="button"
          className="btn-circle bg-gray-400 flex justify-center items-center hover:bg-gray-300"
        >
          <CircumIcon name="box_list" />
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] text-right py-2 pr-2"
        >
          <li>
            <a className="hover:text-blue-700 font-bold text-3xl italic hover:font-extrabold">
              HOME
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700 font-bold text-3xl italic hover:font-extrabold">
              ABOUT ME
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700 font-bold text-3xl italic hover:font-extrabold">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700 font-bold text-3xl italic hover:font-extrabold">
              BLOG
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700 font-bold text-3xl italic hover:font-extrabold">
              CONTRACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
