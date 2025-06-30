import { Divider } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ActivitiesPoem from "./activitiesPoem";
import { useTranslations } from "next-intl";

export default function Activities() {

    const translation = useTranslations("activities");

    return (
        <div className="flex flex-col md:flex-row h-full w-full">
            <div className='flex flex-col md:flex-row gap-16 md:gap-12 h-full md:w-[50%] px-4 pt-44 text-gray-800'>
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
                    <div className='flex flex-col gap-2 pl-8 md:pl-8'>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Argentina Rafting</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Potrerillos Explorer</p>
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
                    <div className='flex flex-col gap-2 pl-8 md:pl-8'>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Bodega La Rural</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Paseo Bus Vitivinícola</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Lamadrid Estate Wine</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Bodega Viamonte</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} Bodega Tapia</p>
                        <p className="text-xs md:text-base">{<PlayArrowIcon className="inline-block mr-2" fontSize="small" />} La Escondida</p>
                    </div>
                </div>
            </div>
            <ActivitiesPoem />
        </div>
    )
}