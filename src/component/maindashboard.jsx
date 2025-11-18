import Atmcard from "./atmcard";
import Budget from "./budget";
import Navigation from "./navigation";

export default function Maindashboard() {
  return (
    <div className="grid grid-cols-3 p-6 min-h-[784px] gap-6">
      <Atmcard />
      <div className="col-span-2">
        <Budget />
      </div>
    </div>
  );
}
