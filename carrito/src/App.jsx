import { NavBar } from "./components/NavBar";
import { ItemsList } from "./components/ItemsList";
import { ShoppingCart } from "./components/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        {" "}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemsList />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
