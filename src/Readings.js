import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Readings = () => {
    const [readings, setReadings] = useState([]);
    useEffect(() => {
        fetch("https://dani-blog-backend.fly.dev/readings")
            .then((response) => response.json())
            .then((data) => setReadings(data.readings))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Readings</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Card 1</th>
                        <th>Card 2</th>
                        <th>Card 3</th>
                    </tr>
                </thead>
                <tbody>
                    {readings.map((reading) => {
                        console.log(reading);
                        return (
                            <tr key={reading.id}>
                                <td>
                                    <Link to={`/Readings/${reading.id}`}>
                                        {new Date(
                                            reading.createdAt
                                        ).toLocaleString()}
                                    </Link>
                                </td>
                                <td>{reading.card1.name}</td>
                                <td>{reading.card2.name}</td>
                                <td>{reading.card3.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Readings;
