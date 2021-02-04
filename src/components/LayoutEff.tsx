import React, { useState, useEffect } from "react";

export default function LayoutEff() {
    const [description, setDescription] = useState("");
    useEffect(() => {
        let currentRender = true;
        setTimeout(() => {
            if (currentRender) {
                console.log(description);
            } else {
                console.log("ops im done");
            }
        }, 1500);
        return () => {
            currentRender = false;
        };

        // both do the same thing. ^ in case we don't have a callback from the call

        // const id = setTimeout(() => {
        //     console.log(description);
        // }, 1500);

        // return function clearIntervalFromSetTimeout() {
        //     clearInterval(id);
        // };
    }, [description]);
    return (
        <div>
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
    );
}
