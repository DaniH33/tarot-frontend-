import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Decks from "./Decks";
import Profiles from "./Proflies";
import Links from "./Links";
import Cardpull from "./Cardpull";
import Template from "./Template";
import Readings from "./Readings";
import ReadingDetails from "./ReadingDetails";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Template />,
            children: [
                {
                    path: "Home",
                    element: <Home />,
                },
                {
                    path: "Profiles",
                    element: <Profiles />,
                },
                {
                    path: "Links",
                    element: <Links />,
                },
                {
                    path: "Decks",
                    element: <Decks />,
                },
                {
                    path: "Cardpull",
                    element: <Cardpull />,
                },
                {
                    path: "Readings",
                    element: <Readings />,
                },
                { path: "Readings/:id", element: <ReadingDetails /> },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
