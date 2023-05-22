const CartItem = ({ item, onRemoveItem, onUpdateQuantity }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    onUpdateQuantity(item.productId, newQuantity);
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
      </p>
      <button onClick={() => onRemoveItem(item.productId)}>Remove</button>
    </div>
  );
};

export default CartItem;
