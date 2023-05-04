import axios from "axios";
import React, { useEffect, useState } from "react";
import Rightside from "../Home-Slider-Navbar/RightSide";

const Student_Api = () => {
  let [data, updatedata] = useState([]);
  let [sdata, updatesdata] = useState({
    id: "",
    name: "",
    email: null,
    contact: "",
    password: "",
  });
  let [product, updateproduct] = useState({
    id: "",
    name: "",
    email: null,
    contact: "",
    password: "",
  });
  async function show() {
    let r = await axios.get(
      "https://princestudentapi.onrender.com/Registration//"
    );
    updatedata(r.data);
    console.log(r.data.length);
  }
  useEffect(() => {
    show();
  });
  return (
    <>
      <div>
        {sdata.id} {sdata.name} {sdata.email} {sdata.contact} {sdata.password}
      </div>
      <div className="px-3">
        <p className="text-white fs-4">Students</p>
        <table className="table  caption-top text-light rounded mt-2 space-auto">
          <thead>
            <tr>
              <th scope="col"> NAME</th>
              <th scope="col"> E-MAIL</th>
              <th scope="col"> CONTACT</th>
              <th scope="col"> PASSWORD</th>
            </tr>
          </thead>

          <tbody>
            {data.map((v) => {
              return (
                <tr key={v.id}>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.contact}</td>
                  <td>{v.password}</td>
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
export default Student_Api;
