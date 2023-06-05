
import { useEffect, useState } from "react";
import Components from "./pages";
import useLocalStorageHook from "./customhooks/useLocalStorageHook";



const App:React.FC = () => {
  const [theme] = useLocalStorageHook('theme', '');
  const [toggleTheme, dispatch] = useState('light');

  useEffect(()=>{
    if(theme === 'dark')
        dispatch('dark');
    dispatch('light')
  }, [theme])
  
  
  return (

    <div className={`dark-${toggleTheme}-background text-${toggleTheme}-primary`}>
      <Components />
    </div>
    )

}

export default App