import React, { useRef, useEffect } from 'react'

export default function Video({ toggleBG }) {
    const videoRef = useRef(null);

    const videoUrl = toggleBG ? "/bgVideoLight.mp4" : "/bgVideoDark.mp4";

    function handelVideo() {
        if (typeof document == "object") {
            const video = document.getElementById("video").play();
            if (video !== undefined) {
                video.then(() => {
                    // Autoplay started!
                    console.log("play the vid");

                }).catch(error => {
                    // Autoplay was prevented.
                    console.log(error);
                    // Show a "Play" button so that user can start playback.
                });
            }

        }
    }

    useEffect(() => {
        handelVideo()
        video.load();

    }, [handelVideo, toggleBG])
   
    return (
        <>
            <video
                ref={videoRef}
                id="video"
                muted
                autoPlay
                loop
                playsInline
                style={{
                    position: "fixed",
                    zIndex: -1,
                    objectFit: "cover",
                }}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>


        </>
    )
}
