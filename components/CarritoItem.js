export default function CarritoItem({ item, onRemoveItem, onUpdateQuantity }) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    onUpdateQuantity(item.productId, newQuantity);
  };

  return (
    <div className="cart-item">
      <img
        className="item-image"
        src={`https://tfs-strapi-new-production.up.railway.app${item.image}`}
        alt={item.name}
      />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <div>
          Precio: <span className="item-price"> {item.price.toFixed(2)}</span>
        </div>
        <p>
          Cantidad:
          <input
            className="quantity-input"
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
          />
        </p>
        <button
          className="sbutton"
          onClick={() => onRemoveItem(item.productId)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
