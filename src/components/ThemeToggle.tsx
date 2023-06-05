import useLocalStorageHook from "../customhooks/useLocalStorageHook";
import { FaToggleOff, FaToggleOn} from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useLocalStorageHook('theme', '');

    const handleClick = () => {
        setTheme(theme === "dark"? "light" : "dark")
    }
    
  return (
    <button onClick={handleClick}>
        { theme === 'dark' ?
            <FaToggleOn  
                className="text-white text-2xl"
            />
            :
            <FaToggleOff 
                className="text-white text-2xl"
            />
        }
    </button>
  )
}

export default ThemeToggle