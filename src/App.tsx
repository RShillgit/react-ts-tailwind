import {Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
