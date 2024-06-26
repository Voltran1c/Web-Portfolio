import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";

function Navbar() {
  return (
    <div className="flex justify-between mx-4 border-b-2 cursor-pointer relative">
      <div className="text-2xl font-semibold content-center italic drop-shadow-[3px_1px_2px_rgb(30,41,59)]">
        SPACEMAN1O1
      </div>
      <div class="dropdown dropdown-bottom dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn-circle bg-gray-300 flex justify-center items-center hover:bg-gray-500"
        >
          <CircumIcon name="box_list" />
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] text-right py-2 pr-2">
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
