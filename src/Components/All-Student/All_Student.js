import React, { useState } from "react";
import All_student from "../All-Api/Student_Api";
import Sidebar from "../Home-Slider-Navbar/Sidebar";
import Home from "../Home-Slider-Navbar/Home";

const All_Student = () => {
  const [toggle, setToggl] = useState(true);
  const Toggle = () => {
    setToggl(!toggle);
  };
  return (
    <>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col ">
            <Home Toggle={Toggle} />
            <All_student />
          </div>
        </div>
      </div>
    </>
  );
};

export default All_Student;
