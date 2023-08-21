import React, { useEffect, useRef, useLayoutEffect } from 'react'

export default function Video({ toggleBG }) {
    const videoRef = useRef(null);
    // console.log("BOOLEN VALUE ", toggleBG)
    const videoUrl = toggleBG ? "/bgVideoLight.mp4" : "/bgVideoDark.mp4";
    // console.log("URL ", videoUrl)
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
        console.log("RENDER VIDEO")
        handelVideo()
        video.load();


    }, [handelVideo, toggleBG])
    // const handlePlay = () => {
    //     if (videoRef.current) {
    //         videoRef.current.play();
    //     }
    // };
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
                    zIndex: - 1,
                    objectFit: "cover",
                }}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>


        </>
    )
}
