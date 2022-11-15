import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/detail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas/:mascotaId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }

export default App;
