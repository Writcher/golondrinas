import { GalleryRouletteProps } from "@/lib/types/galleryProps";
import { AnimatePresence, motion } from "framer-motion";

export default function GalleryRoulette({ index, src, openFullscreen }: GalleryRouletteProps) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        onClick={() => openFullscreen()}
                        loading="lazy"
                        className="w-full h-full object-center object-fill"
                    />
                </motion.div>
            </AnimatePresence>
        </>
    )
};