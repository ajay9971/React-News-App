import { useState } from "react"
import Home from "./pages/Home"
import "./Style.css"
import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import Favorites from "./pages/Favorites";
export default function App() {
  const [dark, setDark] = useState(false);


  return (
    <BrowserRouter>
      <div  id="darkbutton" className={dark ? "dark" : ""}>

       <div className="navbar">
          {/* <h2>
            News App
          </h2> */}

           <div className="nav-buttons">
            <Link to="/" >
              Home
            </Link>
            <Link to="/favorites">
              Favorites
            </Link>
            <button onClick={() => setDark(!dark)} style={{ position: "fixed", top: 10, right: 10 }}>{dark ? "Light" : "Dark"}</button>

          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}