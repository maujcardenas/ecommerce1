export default function ResumenCompra({ cartItems }) {
  console.log(cartItems);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="resumen-compra">
      <h3>Gracias por tu orden!</h3>
      <p>Tu orden ha sido correctamente realizada. Aquí están los detalles:</p>

      <div className="order-details">
        {/* <h4>Detalles de Orden</h4> */}
        {cartItems.map((item) => (
          <div className="order-item">
            <p className="r-item-name">{item.name}</p>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="order-total">
        <h3>Total:</h3>
        <span className="r-total">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
