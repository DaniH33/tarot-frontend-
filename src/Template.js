import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Template = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingBottom: 75 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Template;
