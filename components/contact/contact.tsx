import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactButtons from './contactButtons';
import { useTranslations } from 'next-intl';

export default function Contacts() {

    const translation = useTranslations("contact")

    return (
        <div className="flex flex-col h-[80%] md:h-[60%] gap-6 md:gap-8 w-full items-center justify-center">
            <h2 className="text-2xl font-semibold mt-[15%] md:mt-0">{translation("title")}</h2>
            <div className="flex flex-col w-full md:w-[30%] items-center justify-center">
                <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mr-2" />} {translation("phone")} <a className="text-lg hover:text-yellow-400" href="tel:+5492634551684">+54 9 2634 551684</a> (Julio)</p><br />
                <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mr-2" />} {translation("email")} <a className="text-lg hover:text-yellow-400" href="mailto:casaslasgolondrinas@gmail.com">casaslasgolondrinas@gmail.com</a></p><br />
            </div>
            <div className="flex flex-col w-full md:w-[30%] md:flex-row gap-4 md:gap-6 items-center justify-between">
                <ContactButtons />
            </div>
        </div>
    )
}