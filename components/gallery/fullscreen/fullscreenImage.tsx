import { FullscreenImageProps } from "@/lib/types/galleryProps";
import { Slide } from "@mui/material";
import Image from "next/image";

export default function FullscreenImage({ index, src, slideDirection, isFullscreen }: FullscreenImageProps) {
    return (
        <>
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
                        src={src}
                        alt={`Fullscreen Slide ${index + 1}`}
                        layout="fill"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </Slide>
        </>
    )
}