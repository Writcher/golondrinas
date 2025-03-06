import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { FlagIcon } from "react-flag-kit";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRef, useState } from "react";
import { setUserLocale } from "@/services/locale";

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
                    <Button sx={{ border: "0px" }} className='!text-black' disableElevation>
                        <FlagIcon code={options[selectedIndex] === 0 ? 'ES' : options[selectedIndex] === 1 ? 'GB' : 'AR'} />
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
                            }}
                            className='!bg-yellow-400 !mt-1'
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
                                                <FlagIcon code={option === 0 ? 'ES' : option === 1 ? 'GB' : 'AR'} className='my-2 mx-6' />
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