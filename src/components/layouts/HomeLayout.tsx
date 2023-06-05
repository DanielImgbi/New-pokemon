import Header from "../Header";
import {lazy } from 'react'

const Home = lazy(()=> import( "../../pages/Home"));

const HomeLayout = () => {
  return (
    <>
        <Header />
        <Home />
    </>
  )
}

export default HomeLayout