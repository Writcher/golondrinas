import { Divider } from "@mui/material";
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PoolIcon from '@mui/icons-material/Pool';
import WifiIcon from '@mui/icons-material/Wifi';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import TvIcon from '@mui/icons-material/Tv';
import BedIcon from '@mui/icons-material/Bed';
import CabinsPoem from "./cabinsPoem";
import { useTranslations } from "next-intl";

export default function Cabins() {

    const translation = useTranslations("cabins");

    return (
        <div className="flex flex-col md:flex-row h-full w-full">
            <div className='flex flex-col gap-2 md:gap-4 h-full md:w-[50%] px-4 pt-44 text-gray-800'>
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
                    <p className="mb-2">{translation("text1-2")}</p>
                    <p className="mb-2">{translation("text1-3")}</p>
                </h3>
                <div className='flex flex-row w-full gap-2 md:ml-4'>
                    <div className='flex flex-col w-[50%] gap-2 pl-8 md:pl-32'>
                        <p className="text-xs md:text-base">{<LocalParkingIcon className="inline-block mr-2" />} {translation("item1-1")}</p>
                        <p className="text-xs md:text-base">{<LocalFireDepartmentIcon className="inline-block mr-2" />} {translation("item1-2")}</p>
                        <p className="text-xs md:text-base">{<PoolIcon className="inline-block mr-2" />} {translation("item1-3")}</p>
                    </div>
                    <div className='flex flex-col w-[50%] gap-2 pl-8 md:pl-32'>
                        <p className="text-xs md:text-base">{<WifiIcon className="inline-block mr-2" />} {translation("item1-4")}</p>
                        <p className="text-xs md:text-base">{<AccessTimeIcon className="inline-block mr-2" />} {translation("item1-5")}</p>
                    </div>
                </div>
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
                    <p className="mb-2">{translation("text2")}</p>
                </h3>
                <div className='flex flex-row w-full gap-2 md:ml-4'>
                    <div className='flex flex-col w-[50%] gap-2 pl-8 md:pl-32'>
                        <p className="text-xs md:text-base">{<KitchenIcon className="inline-block mr-2" />} {translation("item2-1")}</p>
                        <p className="text-xs md:text-base">{<ThermostatIcon className="inline-block mr-2" />} {translation("item2-2")}</p>
                    </div>
                    <div className='flex flex-col w-[50%] gap-2 pl-8 md:pl-32'>
                        <p className="text-xs md:text-base">{<TvIcon className="inline-block mr-2" />} {translation("item2-3")}</p>
                        <p className="text-xs md:text-base">{<BedIcon className="inline-block mr-2" />} {translation("item2-4")}</p>
                    </div>
                </div>
            </div>
            <CabinsPoem />
        </div>
    )
}