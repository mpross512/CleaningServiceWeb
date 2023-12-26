import Navbar from './components/navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className=" p-4 md:p-8">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
