import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function NavDrawer({
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7
}: {
    ref1: React.RefObject<HTMLDivElement | null>,
    ref2: React.RefObject<HTMLDivElement | null>,
    ref3: React.RefObject<HTMLDivElement | null>,
    ref4: React.RefObject<HTMLDivElement | null>,
    ref5: React.RefObject<HTMLDivElement | null>,
    ref6: React.RefObject<HTMLDivElement | null>,
    ref7: React.RefObject<HTMLDivElement | null>
}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const setScrollPosition = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    const drawerItemClick = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
        setScrollPosition(sectionRef);
        toggleDrawer(false);
    };

    const translation = useTranslations('nav');
    return (
        <>
            <IconButton onClick={() => toggleDrawer(!drawerOpen)}>
                <MenuIcon className="text-black" />
            </IconButton>
            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                elevation={0}
                PaperProps={{
                    sx: {
                        position: "absolute",
                        top: "15%",
                        width: "100%"
                    },
                }}
                ModalProps={{
                    sx: {
                        zIndex: 9
                    }
                }}
            >
                <div className="flex flex-col w-full p-4 items-center justify-center bg-yellow-400">
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref1)} className="!text-black" fullWidth>{translation('galeria')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref2)} className="!text-black" fullWidth>{translation('cabañas')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref3)} className="!text-black" fullWidth>{translation('actividades')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref4)} className="!text-black" fullWidth>{translation('ubicacion')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref5)} className="!text-black" fullWidth>{translation('reseñas')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref6)} className="!text-black" fullWidth>{translation('faq')}</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref7)} className="!text-black" fullWidth>{translation('contacto')}</Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}