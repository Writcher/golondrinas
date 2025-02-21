export default function GoogleMap() {
    return (
        
        <div className="w-[98%] h-[98%] rounded-md overflow-hidden clip-path-custom">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8731896695203!2d-69.28611342364744!3d-32.954357273590134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967ded2b9443aa57%3A0xc527258c67afaf20!2sCaba%C3%B1as%20Las%20Golondrinas!5e0!3m2!1ses!2sar!4v1739994398936!5m2!1ses!2sar"
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