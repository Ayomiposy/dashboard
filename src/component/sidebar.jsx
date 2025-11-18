import { Link, NavLink } from "react-router-dom";
import { mainNav } from "../datalist";
import { settingNav } from "../datalist";
import { Brandcard } from "./cards";
import { Profilecard } from "./cards";

function Navsection({ title, navlist }) {
  return (
    <nav className="p-3">
      <p className="text-sm text-soft-400 px-9">{title}</p>
      {navlist.map((each) => (
        <NavLink
          key={each.id}
          to={each.Path}
          className="font-inter flex my-1 gap-4 items-center text-left text-sm py-0.5 px-3 group rounded-lg"
        >
          {({ isActive }) => (
            <>
              <span
                className={`opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300 ${
                  isActive ? "opacity-100" : ""
                }`}
              >
                <img src="/assets/Icons/border-blue.svg" alt=" border blue" />
              </span>
              <div
                className={` ${
                  isActive ? "bg-weak-50" : ""
                } w-full flex items-center justify-between rounded px-3 py-0.5 group`}
              >
                <img
                  src={isActive ? each.activeImg : each.img}
                  alt={each.name}
                  className="mr-2 w-4 h-[13px]"
                />
                <p className={`${isActive && "font-bold"}`}>{each.name}</p>
                <span className="ml-auto">
                  <img
                    src="/assets/Icons/hover-arrow.svg"
                    alt="hover arrow"
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300 w-2 ${
                      isActive ? "opacity-100" : ""
                    }`}
                  />
                </span>
              </div>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="w-1/5 h-screen text/sub-600 px-1 py-3 flex flex-col border-r-2 border-soft-200">
      {/* Brandcard */}
      <Brandcard />
      {/* Navigation */}
      <div className="flex-1 flex-col flex">
        <img src="/assets/Icons/Divider.svg" alt="divider" className="px-5" />
        {/* main navigation */}
        <Navsection title="MAIN" navlist={mainNav} />
        {/* settings Navigation */}
        <Navsection title="OTHERS" navlist={settingNav} />
        <img
          src="/assets/Icons/Divider.svg"
          alt="divider"
          className="px-8 mt-auto"
        />
      </div>
      {/* Profile card */}
      <Profilecard />
    </div>
  );
}

export default Sidebar;
