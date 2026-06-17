import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import TempApp from "./TempApp.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            {/* <TempApp /> */}
        </BrowserRouter>
    </StrictMode>,
);
