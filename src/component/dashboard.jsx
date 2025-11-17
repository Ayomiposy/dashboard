import Maindashboard from "./maindashboard";
import Navigation from "./navigation";

function Dashboard() {
  return (
    <div>
      {/* navigation bar */}
      <Navigation />
      {/* main dashboard  */}
      <div>
        <Maindashboard />
      </div>
    </div>
  );
}

export default Dashboard;
