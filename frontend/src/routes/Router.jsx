import { Routes, Route } from "react-router-dom";
import Dashboared from "../pages/Dashboard";
import Add from "../pages/Add";
import Show from "../pages/Show";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboared />} />
            <Route path="/add" element={<Add />} />
            <Route path="/show" element={<Show />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    </>
  )
}

export default Router;