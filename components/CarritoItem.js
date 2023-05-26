export default function CarritoItem({ item, onRemoveItem, onUpdateQuantity }) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    onUpdateQuantity(item.productId, newQuantity);
  };

  return (
    <div className="basic-card cart-item">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>
        Cantidad:
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </p>
      <button className="sbutton" onClick={() => onRemoveItem(item.productId)}>
        Eliminar
      </button>
    </div>
  );
}
