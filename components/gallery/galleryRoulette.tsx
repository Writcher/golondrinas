import { GalleryRouletteProps } from "@/lib/types/galleryProps";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={false}
                        onClick={() => openFullscreen()}
                    />
                </motion.div>
            </AnimatePresence>
        </>
    )
};