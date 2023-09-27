import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadingDetails = () => {
    const { id } = useParams();
    const [cardData, setCardData] = useState();

    useEffect(() => {
        // Fetch Tarot card data
        fetch(`https://dani-blog-backend.fly.dev/readings/${id}`)
            .then((response) => response.json())
            .then((data) => setCardData(data.reading))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]); // Add 'id' to the dependency array

    if (!cardData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card label="Past" cardData={cardData.card1} />
            <Card label="Present" cardData={cardData.card2} />
            <Card label="Future" cardData={cardData.card3} />
        </div>
    );
};

const Card = ({ cardData, label }) => {
    return (
        <div className="tarot-card">
            <h2>{label}</h2>
            <h3>{cardData.name}</h3>
            <p>{cardData.meaning_up}</p>
        </div>
    );
};

export default ReadingDetails;
