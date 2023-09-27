import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar" id="myNavbar">
            <span>
                <Link to="Profiles">Log-In</Link>
            </span>
            <span>
                <Link to="Home">Fortune Teller</Link>
            </span>
            <span>
                <Link to="Cardpull">Tarot Reading</Link>
            </span>
            <span>
                <Link to="Readings">Saved Readings</Link>
            </span>
            <span>
                <Link to="Decks">Decks</Link>
            </span>
            <span>
                <Link to="Links">Links</Link>
            </span>
        </div>
    );
};

export default Navbar;
