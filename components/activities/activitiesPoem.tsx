import { useTranslations } from "next-intl"

export default function ActivitiesPoem() {

    const translation = useTranslations("activities")

    return (
        <div className="hidden md:flex flex-col gap-4 h-full w-[50%] px-4 pt-32 items-start justify-start text-gray-800">
            <img
                src="/mountain-vine.avif"
                alt="background mountain with vine"
                height={500}
                width={500}
            />
            <p className="relative right-[-71%] bottom-[50%] font-medium font-shadow italic text-lg">
                {translation("poemtitle-2")}
            </p>
            <p className="relative right-[-60%] bottom-[50%] font-medium font-shadow italic text-center">
                {translation("poem1-2")}<br />
                {translation("poem2-2")}<br />
                {translation("poem3-2")}<br />
                {translation("poem4-2")}<br />
                {translation("poem5-2")}<br />
                {translation("poem6-2")}<br />
                {translation("poem7-2")}<br />
                {translation("poem8-2")}<br />
                {translation("poem9-2")}<br />
            </p>
        </div>
    )
}