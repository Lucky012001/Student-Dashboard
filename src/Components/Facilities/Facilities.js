import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Sidebar_style.css";
import Home from "./Home";
import FacilitiesINS from "../All-Api/FacilitiesINS.jsx"

const Facilities = () => {
  const [toggle, setToggl] = useState(true);
  const Toggle = () => {
    setToggl(!toggle);
  };
  return (
    <>
      <div className="container-fluid min-vh-100 bg-dark">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col ">
            <Home Toggle={Toggle} />
             <FacilitiesINS/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
