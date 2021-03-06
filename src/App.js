import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Carousel from "./components/carousel";

function App() {
    return (
        <div className="App">
            <Header/>
            <Carousel flowTime={3000}
            />
        </div>
    );
}

export default App;
