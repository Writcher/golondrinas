"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button, Dialog, DialogActions, DialogContent, Slide } from "@mui/material";

const images = [
    "/photos/cabañas-las-golondrinas-1-y-2.jpg",
    "/photos/cabañas-las-golondrinas-3.jpg",
    "/photos/cabañas-las-golondrinas-master-bedroom.jpg",
    "/photos/cabañas-las-golondrinas-second-bedroom.jpg",
];

export default function ImageCarousel() {
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
            {/* Contenedor de la imagen */}
            <div className="relative w-full h-[85%] md:h-[81%] mt-[26%] md:mt-[5%] overflow-hidden bg-gray-200">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={false}
                            onClick={() => openFullscreen()}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Botón Anterior */}
                <Button aria-label="Previous Image" className="!absolute top-1/2 left-0 transform -translate-y-1/2 !text-black !bg-yellow-400 hover:!bg-yellow-500 !ml-2" onClick={prevSlide}>
                    <ChevronLeftIcon />
                </Button>
                {/* Botón Siguiente */}
                <Button aria-label="Next Image" className="!absolute top-1/2 right-0 transform -translate-y-1/2 !text-black !bg-yellow-400 hover:!bg-yellow-500 !mr-2" onClick={nextSlide}>
                    <ChevronRightIcon />
                </Button>
                {/* Botón FullScreen */}
                <Button aria-label="Full Screen" className="!absolute top-0 right-0 transform !text-black !bg-yellow-400 hover:!bg-yellow-500 !mt-6 !mr-2" onClick={() => openFullscreen()}>
                    <FullscreenIcon />
                </Button>
            </div>
            <Dialog
                open={isFullscreen}
                onClose={closeFullscreen}
                PaperProps={{
                    elevation: 0,
                    style: {

                        width: "80%",
                        maxWidth: "none",
                        maxHeight: "none",
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <DialogContent className="flex justify-center !p-0 overflow-hidden">
                    <Slide
                        direction={slideDirection}
                        key={index}
                        in={isFullscreen}
                        mountOnEnter
                        unmountOnExit
                        timeout={1000}
                    >
                        <div className="relative w-full h-[80vh] flex justify-center items-center">
                            <Image
                                src={images[index]}
                                alt={`Fullscreen Slide ${index + 1}`}
                                layout="fill"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </Slide>
                </DialogContent>
                <DialogActions className="!pr-0 !justify-center">
                    <Button
                        aria-label="Previous Image"
                        onClick={prevSlide}
                        variant="contained"
                        className="!bg-yellow-500 hover:!bg-yellow-400"
                        disableElevation
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <Button
                        aria-label="Next Image"
                        onClick={nextSlide}
                        variant="contained"
                        className="!bg-yellow-500 hover:!bg-yellow-400"
                        disableElevation
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={closeFullscreen} color="error" variant="contained" disableElevation>
                        <CloseIcon />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}