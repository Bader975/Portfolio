import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Video() {


    const backgroundMode = useSelector((state) => state.background.backgroundMode)

    function handelVideo() {
        if (typeof document == "object") {
            const video = document.getElementById("video").play();

        // this code was provided by google to make the background video play
            if (video !== undefined) {
                video.then(() => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    // Show a "Play" button so that user can start playback.
                });
            }

        }
    }

    useEffect(() => {
        handelVideo()
        video.load();
    }, [handelVideo, backgroundMode])

    return (
        <>
            <video
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
                <source src={backgroundMode ? "/bgVideoLight.mp4" : "/bgVideoDark.mp4"} type="video/mp4" />
            </video>


        </>
    )
}
