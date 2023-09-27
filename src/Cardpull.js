import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cardpull.css";

const Cardpull = () => {
    const [cardData, setCardData] = useState(null);
    const [pulledCards, setPulledCards] = useState([]);

    useEffect(() => {
        // Fetch Tarot card data
        fetch("https://dani-blog-backend.fly.dev/randomCards")
            .then((response) => response.json())
            .then((data) => setCardData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handlePullCard = () => {
        setPulledCards([
            { ...cardData[0], label: "Past" },
            { ...cardData[1], label: "Present" },
            { ...cardData[2], label: "Future" },
        ]);
    };

    const handleSaveReading = async () => {
        if (pulledCards.length > 0) {
            try {
                // Send POST request to backend to save reading
                const response = await fetch(
                    "https://dani-blog-backend.fly.dev/pulledCards",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            cardID1: pulledCards[0].id,
                            cardID2: pulledCards[1].id,
                            cardID3: pulledCards[2].id,
                        }),
                    }
                );

                if (response.ok) {
                    console.log("Reading saved successfully!");
                } else {
                    console.error("Failed to save reading.");
                }
            } catch (error) {
                console.error("Error saving reading:", error);
            }
        }
    };

    return (
        <div>
            <div>
                {pulledCards.map((pulledCard, index) => (
                    <div key={index} className="tarot-card">
                        <h2>{pulledCard.label}</h2>
                        <h3>{pulledCard.name}</h3>
                        <p>{pulledCard.meaning_up}</p>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={handlePullCard}>Pull 3 Cards</button>
                {/* Use Link component for navigation */}
                {/* <Link to="/Readings"> */}
                <button
                    onClick={() => {
                        handleSaveReading().then(() => {
                            window.location.href = "/Readings";
                        });
                    }}
                >
                    Save Reading
                </button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Cardpull;
