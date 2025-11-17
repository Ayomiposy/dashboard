import Atmcard from "./atmcard";
import Navigation from "./navigation";

export default function Maindashboard() {
  return (
    <div className="grid grid-cols-3 p-6 min-h-[784px]">
      <Atmcard />
      {/* <Navigation className="col-span-2 font-inter" /> */}
    </div>
  );
}
