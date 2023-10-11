import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

export const Item = ({ id, name, price, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItems) => {
      const itemInCart = currentItems.find((item) => item.id === id);
      if (itemInCart) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItems, { id, quantity: 1, price }];
      }
    });
  };

  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <span>${price}</span>
      <img src={imgUrl} alt="imagen del producto" />

      <button
        className=" bg-blue-600 text-white rounded-md p-1 mx-1"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
      <button className=" bg-red-600 text-white rounded-md p-1 mx-1">
        Eliminar
      </button>
    </>
  );
};
