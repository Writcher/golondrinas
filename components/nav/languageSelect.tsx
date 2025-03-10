import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRef, useState } from "react";
import { setUserLocale } from "@/services/locale";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSelect() {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const options = [0, 1];

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        if (options[index] === 0) {
            setUserLocale("es")
        } else if (options[index] === 1) {
            setUserLocale("en")
        };
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <div className='flex h-full w-25'>
                <ButtonGroup variant="outlined" aria-label="lang" disableElevation ref={anchorRef}>
                    <Button sx={{
                        border: "0px",
                        opacity: 1,
                        pointerEvents: selectedIndex === 0 ? "none" : "auto",
                        backgroundColor: selectedIndex === 0 ? "transparent" : "",
                        '&.Mui-disabled': {
                            border: "none",
                            backgroundColor: "transparent",
                            color: 'black',
                        }
                    }} className='!text-black' disableElevation disableRipple disableTouchRipple disabled={selectedIndex === 0}>
                        <div className="flex rounded-lg border border-black h-[20px] w-[30px] overflow-hidden items-center justify-center">
                            <ReactCountryFlag countryCode={options[selectedIndex] === 0 ? 'ES' : 'GB'} svg className="!h-[20px] !w-[40px]" />
                        </div>
                    </Button>
                    <Button sx={{ border: "0px" }} size="small" className='!text-black' onClick={handleToggle}>
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    sx={{ zIndex: 1 }}
                    open={open}
                    anchorEl={anchorRef.current}
                    transition

                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                boxShadow: "none"
                            }}
                            className='!bg-yellow-400'
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                <div className="flex rounded-lg border border-black h-[20px] w-[30px] overflow-hidden items-center justify-center">
                                                    <ReactCountryFlag countryCode={option === 0 ? 'ES' : 'GB'} svg className="!h-[20px] !w-[40px]" />
                                                </div>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </>
    )
}