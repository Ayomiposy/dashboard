import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./component/dashboard";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div className="flex  max-w-[1440px] mx-auto h-full font-inter">
      {/* navigation and sidebar*/}
      <Sidebar className="w-1/5" />

      {/* Main screen */}
      <div className="mainScreen w-4/5">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
