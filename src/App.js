import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import All_Student from "./Components/All-Student/All_Student";
import Ap from "./Components/Home-Slider-Navbar/Ap";
import Courses from "./Components/Courses/Courses";
import Facilities from "./Components/Facilities/Facilities";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Ap />}></Route>
        <Route path="/All_Student" element={<All_Student />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Facilities" element={<Facilities />}></Route>
      </Routes>
    </>
  );
};

export default App;

// import React from "react";
// import APP_SIgnIN_UP from "../src/Components/SignIN-SignUP/APP_SIgnIN_UP.jsx";

// const App = () => {
//   return (
//     <>
//       <APP_SIgnIN_UP />
//     </>
//   );
// };

// export default App;
