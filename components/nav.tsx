import Button from '@mui/material/Button';
import { useScroll } from "framer-motion";
import { LogoBlack } from './logo';

export default function Nav() {
    const { scrollYProgress } = useScroll();
    const setScrollPosition = (value: number) => {
        window.scrollTo({ top: window.innerHeight * value, behavior: 'smooth' });
    };
    return (
        <div className="fixed top-0 left-0 right-0 z-10 h-[15%] md:h-[10%] flex flex-row justify-around bg-yellow-400 md:pr-10 md:pl-10">
            <div className='flex justify-center items-center'>
                <div>
                    <LogoBlack />
                </div>
            </div>
            <div className='hidden md:flex grow' />
            <div className='hidden md:flex'>
                <Button
                    onClick={() => setScrollPosition(0)} className="!text-black"
                >
                    Galería
                </Button>
                <Button
                    onClick={() => setScrollPosition(1)} className="!text-black"
                >
                    Complejo
                </Button>
                <Button
                    onClick={() => setScrollPosition(2)} className="!text-black"
                >
                    Actividades
                </Button>
                <Button
                    onClick={() => setScrollPosition(3)} className="!text-black"
                >
                    Ubicación
                </Button>
                <Button
                    onClick={() => setScrollPosition(4)} className="!text-black"
                >
                    Reseñas
                </Button>
                <Button
                    onClick={() => setScrollPosition(5)} className="!text-black"
                >
                    FAQ
                </Button>
                <Button
                    onClick={() => setScrollPosition(6)} className="!text-black"
                >
                    Contacto
                </Button>
            </div>
        </div>
    )
}