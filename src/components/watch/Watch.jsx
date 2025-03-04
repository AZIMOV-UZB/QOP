"use client";  // <-- BIRINCHI QATORGA QO‘SHING!
import React, { useState, useEffect } from "react";

const Watch = () => {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const updateClock = () => {
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let result = [hour, minute, second].map(i => i.toString().padStart(2, "0")).join(":");
            setTime(result);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="text-xl">
            <p className="title">{time}</p>
        </div>
    );
};

export default Watch;
