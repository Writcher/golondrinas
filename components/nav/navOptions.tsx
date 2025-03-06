import { NavProps } from "@/lib/types/navProps";
import { Button } from "@mui/material"
import { useTranslations } from "next-intl";

export default function NavMenu({
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7
}: NavProps) {
    const setScrollPosition = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const translation = useTranslations('nav');
    return (
        <>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref1)} className="!text-black">{translation('galeria')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref2)} className="!text-black">{translation('cabañas')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref3)} className="!text-black">{translation('actividades')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref4)} className="!text-black">{translation('ubicacion')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref5)} className="!text-black">{translation('reseñas')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref6)} className="!text-black">{translation('faq')}</Button>
            </div>
            <div className='flex h-full w-25'>
                <Button onClick={() => setScrollPosition(ref7)} className="!text-black">{translation('contacto')}</Button>
            </div>
        </>
    )
}