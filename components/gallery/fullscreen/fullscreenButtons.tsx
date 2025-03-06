import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { FullscreenButtonsProps } from "@/lib/types/galleryProps";

export default function FullscreenButtons({ nextSlide, prevSlide, closeFullscreen }: FullscreenButtonsProps) {
    return (
        <>
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
        </>
    )
}