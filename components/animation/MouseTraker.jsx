import React from 'react'

export default function MouseTraker() {
    if (typeof document === 'object') {
        const body = document.body
        // let mouseTracker = document.getElementById("mouse-tracker");
        const mouseFollower = document.createElement("div");
        mouseFollower.id = "mouse-follower";
        body.append(mouseFollower);
        // mouseTracker.append(mouseFollower);
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            mouseFollower.style.top = `${y}px`;
            mouseFollower.style.left = `${x}px`;
        });


    }

}
