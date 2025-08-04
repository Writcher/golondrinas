import { Button, ButtonBase, Divider } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ActivitiesPoem from "./activitiesPoem";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ActivitiesDrawer from "./activitiesDrawer";

export default function Activities() {

    const translation = useTranslations("activities");

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState("");

    const openDrawer = (activity: string) => {
        setSelectedActivity(activity);
        setDrawerOpen(true);
    };

    const props = {
        activity: selectedActivity,
        drawerOpen: drawerOpen,
        setDrawerOpen: setDrawerOpen  
    };

    return (
        <div className="flex flex-col md:flex-row h-full w-full">
            <div className='flex flex-col md:flex-row gap-6 md:gap-12 h-full md:w-[50%] px-4 pt-44 text-gray-800'>
                <div className="flex flex-col gap-2 md:h-full md:w-[50%]">
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderColor: "#facc15",
                                borderWidth: "2px"
                            },
                        }}
                    >
                        <h2 className="text-base md:text-2xl font-medium">{translation("title1")}</h2>
                    </Divider>
                    <h3 className="text-xs md:text-base">
                        <p className="mb-2">{translation("text1-1")}</p>
                        <p className="mb-2">{translation("text2-1")}</p>
                    </h3>
                    <div className='flex flex-col gap-2'>
                        <Button
                            sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                            className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                            variant="contained"
                            size="small"
                            disableElevation
                            fullWidth
                            onClick={() => openDrawer("Argentina Rafting")}
                        >
                            <PlayArrowIcon
                                className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                fontSize="small"
                            />
                            Argentina Rafting
                        </Button>
                        <Button
                            sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                            className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                            variant="contained"
                            size="small"
                            disableElevation
                            fullWidth
                            onClick={() => openDrawer("Potrerillos Explorer")}
                        >
                            <PlayArrowIcon
                                className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                fontSize="small"
                            />
                            Potrerillos Explorer
                        </Button>
                        <Button
                            sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                            className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                            variant="contained"
                            size="small"
                            disableElevation
                            fullWidth
                            onClick={() => openDrawer("Termas Cacheuta")}
                        >
                            <PlayArrowIcon
                                className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                fontSize="small"
                            />
                            Termas de Cacheuta
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:h-full md:w-[50%]">
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderColor: "#facc15",
                                borderWidth: "2px"
                            },
                        }}
                    >
                        <h2 className="text-base md:text-2xl font-medium">{translation("title2")}</h2>
                    </Divider>
                    <h3 className="text-xs md:text-base">
                        <p className="mb-2">{translation("text1-2")}</p>
                        <p className="mb-2">{translation("text2-2")}</p>
                    </h3>
                    <div className='flex flex-row md:flex-col gap-2 w-full'>
                        <div className='flex flex-col gap-2 w-[50%] md:w-full'>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("Bodega La Rural")}
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                Bodega La Rural {/** https://bodegalarural.com.ar/ */}
                            </Button>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("Paseo Bus Vitivinícola")}
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                Paseo Bus Vitivinícola {/** https://busvitivinicola.com/ */}
                            </Button>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("Lamadrid Estate Wine")}
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                Lamadrid Estate Wine {/** https://www.lamadridwines.com/ */}
                            </Button>
                        </div>
                        <div className='flex flex-col gap-2 w-[50%] md:w-full'>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("Bodega Viamonte")}
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                Bodega Viamonte {/** https://viamontewinery.com/es/inicio/ */}
                            </Button>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("Bodega Tapiz")} 
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                Bodega Tapiz {/** https://www.bodega-tapiz.com.ar/index.php */}
                            </Button>
                            <Button
                                sx={{ fontSize: {xs: '0.75rem', md: '1rem'}, textTransform: "none"}}
                                className="group !text-gray-800 !justify-start active:!bg-yellow-300 !bg-yellow-400"
                                variant="contained"
                                size="small"
                                disableElevation
                                fullWidth
                                onClick={() => openDrawer("La Escondida")}
                            >
                                <PlayArrowIcon
                                    className="inline-block mr-2 text-yellow-400 group-hover:text-gray-800"
                                    fontSize="small"
                                />
                                La Escondida {/** preguntarle a julio */}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <ActivitiesPoem />
            <ActivitiesDrawer {...props}/>
        </div>
    )
}