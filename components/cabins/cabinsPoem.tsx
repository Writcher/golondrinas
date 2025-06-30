import { useTranslations } from "next-intl"

export default function CabinsPoem() {

    const translation = useTranslations("cabins")

    return (
        <div className="hidden md:flex flex-col gap-4 h-full w-[50%] px-4 pt-32 items-end justify-start text-gray-800">
            <img
                src="/mountain-river.avif"
                alt="background mountain with river"
                height={500}
                width={500}
            />
            <p className="relative right-[65%] bottom-[50%] font-medium font-shadow italic text-lg">
                {translation("poemtitle")}
            </p>
            <p className="relative right-[60%] bottom-[50%] font-medium font-shadow italic text-center">
                {translation("poem1")}<br />
                {translation("poem2")}<br />
                {translation("poem3")}<br />
                {translation("poem4")}<br />
                {translation("poem5")}<br />
                {translation("poem6")}<br />
                {translation("poem7")}<br />
                {translation("poem8")}<br />
                {translation("poem9")}<br />
                {translation("poem10")}<br />
                {translation("poem11")}<br />
                {translation("poem12")}<br />
            </p>
        </div>
    )
}