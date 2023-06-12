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
    <header className={`h-[90px] px-5 flex justify-between shadow-sm items-center 
      ${ themeContext?.theme === 'dark' ? "bg-opacity-5 bg-white" : ''}`}
    >
      <img 
        src="/GIF's/pokemon-logo-png-0.png" 
        alt="logo img" 
        height={"40px"} 
        width={"80px"}
      />

      <div className="w-24 flex justify-between">

        <BsSearch 
          size={26 } 
          fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
          onClick={handleSearchToggle}
        />

        <BsThreeDotsVertical 
          size={26 } 
          fill={`${themeContext?.theme === 'light' ? 'black' : 'white'}`} 
          onClick={handleNavToggle}
        />

      </div>
      
      { 
        showNav &&
        <div 
          className={` p-3  shadow-xl absolute right-0 top-20 z-30 rounded flex flex-col items-center
          ${ themeContext?.theme === 'dark' ? "bg-dark-background" : 'bg-light-background'}`}
        >

          <span 
            className={`h-10 w-48 flex justify-evenly items-center text-gray-100 
            ${themeContext?.theme === 'light' ? "text-light-text" : "text-dark-text"}`}
          >
            Dark mode <ThemeToggle />
          </span>

          <span 
            className={`h-10 w-48 flex justify-evenly items-center text-gray-100 cursor-pointer
            ${themeContext?.theme === 'light' ? "text-light-text" : "text-dark-text"}`}
          >
            Caught pokemon
            
          </span>
        </div> 
      }
      
    </header>

  )
}

export default Header