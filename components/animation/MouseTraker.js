import React from 'react'

export default function MouseTraker() {
    // if (typeof document === 'object') {
    //     const body = document.body
    //     const mouseFollower = document.createElement("div");
    //     mouseFollower.id = "mouse-follower";
    //     body.appendChild(mouseFollower);
    //     body.addEventListener("mousemove", (e) => {
    //         const x = e.clientX;
    //         const y = e.clientY;
    //         mouseFollower.style.top = `${y}px`;
    //         mouseFollower.style.left = `${x}px`;
    //     });


    // }

    if (typeof document === 'object') {
        document.addEventListener("mousemove", (e) => {
          let mouseFollower = document.getElementById("mouse-follower");
          if (!mouseFollower) {
            const body = document.body;
            mouseFollower = document.createElement("div");
            mouseFollower.id = "mouse-follower";
            body.appendChild(mouseFollower);
          }
          const x = e.clientX;
          const y = e.clientY;
          mouseFollower.style.left = `${x}px`;
          mouseFollower.style.top = `${y}px`;
        });
      }

}
