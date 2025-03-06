import React from 'react';
import { LogoBlack } from './logo';
import LanguageSelect from './languageSelect';
import NavDrawer from './navDrawer';
import NavMenu from './navOptions';

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
    return (
        <div className="fixed top-0 left-0 right-0 z-10 h-[15%] md:h-[10%] flex flex-row justify-between bg-yellow-400 md:px-10">
            {/* Logo */}
            <div className='flex h-full justify-start items-center'>
                <div>
                    <LogoBlack />
                </div>
            </div>
            <div className='hidden md:flex grow' />
            {/* Language Select*/}
            <LanguageSelect />
            {/* Drawer */}
            <div className="md:hidden flex items-center mr-4">
                <NavDrawer ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7} />
            </div>
            {/* Menu */}
            <div className='hidden md:flex flex-row gap-2 items-center overflow-x-auto'>
                <NavMenu ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7} />
            </div>
        </div>
    );
}