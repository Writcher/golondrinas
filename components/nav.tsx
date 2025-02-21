import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useScroll } from "framer-motion";
import { LogoBlack } from './logo';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav({
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

    return (
        <div className="fixed top-0 left-0 right-0 z-10 h-[15%] md:h-[10%] flex flex-row justify-between bg-yellow-400 md:pr-10 md:pl-10">
            {/* Logo */}
            <div className='flex h-full justify-start items-center'>
                <div>
                    <LogoBlack />
                </div>
            </div>
            {/* Botón Drawer */}
            <div className="md:hidden flex items-center mr-4">
                <IconButton onClick={() => toggleDrawer(!drawerOpen)}>
                    <MenuIcon className="text-black" />
                </IconButton>
            </div>
            {/* Drawer */}
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
                        <Button onClick={() => drawerItemClick(ref1)} className="!text-black" fullWidth>Galería</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref2)} className="!text-black" fullWidth>Cabañas</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref3)} className="!text-black" fullWidth>Actividades</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref4)} className="!text-black" fullWidth>Ubicación</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref5)} className="!text-black" fullWidth>Reseñas</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref6)} className="!text-black" fullWidth>FAQ</Button>
                    </div>
                    <div className='flex w-full'>
                        <Button onClick={() => drawerItemClick(ref7)} className="!text-black" fullWidth>Contacto</Button>
                    </div>
                </div>
            </Drawer>
            {/* Menu */}
            <div className='hidden md:flex grow' />
            <div className='hidden md:flex flex-row gap-2 overflow-x-auto'>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref1)} className="!text-black">Galería</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref2)} className="!text-black">Cabañas</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref3)} className="!text-black">Actividades</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref4)} className="!text-black">Ubicación</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref5)} className="!text-black">Reseñas</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref6)} className="!text-black">FAQ</Button>
                </div>
                <div className='flex h-full w-25'>
                    <Button onClick={() => setScrollPosition(ref7)} className="!text-black">Contacto</Button>
                </div>
            </div>
        </div>
    );
}