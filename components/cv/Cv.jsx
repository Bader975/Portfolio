import React from 'react'


import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
export default function Cv() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <div style={{ height: '750px' }}>
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




