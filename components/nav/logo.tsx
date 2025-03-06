import Image from "next/image"

export function LogoBlack() {
    return (
        <div className="flex flex-row justify-start items-center h-full w-full">
            <Image src="/icono.png" width={100} height={100} className="object-contain pt-3" alt="Logo Cabañas Las Golondrinas" />
            <h1 className="flex text-black text-lg md:text-xl font-medium" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Cabañas <br /> Las Golondrinas
            </h1>
        </div>
    )
}