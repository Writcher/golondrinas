"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import GalleryButtons from "./galleryButtons";
import GalleryRoulette from "./galleryRoulette";

const Fullscreen = lazy(() => import("./fullscreen/fullscreen"));

const images = [
    "/photos/cabañas-las-golondrinas-1-y-2.jpg",
    "/photos/cabañas-las-golondrinas-3.jpg",
    "/photos/cabañas-las-golondrinas-master-bedroom.jpg",
    "/photos/cabañas-las-golondrinas-second-bedroom.jpg",
];

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");
    const intervalTime = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, intervalTime);
        return () => clearInterval(interval);
    }, [index]);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setSlideDirection("left");
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setSlideDirection("right");
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <div className="fixed left-0 top-[-10] w-full h-full overflow-hidden">
            <div className="relative w-full h-[85%] md:h-[81%] mt-[26%] md:mt-[5%] overflow-hidden bg-gray-200">
                <GalleryRoulette index={index} src={images[index]} openFullscreen={openFullscreen} />
                <GalleryButtons nextSlide={nextSlide} prevSlide={prevSlide} openFullscreen={openFullscreen} />
            </div>
            {isFullscreen && (
                <Suspense fallback={<div></div>}>
                    <Fullscreen nextSlide={nextSlide} prevSlide={prevSlide} index={index} src={images[index]} closeFullscreen={closeFullscreen} isFullscreen={isFullscreen} slideDirection={slideDirection} />
                </Suspense>
            )}
        </div>
    );
}