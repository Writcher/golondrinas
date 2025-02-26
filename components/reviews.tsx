import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function Reviews() {
  return (
    <div className="flex flex-col h-[80%] md:h-[60%] md:gap-8 w-full items-center justify-center">
      <h2 className="text-2xl font-semibold mt-[15%] md:mt-0">Reseñas</h2>
      <div className="flex flex-col md:flex-row gap-24 md:gap-8 h-full w-full items-center justify-center">
        <div className="flex flex-col gap-4 w-[90%] md:w-[30%] h-[30%] md:h-full items-center justify-start">
          <div className="flex md:flex-row gap-2 w-full items-center justify-between">
            <p className="md:text-lg font-medium">Micaela Buscemi <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <p>
            Hermosas cabañas, te reciben con todo impecable. Pileta muy linda, cochera techada y parrilla. Tanto Monica como Julio son personas muy amables que estan a disposición en todo momento.
            No duden en visitar estas cabañas. No se van a arrepentir. 10/10.
            La mejor vista de El Salto
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[90%] md:w-[30%] h-[30%] md:h-full items-center justify-start">
          <div className="flex flex-row gap-2 w-full items-center justify-between">
            <p className="md:text-lg font-medium">Carla Gimenez <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <p>
            Muy lindo lugar, los dueños son muy accesibles y bien predispuestos. La cabaña está bien equipada y la pileta es un espacio muy agradable!
          </p>
        </div>
        <div className="hidden md:flex flex-col gap-4 w-[30%] h-full items-center justify-start">
          <div className="flex flex-row gap-2 w-full items-center justify-between">
            <p className="text-lg font-medium">Liliana Andrea Bridge <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon />
            </div>
          </div>
          <p>
            El lugar es muy tranquilo, las cabañas cómodas, con pileta. La atención de Mónica y Julio excelente. El lugar esta muy bien cuidado, con detalles para pasarlo muy bien. Los colchones son sumamente cómodos, y detalles de calidad. Tiene dos parrillas y mesas afuera para el asadito. La vista a la cordillera es maravillosa.
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-8 h-full w-full items-center justify-center">
        <div className="flex flex-col gap-4 w-[30%] h-full items-center justify-start">
          <div className="flex flex-row gap-2 w-full items-center justify-between">
            <p className="text-lg font-medium">Mariana Mambrín <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <p>
            Hermosas cabañas. Tienen todos los servicios y los dueños te atienden súper bien. La vista a las montañas es maravillosa y te acompaña todo el día.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[30%] h-full items-center justify-start">
          <div className="flex flex-row gap-2 w-full items-center justify-between">
            <p className="text-lg font-medium">María M. C. <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon />
            </div>
          </div>
          <p>
            Excelente estadía. Caímos un finde de mucho frío y nieve y el dueño nos resolvió con una estufa extra. Muy cálida la cabaña para dos. La cama y ropa de cama 10 puntos! Excelente comunicación y ubicación.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[30%] h-full items-center justify-start">
          <div className="flex flex-row gap-2 w-full items-center justify-between">
            <p className="text-lg font-medium">Maximiliano Olivera <span className="text-gray-300 font-normal">por Google</span></p><br />
            <div className="flex text-yellow-400">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <p>
            Muy lindo lugar, su entorno es fantástico. Las cabañas son muy cómodas y completas. Lo atienden sus dueños que son muy agradables y atentos. Muy recomendable.
          </p>
        </div>
      </div>
    </div>
  )
}