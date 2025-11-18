import React from "react";

export function Brandcard() {
  return (
    <div className="flex gap-4 px-6 py-3 mb-5">
      <img
        src="/assets/Icons/brandlogo.svg"
        alt="brand logo"
        className="w-[40px]"
      />
      <div>
        <p className="text-sm font-semibold">Apex</p>
        <p className="text-sm font-normal">Finance & Banking</p>
      </div>
      <img
        src="/assets/Icons/profilechangeicon.svg"
        alt="profile change icon"
        className="w-[24px] ml-auto"
      />
    </div>
  );
}

export function Profilecard({
  name = "Arthur Taylor",
  text = "arthur@alignui.com",
  arrowicon = true,
  showtick = true,
}) {
  return (
    <div className="flex gap-4 px-6 py-3 ">
      <img
        src="/assets/Icons/profileavatar.svg"
        alt="brand logo"
        className="w-[40px]"
      />
      <div>
        <p className="text-sm font-semibold flex items-center gap-2">
          {name}
          {showtick && (
            <span>
              <img src="/assets/Icons/bluetick.svg" alt="Bluetick" />
            </span>
          )}
        </p>
        <p className="text-sm font-normal">{text}</p>
      </div>
      {arrowicon && (
        <img
          src="/assets/Icons/hover-arrow.svg"
          alt="profile change icon"
          className="w-2 ml-auto"
        />
      )}
    </div>
  );
}
