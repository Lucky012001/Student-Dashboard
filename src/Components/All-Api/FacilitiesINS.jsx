import axios from "axios";
import React, { useEffect, useState } from "react";
import Rightside from "../Home-Slider-Navbar/RightSide";

const FacilitiesINS = () => {
  let [data, updatedata] = useState([]);
  let [sdata, updatesdata] = useState({
    id: "",
    teachername: "",
    teacheremail: null,
    teacherpassword: "",
    teachermobile: "",
    joindate: "",
    education: "",
    workexp: "",
    gender: "",
    is_active: "",
  });
  let [product, updateproduct] = useState({
    id: "",
    teachername: "",
    teacheremail: null,

    teachermobile: "",
    joindate: "",
    education: "",
    workexp: "",
    gender: "",
    is_active: "",
  });
  async function show() {
    let r = await axios.get("https://princestudentapi.onrender.com/Teacher//");
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
        {sdata.id} {sdata.teachername} {sdata.teacheremail}{" "}
        {sdata.teachermobile} {sdata.joindate} {sdata.workexp} {sdata.education}
        {sdata.is_active}
      </div>
      <div className="px-3">
        <p className="text-white fs-4">Facilities</p>
        <table className="table  caption-top text-light rounded mt-2">
          <thead>
            <tr>
              <th scope="col">FACILITIES NAME</th>
              <th scope="col">E-MAIL</th>

              <th scope="col">MOBILE</th>
              <th scope="col">JOIN-DATE</th>
              <th scope="col">EDUCATION</th>
              <th scope="col">WORK-EXP</th>
              <th scope="col">GENDER</th>
              <th scope="col">ACTIVE</th>
            </tr>
          </thead>

          <tbody>
            {data.map((v) => {
              return (
                <tr key={v.id}>
                  <td>{v.teachername}</td>
                  <td>{v.teacheremail}</td>

                  <td>{v.teachermobile}</td>
                  <td>{v.joindate}</td>
                  <td>{v.education}</td>
                  <td>{v.workexp}</td>
                  <td>{v.gender}</td>
                  <td>{v.is_active}</td>
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
export default FacilitiesINS;
