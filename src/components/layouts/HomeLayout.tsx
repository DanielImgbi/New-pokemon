import Header from "../Header";
import {lazy, useState } from 'react';
import Search from "../Search";

const Home = lazy(()=> import( "../../pages/Home"));

const HomeLayout = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchToggle = () =>{
    setShowSearchModal( prev => !prev);
  }


  return (
    <>
        <Header handleSearchToggle={handleSearchToggle}/>
        <Home />

        {showSearchModal && <Search handleSearchToggle={handleSearchToggle}/> }
        
    </>
  )
}

export default HomeLayout