import { Divider, styled, Button } from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function GoogleMap() {
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

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: 'white',
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function Location() {
    return (
        <div className="flex flex-row h-full w-full items-center justify-around overflow-x-hidden">
            <div className="hidden md:flex w-[40%] mb-10 h-[90%] items-center justify-center clip-path-custom bg-yellow-400">
                <GoogleMap />
            </div>
            <div className="flex flex-col w-[90%] md:w-[50%] h-screen items-center justify-center">
                <Root>
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderColor: "#facc15",
                                borderWidth: "2px"
                            },
                        }}
                    >
                        <h2 className="text-lg md:text-2xl font-medium">¿Dónde Estamos?</h2>
                    </Divider>
                    <h3 className="text-xs md:text-base md:mb-12">
                        Las cabañas están ubicadas en Las Golondrinas s/n, en la zona de El Salto, Potrerillos, a tan solo 65 km de la ciudad de Mendoza.
                        Con una ubicacion privilegiada, las Cabañas Las Golondrinas ofrecen una experiencia única de naturaleza y paz, con una vista panorámica sin obstrucciones de la Cordillera de los Andes.
                    </h3>
                    <Divider
                        sx={{
                            "&::before, &::after": {
                                borderColor: "#facc15",
                                borderWidth: "2px"
                            },
                        }}
                    >
                        <h2 className="text-lg md:text-2xl font-medium">¿Cómo Llegar?</h2>
                    </Divider>
                    <h3 className="text-xs md:text-base">
                        Ubicado en el departamento de Luján de Cuyo a 65 km de la ciudad de Mendoza, el valle de Potrerillos es accesible tanto por la Ruta Internacional N°7, que conecta Argentina con el vecino país Chile, como por
                        la Ruta Nacional N°82, que transita el margen derecho del Río Mendoza, atravesando Cacheuta para desembocar en una vista majestuosa del dique Potrerillos. Desde ambas rutas es posible acceder a la Villa Potrerillos, cuya entrada
                        posee una rotonda donde se puede encontrar una estación YPF. Al tomar la salida señalizada Valle del Sol, el camino pasa la estación de policía local a mano derecha y continua unos kilómetros hasta una nueva rotonda,
                        donde la salida a mano derecha continua hasta eventualmente alcanzar la localidad de El Salto. La calle Las Golondrinas es accesible desde la Avenida Los Cóndores, ubicada a mano derecha.
                    </h3>
                    <Divider
                        sx={{
                            borderColor: '#facc15',
                            borderWidth: "2px"
                        }}
                    />
                    <Button
                        variant="contained"
                        disableElevation
                        fullWidth
                        endIcon={<FmdGoodIcon className="!text-black" />}
                        className="!text-black !bg-yellow-400 hover:!bg-yellow-500"
                        component="a"
                        href="https://maps.app.goo.gl/rVyQTFkB5ejYAsAt9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Maps
                    </Button>
                </Root>
            </div>
        </div>
    )
}