import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contatos from "./pages/Contatos";
import Home from "./home";
import Sobre from "./pages/Sobre";

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Sobre" element={<Sobre/>}/>
    <Route path="/Contato" element={<Contatos/>}/>
    </Routes>
    </BrowserRouter>
    </div> 
   
  )
}

export default App
