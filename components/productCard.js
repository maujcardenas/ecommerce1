import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const handleAddToCart = () => {
    console.log("i was triggered");
    addItem(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price">${product.price}</div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
