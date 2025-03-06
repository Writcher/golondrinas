import GoogleMap from "./locationMap";
import LocationText from "./locationText";



export default function Location() {
    return (
        <div className="flex flex-row h-full w-full items-center justify-around overflow-x-hidden">
            <div className="hidden md:flex w-[40%] mb-10 h-[90%] items-center justify-center clip-path-custom bg-yellow-400">
                <GoogleMap />
            </div>
            <div className="flex flex-col w-[90%] md:w-[50%] h-screen items-center justify-center">
                <LocationText/>
            </div>
        </div>
    )
}