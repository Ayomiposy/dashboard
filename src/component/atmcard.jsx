import { useState, useEffect } from "react";
import RecentTransaction from "./recenttransaction";

function Atmcard() {
  const [virtual, setVirtual] = useState();
  const [businesscard, setBusinesscard] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [spending, setSpending] = useState(() => {
    // Load spending limit from localStorage on initial render
    const saved = localStorage.getItem("spendingLimit");
    return saved ? Number(saved) : 0;
  });

  // Save spending limit to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("spendingLimit", spending);
  }, [spending]);

  function handleSpending() {
    let limit = prompt(`Enter new spending limit:`);
    let amount = Number(limit);

    if (!isNaN(amount)) {
      setSpending(amount);
    }
  }

  function handleMore() {
    const more = prompt(
      `Choose an option:\n1.Freeze Card\n2. Block Card\n3. Change PIN\n4. View Statement\n5. Report Lost/Stolen`
    );
  }

  return (
    <div className={`p-[16px] border border-soft-200  rounded-2xl`}>
      {/* Card buttons */}
      <div className="flex gap-4 p-1 mb-5 justify-between">
        <button className="w-[50%]" onClick={() => setVirtual(false)}>
          Virtual <span>(2)</span>
        </button>
        <button className="w-[50%]" onClick={() => setVirtual(true)}>
          Physical <span>(1)</span>
        </button>
      </div>

      {/* ATM Card Display */}

      <div
        className={`min-w-full h-[188px] border ${
          virtual ? "bg-black border-none" : "bg-static-white"
        }  rounded-2xl bg-card-image bg-no-repeat bg-[left_235px_bottom_60px] p-[20px] flex flex-col justify-between ${
          hidden
            ? "border-red-500 shadow-[0px_1px_2px_0px_rgba(10,_13,_20,_0.03)] opacity-75"
            : "border-soft-200"
        }`}
      >
        {/* atm card top element */}
        <div className="flex gap-3 items-center">
          <img
            src={`${
              virtual
                ? "/public/assets/Icons/cardseal.svg"
                : "/public/assets/Icons/brandlogo.svg"
            }`}
            alt="brand logo"
            className="w-[32px]"
          />
          <img src="/public/assets/Icons/cardsensor.svg" alt="card sensor" />
          <div
            className={`flex h-[24px] px-2 py-[1px] font-medium ${
              virtual
                ? "text-static-white"
                : "text-sub-600  border border-soft-200"
            } ${
              hidden && !virtual
                ? "border border-red-500 bg-red-50 text-red-500"
                : ""
            } ${
              hidden ? "border border-red-500 text-red-500" : ""
            } rounded-lg text-xs items-center gap-3`}
          >
            <span>
              <img
                src="/public/assets/Icons/cardtick.svg"
                alt=""
                className="w-[12px]"
              />
            </span>
            {hidden ? "Hidden" : "Active"}
          </div>
          <img
            src="/public/assets/Icons/MastercardIcon.svg"
            alt="Mastercard icon"
            className="ml-auto"
          />
        </div>

        {/* atm bottom card */}
        <div>
          {virtual ? (
            <p className="text-static-white font-normal">Physical Card</p>
          ) : (
            <p className="text-sub-600 font-normal">Savings Card</p>
          )}
          <div className="flex justify-between">
            <p
              className={`text-[32px] font-medium ${
                virtual ? "text-static-white" : "text-black"
              }`}
            >
              {!virtual && businesscard ? "$8,245.67" : "$16,058.94"}
            </p>
            <div className="mt-auto">
              <Button
                className="rounded-l-md"
                virtual={virtual}
                src={"/public/assets/Icons/leftarrow.svg"}
                setBusinesscard={setBusinesscard}
                businesscard={businesscard}
              />
              <Button
                className="rounded-r-md"
                virtual={virtual}
                src={"/public/assets/Icons/rightarrow.svg"}
                setBusinesscard={setBusinesscard}
                businesscard={businesscard}
              />
            </div>
          </div>
        </div>
      </div>

      {/* card details */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex justify-between items-center px-2">
          <span>Card Number</span> <span>• • • • 5678</span>
        </div>
        <div className="flex justify-between items-center px-2">
          <span>Expiry Date</span> <span>06/29</span>
        </div>
        <div className="flex justify-between items-center px-2">
          <span>CVC</span> <span>• • • •</span>
        </div>
        <div
          className="flex justify-between items-center px-2"
          onClick={handleSpending}
        >
          <span>Spending Limit</span>{" "}
          <span>
            $
            {spending.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* Added card details function, hide, spending limit  */}
        <div className="flex gap-3 justify-between py-4 border-b border-[#E1E4EA]">
          <button
            onClick={() => setHidden(!hidden)}
            className="font-[family-name:var(--font-inter)] cursor-pointer border bg-white rounded-[8px] px-[14px] w-full flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px] text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
          >
            {hidden ? "Unhide" : "Hide"}
          </button>
          <button
            onClick={handleSpending}
            className="font-[family-name:var(--font-inter)] cursor-pointer border bg-white rounded-[8px] px-[14px] w-full text-nowrap flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px] text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
          >
            Adjust Limit
          </button>
          <button
            onClick={handleMore}
            className="font-[family-name:var(--font-inter)] cursor-pointer border bg-white rounded-[8px] px-[14px] w-full flex justify-center gap-1.5 h-8 items-center text-sm font-medium leading-5 tracking-[-0.084px] text-[#525866] border-[#404040] hover:bg-gray-50 transition-colors"
          >
            More
          </button>
        </div>
      </div>

      {/* Recent Transaction component */}
      <RecentTransaction />
    </div>
  );
}

export default Atmcard;

function Button({ className, virtual, src, businesscard, setBusinesscard }) {
  return (
    <button
      className={`p-[6px] border ${
        virtual ? "border-sub-600" : "border-soft-200"
      } ${className}`}
      onClick={() => setBusinesscard(!businesscard)}
    >
      <img src={src} alt="" className="w-[5px] " />
    </button>
  );
}
