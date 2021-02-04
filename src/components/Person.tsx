import React, { useState } from "react";

export interface Location {
    long: string;
    lat: string;
    height: number | undefined;
}

export interface PersonProps {
    name: string; // PIPE PRA FAZER OU | { fName: string; lastName: string };
    birthDate: Date;
    /**
     *   This comment will appear when consuming this interface
     */
    location?: Location;
}

export default function Person({ name, birthDate, location }: PersonProps) {
    return (
        <div>
            <span>name: {name}</span>
            <Counter defaultCounter={10} />
            {/* <span>birthDate: {birthDate}</span> */}
            {/* <span>location: {location}</span> */}
        </div>
    );
}

interface CounterProps {
    defaultCounter: number;
}

const Counter = ({ defaultCounter }: CounterProps) => {
    const [count, setCount] = useState(defaultCounter);

    return (
        <div>
            {count} E {defaultCounter}
            <button
                onClick={() => {
                    setTimeout(() => setCount((prev) => prev + 20), 3000);
                }}
            >
                +
            </button>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    );
};
