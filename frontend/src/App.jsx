import { Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Login} from "./pages/Login/Login";
import { HomeFreelancer } from "./pages/Freelancers/Home/HomeFreelancer";
import { PerfilFreelancer } from "./pages/Freelancers/Perfil/PerfilFreelancer";
const App = () => {
  return(
    <div className="App">
      <Routes>
         <Route path="*" element={<Login />} />
         
         <Route path="/cadastro" element={<Cadastro />} />
         <Route path="/login" element={<Login />} />
         <Route path="home-freelancer" element={<HomeFreelancer/>}/>
         <Route path="perfil-freelancer" element={<PerfilFreelancer/>}/>
      </Routes>
    </div>
  )
}

export default App;