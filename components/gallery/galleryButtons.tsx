import { Button } from "@mui/material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { GalleryButtonsProps } from "@/lib/types/galleryProps";

export default function GalleryButtons({ nextSlide, prevSlide, openFullscreen }: GalleryButtonsProps) {
    return (
        <>
            {/* Botón Anterior */}
            <Button aria-label="Previous Image" className="!absolute top-1/2 left-0 transform -translate-y-1/2 !text-black !bg-yellow-400 hover:!bg-yellow-500 !ml-2" onClick={prevSlide}>
                <ChevronLeftIcon />
            </Button>
            {/* Botón Siguiente */}
            <Button aria-label="Next Image" className="!absolute top-1/2 right-0 transform -translate-y-1/2 !text-black !bg-yellow-400 hover:!bg-yellow-500 !mr-2" onClick={nextSlide}>
                <ChevronRightIcon />
            </Button>
            {/* Botón FullScreen */}
            <Button aria-label="Full Screen" className="!absolute top-[2.5%] right-0 transform !text-black !bg-yellow-400 hover:!bg-yellow-500 !mt-6 !mr-2" onClick={() => openFullscreen()}>
                <FullscreenIcon />
            </Button>
        </>
    )
};