import React from "react";

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
            {/* <span>birthDate: {birthDate}</span> */}
            {/* <span>location: {location}</span> */}
        </div>
    );
}
