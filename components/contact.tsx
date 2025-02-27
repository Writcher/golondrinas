import { Button} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contacts() {
    return (
        <div className="flex flex-col h-[80%] md:h-[60%] gap-6 md:gap-8 w-full items-center justify-center">
            <h2 className="text-2xl font-semibold mt-[15%] md:mt-0">Contacto y Reservas</h2>
            <div className="flex flex-col w-full md:w-[30%] items-center justify-center">
                <p className="text-lg font-medium text-center">{<PhoneIcon className="inline-block mr-2"/>} Teléfono: <a className="text-lg hover:text-yellow-400" href="tel:+5492634551684">+54 9 2634 551684</a> (Julio)</p><br />
                <p className="text-lg font-medium text-center">{<EmailIcon className="inline-block mr-2"/>} Correo Electrónico: <a className="text-lg hover:text-yellow-400" href="mailto:casaslasgolondrinas@gmail.com">casaslasgolondrinas@gmail.com</a></p><br />
            </div>
            <div className="flex flex-col w-full md:w-[30%] md:flex-row gap-4 md:gap-6 items-center justify-between">
                <div className="flex px-4 md:px-0 w-full">
                    <Button href="https://www.facebook.com/profile.php?id=100063655626140&locale=es_LA" target="_blank" startIcon={<FacebookIcon className="text-white"/>} variant="contained" disableElevation fullWidth>
                        Facebook
                    </Button>
                </div>
                <div className="flex px-4 md:px-0 w-full">
                    <Button href="https://www.instagram.com/casaslasgolondrinas/" target="_blank" className="!bg-gradient-to-r !from-pink-500 !via-purple-500 !to-yellow-500 hover:!from-pink-600 hover:!via-purple-600 hover:!to-yellow-600" startIcon={<InstagramIcon className="text-white"/>} variant="contained" disableElevation fullWidth>
                        Instagram
                    </Button>
                </div>                
                <div className="flex px-4 md:px-0 w-full">
                    <Button href="https://wa.me/5492634551684" target="_blank" className="!bg-green-500 hover:!bg-green-600" startIcon={<WhatsAppIcon className="text-white"/>} variant="contained" disableElevation fullWidth>
                        Whatsapp
                    </Button>
                </div>
            </div>
        </div>
    )
}