import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalSum = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <>
      <p>Productos en el carrito:{cantidad}</p>
      <p>Total:${totalSum}</p>
      <button onClick={() => console.log(cart)}>Checkout</button>
    </>
  );
};
