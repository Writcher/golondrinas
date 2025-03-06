import { useTranslations } from "next-intl";

export default function GoogleMap() {
    
    const translation = useTranslations('location');
    
    return (
        <div className="w-[98%] h-[98%] rounded-md overflow-hidden clip-path-custom">
            <iframe
                src={translation('maplink')}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}