import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./views/Home/Home";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Home />
    </>
);