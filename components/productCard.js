import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card">
      <img
        src={`https://tfs-strapi-new-production.up.railway.app${product.image}`}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-price"> {product.price.toFixed(2)}</div>
      <button className="button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
