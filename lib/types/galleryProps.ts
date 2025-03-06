export type GalleryButtonsProps = {
    nextSlide: () => void, 
    prevSlide: () => void, 
    openFullscreen: () => void
}

export type GalleryRouletteProps = {
    index: number, 
    src: string, 
    openFullscreen: () => void
}

export type FullscreenProps = {
    nextSlide: () => void,
    prevSlide: () => void,
    closeFullscreen: () => void,
    isFullscreen: boolean,
    index: number,
    slideDirection: "left" | "right", 
    src: string
}

export type FullscreenButtonsProps = {
    nextSlide: () => void,
    prevSlide: () => void,
    closeFullscreen: () => void
}

export type FullscreenImageProps = {
    index: number,
    src: string,
    slideDirection: "left" | "right",
    isFullscreen: boolean
}