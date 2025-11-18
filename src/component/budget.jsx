const budgetList = [
  {
    id: 1,
    dot: "/public/assets/Icons/incomedot.svg",
    name: "Income",
    Image: "/public/assets/Icons/incomeicon.svg",
    amount: 96000,
  },

  {
    id: 2,
    dot: "/public/assets/Icons/expensesdot.svg",
    name: "Expenses",
    Image: "/public/assets/Icons/expensesicon.svg",
    amount: 24000,
  },

  {
    id: 3,
    dot: "/public/assets/Icons/scheduledot.svg",
    name: "Scheduled",
    Image: "/public/assets/Icons/scheduleicon.svg",
    amount: 14000,
  },
];

function Budget() {
  return (
    <div className="border border-soft-200 rounded-2xl p-5 flex flex-col gap-10">
      <div className="flex border-b-[1px] pb-6">
        {/* budget overview */}
        <div className="flex items-center gap-2">
          <img src="/public/assets/Icons/budgeticon.svg" alt="Budget icon" />
          <p>Budget Overview</p>
        </div>

        <div className="flex ml-auto">
          {budgetList.map((list) => (
            <span
              key={list.id}
              className="flex justify-center items-center gap-2 mr-6 text-xs font-normal"
            >
              {" "}
              <img
                src={list.dot}
                alt={`${list.name} Icon`}
                className="w-[12px]"
              />
              {list.name}
            </span>
          ))}

          <button className="flex justify-center items-center text-sm font-normal gap-2 rounded-md border border-soft-200 px-3 py-1">
            Last Year{" "}
            <img
              src="/public/assets/Icons/arrowdown.svg"
              alt="arrow down"
              className="w-[9.55px]"
            />
          </button>
        </div>
      </div>

      {/* income expenses schedule */}

      <div className="flex gap-6 pt-3">
        {budgetList.map((list) => (
          <div key={list.id} className={`flex gap-5`}>
            <img src={list.Image} alt={list.name} />
            <div>
              <p className="text-[14px] font-medium uppercase text-soft-400 ">
                {list.name}
              </p>
              <p className="text-[18px] font-medium text-black flex gap-2">
                $
                {list.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                {list.id < budgetList.length ? (
                  <span
                    className={`font-medium text-xs rounded-full px-2 justify-center items-centerx ${
                      list.id === 1 ? "bg-[#C2F5DA]" : "bg-[#FFC0C5]"
                    }`}
                  >
                    {list.id === 1 ? "+5%" : "-3%"}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Budget chart */}
      <img src="/public/assets/Icons/budgetchart.svg" alt="Budget chart" />
    </div>
  );
}

export default Budget;
