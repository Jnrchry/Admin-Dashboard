import React from "react";
import Topbar from "./components/topbar/Topbar.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
};

export default App;
