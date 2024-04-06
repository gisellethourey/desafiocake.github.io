import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Contacto from "./views/Contacto"

function App() {
  
  return (
      <div>
        <NavBar />
        <Routes >
          <Route path = "/home" element= {<Home />}
          />
        <Route path ="/contacto" element = {<Contacto />} 
        />
        </Routes>
      </div>
      
  )
}

export default App
