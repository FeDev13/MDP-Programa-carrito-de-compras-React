import storeItems from "../data/products.json";
import { Item } from "./Item";

export const ItemsList = () => {
  return (
    <div>
      {storeItems.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
