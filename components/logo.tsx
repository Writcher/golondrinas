import Image from "next/image"

export function LogoBlack() {
    return (
        <div className="flex flex-row justify-start items-center">
            <Image src="/icono.png" width={100} height={100} className="object-contain pt-3" alt="Logo Cabañas Las Golondrinas" />
            <div className="flex text-black text-xl font-medium">
                Cabañas <br /> Las Golondrinas
            </div>
        </div>
    )
}