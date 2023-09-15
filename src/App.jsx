import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  // Obtener el valor de theme localStorage
  const { theme } = useContextGlobal();
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/dentista/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
