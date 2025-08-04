import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import { useTranslations } from "next-intl";
import { ActivityProps } from "@/lib/types/activityProps";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                        <p className="text-lg font-medium text-center">{<WhatsAppIcon className="inline-block mb-1" />} WhatsApp: <br /> +54 261 6572582 <br /> +54 261 6572583 </p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:info@argentinarafting.com">info@argentinarafting.com</a></p><br />
                        <Button href="https://argentinarafting.com/" target="_blank" rel="noopener noreferrer" endIcon={<SendIcon/>} variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Potrerillos Explorer": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("poexpTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("poexpDescription")}</p>
                        <p className="text-lg font-medium text-center">{<WhatsAppIcon className="inline-block mb-1" />} WhatsApp: <br /> +54 9 261 6538204</p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:info@potrerillosexplorer.com">info@potrerillosexplorer.com</a></p><br />
                        <Button href="https://potrerillosexplorer.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Termas Cacheuta": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("cacheutaTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("cacheutaDescription")}</p>
                        <p className="text-lg font-medium text-center">{<WhatsAppIcon className="inline-block mb-1" />} WhatsApp: <br /> +54 261 7035311</p><br />
                        <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mb-1" />} {translation("phone")} <br /> +54 261 5191676</p><br />
                        <Button href="https://termascacheuta.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Bodega La Rural": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("laruralTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("laruralDescription")}</p>
                        <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mb-1" />} {translation("phone")} <br /> +54 261 7622785</p><br />
                        <Button href="https://bodegalarural.com.ar/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Paseo Bus Vitivinícola": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("busTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("busDescription")}</p>
                        <p className="text-lg font-medium text-center">{<WhatsAppIcon className="inline-block mb-1" />} WhatsApp: <br /> +54 9 2612 639439</p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:info@busvitivinicola.com">info@busvitivinicola.com</a></p><br />
                        <Button href="https://busvitivinicola.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Lamadrid Estate Wine": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("lamadridTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("lamadridDescription")}</p>
                        <p className="text-lg font-medium text-center">{<WhatsAppIcon className="inline-block mb-1" />} WhatsApp: <br /> +54 9 261 5548460</p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:turismo@lamadridwines.com">turismo@lamadridwines.com</a></p><br />
                        <Button href="https://www.lamadridwines.com/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Bodega Viamonte": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("viamonteTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("viamonteDescription")}</p>
                        <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mb-1" />} {translation("phone")} <br /> +54 9 2617 118280</p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:turismo@viamontewinery.com">turismo@viamontewinery.com</a></p><br />
                        <Button href="https://viamontewinery.com/es/inicio/" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "Bodega Tapiz": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("tapizTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("tapizDescription")}</p>
                        <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mb-1" />} {translation("phone")} <br /> +54 9 261 5966853 <br /> +54 9 261 3000641</p><br />
                        <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mb-1" />} {translation("email")} <br /> <a className="text-lg hover:text-gray-700" href="mailto:resto@tapiz.com.ar">resto@tapiz.com.ar</a><br /> <a className="text-lg hover:text-gray-700" href="mailto:reservas@tapiz.com.ar">reservas@tapiz.com.ar</a></p><br />
                        <Button href="https://www.tapiz.com.ar/tapiz" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            {translation("drawerWeb")}
                        </Button>
                    </div>
                )
            }
            case "La Escondida": {
                return (
                    <div className="flex flex-col w-full h-[50%] p-4 justify-between items-center">
                        <h2 className="text-base md:text-2xl font-medium">{translation("escondidaTitle")}</h2>
                        <p className="text-xs md:text-base mb-2">{translation("escondidaDescription")}</p>
                        <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mb-1" />} {translation("phone")} <br /> +54 9 261 4160246</p><br />
                        <Button href="https://maps.app.goo.gl/2bx9d5fxUMDjK9by6" target="_blank" rel="noopener noreferrer" variant="contained" color="error" className="mt-4" disableElevation>
                            Google Maps
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