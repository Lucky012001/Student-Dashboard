import React from "react";
import "./Sidebar_style.css";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white sidebar p-2">
        <div className="m-2">
          <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
          <span className="brand-name fs-4">Lucky-Rajput</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <a className="list-group-item text-decoration-none  py-2 ">
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <Link to={{ pathname: "/Ap" }}>
              <span className="text text-decoration-none">Dashboard</span>
            </Link>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-people-fill fs-5 me-3"></i>
            <Link to={{ pathname: "/All_student" }}>All Student</Link>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-book fs-5 me-3"></i>
            <span>Courses</span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-person-video fs-5 me-3"></i>
            <span>Facilities</span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-arrow-right fs-5 me-3"></i>
            <span>Sign in</span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-file-richtext fs-5 me-3"></i>
            <span>Sign up</span>
          </a>
          <a className="list-group-item py-2">
            <i className="bi bi-power fs-5 me-3"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
