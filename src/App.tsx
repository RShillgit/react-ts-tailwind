import {Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
