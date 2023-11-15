import Navbar from './components/navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
