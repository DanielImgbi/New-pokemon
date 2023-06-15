import { PokemonDataType } from "../pages/Home"

interface CardProps{
    pokemon: PokemonDataType;
}

const Card = ({pokemon}:CardProps) => {

    return (
    <div className="bg-gray-100 mt-5 h-60 w-5/6 md:w-60 rounded-lg relative shadow-md">
        <div className="p-4 bg-gray-200 h-3/5 w-2/2 rounded-t-lg">
            <img src="" alt="" />
        </div>
        <h2 className="p-2 w-2/2 font-bold space-x-10">
            {pokemon.name}
        </h2>
        <div className=" absolute h-12 w-12 right-0">
            <img src="GIF's/ball.png" alt="" />
        </div>
    </div>
  )
}

export default Card