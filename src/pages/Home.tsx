import Card from "../components/Card";
import { useQuery } from '@tanstack/react-query';
import  Axios  from "axios";

export interface PokemonDataType {
  "name":string,
  "url":string
}

const Home = () => {

  const {data} = useQuery({
    queryKey: ['Pokemons'], 
    queryFn: async () => {
      const result = await Axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=150')
        return result
    }
  })
  
 console.log(data)
 console.log(data?.headers)



  return (
    <div className="p-4 dark flex justify-evenly items-center flex-wrap flex-col md:flex-row">
      {data?.data.results.map((pokemon:PokemonDataType ) => <Card key={pokemon.name} pokemon={pokemon}/> )}
    </div>
  )
}

export default Home