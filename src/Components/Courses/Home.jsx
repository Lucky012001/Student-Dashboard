import React from "react";
import Nav from "./Nav";

 

const Home = ({ Toggle }) => {
  return (
    <>
      <div className="px-3">
        <Nav Toggle={Toggle} />
        <div className="container-fluid">
          <div className="row g-3 my-2">
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">50</h3>
                  <p className="fs-5">Total Students</p>
                </div>
                <i className="bi bi-person-circle p-3 fs-1"></i>
              </div>
               
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">10</h3>
                  <p className="fs-5">Total Courses</p>
                </div>
                <i className="bi bi-book p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">5</h3>
                  <p className="fs-5">Front-End Courses</p>
                </div>
                <i className="bi bi-front p-3 fs-1"></i>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 className="fs-2">5</h3>
                  <p className="fs-5">Back-End Courses</p>
                </div>
                <i className="bi bi-back p-3 fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------ */}
      {/* <Api  /> */}
    </>
  );
};

export default Home;
