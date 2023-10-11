import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

export const NavBar = () => {
  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <nav className=" bg-black text-white flex h-10 justify-around">
        <Link to="/">
          {" "}
          <h1>Ecommerce</h1>
        </Link>

        <ul>
          <Link to="/cart">
            <li>
              Productos:{" "}
              <span className=" rounded-full bg-red-600 p-2 mt-8">
                {cantidad}
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
