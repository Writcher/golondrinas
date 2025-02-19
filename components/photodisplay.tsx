"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const images = [
    "/photos/cabañas-las-golondrinas-1-y-2.jpg",
    "/photos/cabañas-las-golondrinas-3.jpg",
    "/photos/cabañas-las-golondrinas-master-bedroom.jpg",
    "/photos/cabañas-las-golondrinas-second-bedroom.jpg",
];

export default function ImageCarousel() {
    const [index, setIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const intervalTime = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, intervalTime);
        return () => clearInterval(interval);
    }, [index]);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full overflow-hidden">
            {/* Contenedor de la imagen */}
            <div className="relative w-full h-[74%] md:h-[81%] mt-[26%] md:mt-[5%] overflow-hidden">
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
                            objectFit="cover"
                            priority={false}
                            onClick={() => openFullscreen()}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Botón Anterior */}
                <Button aria-label="Previous Image" className="!absolute h-full top-1/2 left-0 transform -translate-y-1/2 !text-yellow-400 hover:!bg-gradient-to-r hover:!from-gray-800 hover:!to-transparent !bg-gradient-to-r !from-gray-900 !to-transparent" onClick={prevSlide}>
                    <ChevronLeftIcon />
                </Button>
                {/* Botón Siguiente */}
                <Button aria-label="Next Image" className="!absolute h-full top-1/2 right-0 transform -translate-y-1/2 !text-yellow-400 hover:!bg-gradient-to-l hover:!from-gray-800 hover:!to-transparent !bg-gradient-to-l !from-gray-900 !to-transparent" onClick={nextSlide}>
                    <ChevronRightIcon />
                </Button>
                {/* Botón FullScreen*/}
                <Button aria-label="Fullscreen" size="large" className="!absolute w-full h-[10%] !text-yellow-400 hover:!bg-gradient-to-b hover:!from-gray-800 hover:!to-transparent !bg-gradient-to-b !from-gray-900 !to-transparent" onClick={() => openFullscreen()}>
                    Pantalla Completa
                </Button>
            </div>
            <Dialog
                open={isFullscreen}
                onClose={closeFullscreen}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    elevation: 0,
                    style: {
                        backgroundColor: 'transparent', // Set background to transparent
                    },
                }}
            >
                <DialogContent className="flex justify-center !p-0 rounded-md">
                    <Image
                        src={images[index]}
                        alt={`Fullscreen Slide ${index + 1}`}
                        layout="intrinsic"
                        width={1500}
                        height={1500}
                        objectFit="contain"
                        priority={false}
                    />
                </DialogContent>
                <DialogActions className="!pr-0">
                    {/* Botón Anterior */}
                    <Button aria-label="Previous Image" onClick={prevSlide} variant="contained" className="!bg-yellow-500 hover:!bg-yellow-400" disableElevation>
                        <ChevronLeftIcon />
                    </Button>
                    {/* Botón Siguiente */}
                    <Button aria-label="Next Image" onClick={nextSlide} variant="contained" className="!bg-yellow-500 hover:!bg-yellow-400" disableElevation>
                        <ChevronRightIcon />
                    </Button>
                    {/* Botón Cerrar */}
                    <Button onClick={closeFullscreen} color="error" variant="contained" disableElevation>
                        <CloseIcon />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}