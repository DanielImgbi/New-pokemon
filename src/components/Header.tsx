import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./context/themeContext";
import {useContext, useState} from 'react'
import {BsSearch, BsThreeDotsVertical} from 'react-icons/bs';

interface Props{
  handleSearchToggle: () => void
}

const Header = ({handleSearchToggle}: Props) => {
  
  const themeContext = useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav( prevVal => !prevVal )
  }

  return (
    <header className={`"h-[90px] px-5 flex justify-between items-center bg-black"`}>
      <img src="/GIF's/pokemon-logo-png-0.png" alt="logo img" height={"40px"} width={"80px"}/>

      <div className="w-24 flex justify-between">

        <BsSearch 
          size={26 } 
          fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
          onClick={handleSearchToggle}/>

        <BsThreeDotsVertical 
        size={26 } 
        fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
        onClick={handleNavToggle}/>

      </div>
      
      { 
        showNav &&
        <div className="bg-red-600 p-3 xl:h-2/3  absolute right-5 top-24 z-30 rounded flex justify-center">

          <span 
            className={`h-10 w-48 flex justify-evenly items-center text-gray-100 
            ${themeContext?.theme === 'light' ? "text-light-text" : "text-dark-text"}`}
          >
            Dark mode <ThemeToggle />
            
          </span>
        </div> 
      }
    </header>

  )
}

export default Header