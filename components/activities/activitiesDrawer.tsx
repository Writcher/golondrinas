import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import { useTranslations } from "next-intl";
import { ActivityProps } from "@/lib/types/activityProps";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ActivitiesDrawer({
    activity,
    drawerOpen,
    setDrawerOpen
}: ActivityProps) {

    const translation = useTranslations('activities');

    const closeDrawer = () => {
        setDrawerOpen(false);
    }

    const drawerContent = () => {
        switch(activity) {
            case "Argentina Rafting": {                
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("argraftingTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("argraftingDescription")}</p>
                        <Button href="https://argentinarafting.com/" target="_blank" rel="noopener noreferrer" endIcon={<SendIcon/>} variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("argraftingWeb")}
                        </Button>

                        {/** poner telefonos despues, dejo ejemplo:
                                <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mr-2" />} {translation("phone")} <a className="text-lg hover:text-yellow-400" href="tel:+5492634551684">+54 9 2634 551684</a> (Julio)</p><br />
                                <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mr-2" />} {translation("email")} <a className="text-lg hover:text-yellow-400" href="mailto:casaslasgolondrinas@gmail.com">casaslasgolondrinas@gmail.com</a></p><br />
                         */}

                    </div>
                )
            }
            case "Potrerillos Explorer": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("poexpTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("poexpDescription")}</p>
                        <Button href="https://potrerillosexplorer.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("poexpWeb")}
                        </Button>
                    </div>
                )
            }
            case "Termas Cacheuta": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("cacheutaTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("cacheutaDescription")}</p>
                        <Button href="https://termascacheuta.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("cacheutaWeb")}
                        </Button>
                    </div>
                )
            }
        }
    }
    
    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={drawerOpen}
                onClose={closeDrawer}
                onOpen={() => setDrawerOpen(true)}
                disableSwipeToOpen={false}
                hideBackdrop={true}
                PaperProps={{
                    sx: {
                        position: "absolute",
                        height: "100%",
                        top: {
                            xs: "15%",
                            sm: "10%"
                        },
                        width: {
                            xs: "100%",
                            sm: "50%"
                        }
                    },
                }}
                ModalProps={{
                    sx: {
                        zIndex: 9
                    }
                }}
            >
                <div className="flex flex-col md:flex-row w-full h-[85%] md:h-[90%] p-4 items-center justify-between bg-yellow-400">
                    <div className="flex flex-col w-[95%] h-full justify-center items-center">
                        {drawerContent()}
                    </div>
                    <div className="flex w-[5%] md:sh-full justify-center items-center mr-4">
                        <IconButton onClick={() => closeDrawer()}>
                            <ArrowBackIcon className="!text-red-700"/>
                        </IconButton>
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    )
}