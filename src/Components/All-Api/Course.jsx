import axios from "axios";
import React, { useEffect, useState } from "react";
import Rightside from "../Home-Slider-Navbar/RightSide";
import Course_Button from "../Buttons/Course_Button";

const Course = () => {
  let [data, updatedata] = useState([]);
  let [sdata, updatesdata] = useState({
    id: "",
    name: "",
    fees: null,
    duration: "",
    comments: "",
  });
  let [product, updateproduct] = useState({
    id: "",
    name: "",
    fees: null,
    duration: "",
    comments: "",
  });
  async function show() {
    let r = await axios.get("https://princestudentapi.onrender.com/Course//");
    updatedata(r.data);
  }
  useEffect(() => {
    show();
  });
  const change = (e) => {
    updateproduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        {sdata.id} {sdata.name} {sdata.fees} {sdata.duration} {sdata.comments}
      </div>
      <div className="px-3">
        <p className="text-white fs-4">Our Courses</p>
  <Course_Button/>
        <table className="table  caption-top text-light rounded mt-2">
          <thead>
            <tr>
              <th scope="col">COURSE NAME</th>
              <th scope="col"> FEES</th>
              <th scope="col">DURATION</th>
              <th scope="col">COMMENTS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((v) => {
              return (
                <tr key={v.id}>
                  <td>{v.name}</td>
                  <td>{v.fees}</td>
                  <td>{v.duration}</td>
                  <td>{v.comments}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Rightside />
    </>
  );
};
export default Course;
