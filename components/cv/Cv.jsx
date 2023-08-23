import React from 'react'
import { useRouter } from "next/router";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
export default function Cv() {
    const router = useRouter()

  
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.js">
                <div>
                    <Viewer
                        fileUrl="/myCV.pdf"

                        plugins={[
                            defaultLayoutPluginInstance,


                        ]}
                    />
                </div>
            </Worker>

        </>
    )
}



