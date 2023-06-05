import logo from "../assets/pokemon-logo-png-0.png";
import ThemeToggle from "./ThemeToggle";


const Header: React.FC = () => {

  return (
    <div className="h-90px px-3 flex justify-between items-center bg-gray-200">
      <img src={logo} alt="logo img" height={"40px"} width={"80px"}/>

      <div className="bg-gray-300 p-3 h-2/3 w-3/5 rounded-xl flex justify-center">
        <ThemeToggle />
      </div>
    </div>

  )
}

export default Header