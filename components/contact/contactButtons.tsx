import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ContactButtons() {
    return (
        <>
            <Button href="https://www.facebook.com/profile.php?id=100063655626140&locale=es_LA" target="_blank" className="!w-[80%] md:!w-full" startIcon={<FacebookIcon className="text-white" />} variant="contained" disableElevation>
                Facebook
            </Button>
            <Button href="https://www.instagram.com/casaslasgolondrinas/" target="_blank" className="!w-[80%] md:!w-full !bg-gradient-to-r !from-pink-500 !via-purple-500 !to-yellow-500 hover:!from-pink-600 hover:!via-purple-600 hover:!to-yellow-600" startIcon={<InstagramIcon className="text-white" />} variant="contained" disableElevation>
                Instagram
            </Button>
            <Button href="https://wa.me/5492634551684" target="_blank" className="!w-[80%] md:!w-full !bg-green-500 hover:!bg-green-600" startIcon={<WhatsAppIcon className="text-white" />} variant="contained" disableElevation>
                Whatsapp
            </Button>
        </>
    )
}