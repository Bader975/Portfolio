"use client";
import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Cv() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <section className="w-screen h-screen overflow-hidden">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                <div className="w-full h-full">
                    <Viewer
                        fileUrl="/Bader-Alyami-CV.pdf"
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </Worker>
        </section>
    )
}
