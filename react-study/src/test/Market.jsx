// import "./Market.css";
import { Routes, Route } from "react-router";
import RegistID from "./RegistID";
import Items from "./Items";
import Detail from "./Detail";

function Market() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<RegistID />} />
                <Route path="/items" element={<Items />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default Market;
