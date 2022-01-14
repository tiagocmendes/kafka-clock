import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Clock from "./components/Clock";

function getTime() {
    return new Date().toTimeString().split(" ")[0];
}

function postCurrentTime(key, now) {
    axios
        .post("http://localhost:8080/kafka-clock", {
            key: String(key),
            value: now,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function App() {
    const [now, setNow] = useState(getTime());
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(getTime());
            setKey(key + 1);
            postCurrentTime(key, now);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <div className="App">
            <header className="timer">
                <h1>Kafka Clock</h1>
                <Clock />
                <h2>{now}</h2>
            </header>
        </div>
    );
}

export default App;
