import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UpdateMaterials from "./components/UpdateMaterial";
import AddPage from "./components/pages/AddPage";
import AllMaterials from "./components/pages/AllMaterials";
import AusleihenDetail from "./components/pages/AusleihenDetail";
import SchnellregalPage from "./components/pages/SchnellregalPage";
import SchnellregalDetailPage from "./components/pages/SchnellregalDetailPage.js";

document.body.style.backgroundColor = "#F4F2F7";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMaterials/>}/>
          <Route path="/add" element={<AddPage/>}/>
          <Route path="/update" element={<UpdateMaterials/>}/>
          <Route path="materials/:id" element={<AusleihenDetail/>}/>
          <Route path="schnellregal" element={<SchnellregalPage/>}/>
          <Route path="schnellregal/:id" element={<SchnellregalDetailPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
