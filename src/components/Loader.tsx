import loaderImg2 from "../assets/GIF's/Pokémon_GO_logo.svg.png"

const Loader:React.FC = () => {

    return (
    <div className="h-100vh w-100vw py-16">
        <img src={loaderImg2} className="rounded-xl m-auto h-50% w-50% md:w-50% "/>

        <h1 className="text-8xl text-gray-800 text-center mt-10 ">
            {/* spinner should be here */}
            {/* Loading..... */}
        </h1>
    </div>
  )
}

export default Loader