import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MaterialEdit from "./components/MaterialEdit";
import AddPage from "./components/pages/AddPage";
import AllMaterials from "./components/pages/AllMaterials";
import AusleihenDetail from "./components/pages/AusleihenDetail";
import SchnellregalPage from "./components/pages/SchnellregalPage";
import SchnellregalDetailPage from "./components/pages/SchnellregalDetailPage.js";

document.body.style.backgroundColor = "#F4F2F7";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllMaterials/>}/>
            <Route path="/add" element={<AddPage/>}/>
            <Route path="/update/:id" element={<MaterialEdit/>}/>
            <Route path="materials/:id" element={<AusleihenDetail/>}/>
            <Route path="schnellregal" element={<SchnellregalPage/>}/>
            <Route path="schnellregal/:id" element={<SchnellregalDetailPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

