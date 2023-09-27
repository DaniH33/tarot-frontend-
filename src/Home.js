import { useState } from "react";
import "./Home.css";

const fortunes = [
    "You will have a great day!",
    "Good fortune is coming your way!",
    "You will meet someone important today.",
    "Be patient. The best is yet to come.",
    "An exciting opportunity is on the horizon.",
    "Your hard work will pay off soon.",
    "A pleasant surprise awaits you.",
    "Happiness will find you today.",
    "Success is within your reach.",
    "Your creativity will lead you to success.",
    "A new friendship will blossom.",
    "An important offer will be made, be prepared and dress to impress",
];
const Home = () => {
    const [fortune, setFortune] = useState(
        "Click the button below to reveal your fortune!"
    );

    const getFortune = () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const newFortune = fortunes[randomIndex];
        setFortune(newFortune);
    };

    return (
        <div
            className="container"
            style={{
                backgroundImage: "url('/logo2.jpg')",
                minHeight: "100vh",
                minWidth: "100vw",
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h1>Fortune Teller</h1>
                    <p className="fortune" id="fortune-text">
                        {fortune}
                    </p>
                    <button onClick={getFortune}>Get Fortune</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
