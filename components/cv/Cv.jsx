import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Box } from '@chakra-ui/react'






export default function Cv() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                <Box w={"100vw"} h={"100vh"}>
                    <Viewer
                        fileUrl="/Bader_Mohammad_CV.pdf"
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </Box>
            </Worker>

        </>
    )
}



