import React from 'react';
import { LogoBlack } from './logo';
import LanguageSelect from './languageSelect';
import NavDrawer from './navDrawer';
import NavMenu from './navOptions';
import { NavProps } from '@/lib/types/navProps';

export default function Nav({
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7
}: NavProps) {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 h-[15%] md:h-[10%] flex flex-row justify-between bg-yellow-400 md:px-10">
            {/* Logo */}
            <div className='flex h-full justify-start items-center'>
                <LogoBlack />
            </div>
            <div className='hidden md:flex grow' />
            {/* Language Select*/}
            <LanguageSelect />
            {/* Mobile Drawer */}
            <div className="md:hidden flex items-center mr-4">
                <NavDrawer ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7} />
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex flex-row gap-2 items-center overflow-x-auto'>
                <NavMenu ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7} />
            </div>
        </div>
    );
}