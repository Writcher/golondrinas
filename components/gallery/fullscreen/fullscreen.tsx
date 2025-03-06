import { Dialog, DialogActions, DialogContent } from "@mui/material";
import FullscreenImage from "./fullscreenImage";
import FullscreenButtons from "./fullscreenButtons";
import { FullscreenProps } from "@/lib/types/galleryProps";

export default function Fullscreen({nextSlide, prevSlide, closeFullscreen, isFullscreen, index, slideDirection, src}: FullscreenProps) {
    return (
        <>
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
                    <FullscreenImage index={index} src={src} slideDirection={slideDirection} isFullscreen={isFullscreen} />
                </DialogContent>
                <DialogActions className="!pr-0 !justify-center">
                    <FullscreenButtons nextSlide={nextSlide} prevSlide={prevSlide} closeFullscreen={closeFullscreen} />
                </DialogActions>
            </Dialog>
        </>
    )
}