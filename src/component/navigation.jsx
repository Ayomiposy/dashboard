import { Profilecard } from "./cards";

function Navigation({ className }) {
  return (
    <nav
      className={`flex justify-between w-full items-center px-6 py-0.5 ${className}`}
    >
      <Profilecard
        text="Welcome back to Apex 👋🏻"
        arrowicon={false}
        showtick={false}
      />

      <div className="flex gap-6 items-center">
        {/* search bar */}
        <img
          src="/public/assets/Icons/searchbar.svg"
          alt="search icon"
          className="w-[15.24px]"
        />
        <div className="relative h-full hover:bg-gray-300">
          <div className="absolute top-[-8px] right-[-3px] w-[5px] h-[5px] bg-[#FB3748] rounded-full drop-shadow-[0_1px_2px_rgba(10,_13,_20,_0.03)] animate-pulse"></div>
          <img
            src="/public/assets/Icons/notificationicon.svg"
            alt="notification icon"
            className="w-[15.24px]"
          />
        </div>
        <button className="flex bg-primary-base gap-3 justify-between items-center  py-1.5 px-3 rounded-lg text-static-white">
          Move Money{" "}
          <span>
            <img
              src="/public/assets/Icons/buttonarrowIcon.svg"
              alt=""
              className="w-[9px]"
            />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
