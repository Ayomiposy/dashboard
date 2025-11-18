import { recentTransaction } from "../datalist";
import { NavLink } from "react-router-dom";

function RecentTransaction() {
  return (
    <div className="mt-6">
      <p className="text-sm text-soft-400">RECENT TRANSACTIONS</p>
      {recentTransaction.map((recent) => (
        <RecentList key={recent.id} recent={recent} />
      ))}

      {/* See all transaction */}
      <NavLink to="/Transaction">
        <button className="flex gap-3 border border-soft-200 px-8 py-2 rounded-md mx-auto w-full justify-center mb-8">
          <img src="/assets/Icons/transaction.svg" alt="" />
          See All Transaction
        </button>
      </NavLink>
    </div>
  );
}

export default RecentTransaction;

function RecentList({ recent }) {
  return (
    <div className="flex h-[56px] gap-3 items-center my-3 px-4 pb-8">
      {/* Icon */}
      <div className="w-[40px] h-[40px] border-2 border-soft-200 rounded-full flex justify-center items-center">
        <img
          src={recent.icon}
          alt={`${recent.name} icon`}
          className="w-[24px]"
        />
      </div>
      {/* description */}
      <div className="flex flex-col justify-center">
        <h3 className="font-medium text-[14px] text-black ">{recent.name}</h3>
        <p className="font-normal text-xs text-sub-600">{recent.details}</p>
      </div>

      {/* date and price */}
      <div className="flex gap-3 items-center">
        <span className="flex flex-col justify-center text-right">
          <p className="text-[14px] font-medium ">{recent.amount}</p>
          <p className="font-normal text-xs text-sub-600">{recent.date}</p>
        </span>
        <img src="/assets/Icons/rightarrow.svg" alt="right arrow" />
      </div>
    </div>
  );
}
