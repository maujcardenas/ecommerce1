import Link from "next/link";
import React, { useContext } from "react";
import MainLayout from "@/layouts/MainLayout";
import { CartContext } from "@/context/CartContext";
import CarritoItem from "@/components/CarritoItem";

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
  console.log(cartItems);

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const calculateTotal = (cartItems) => {
    let total = 0;

    for (const item of cartItems) {
      total += item.price * item.quantity;
    }

    return total.toFixed(2);
  };

  return (
    <MainLayout>
      <h1>Carrito</h1>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CarritoItem
              key={item.productId}
              item={item}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          <div className="total-compra">
            <p>Total: </p>
            <p>${calculateTotal(cartItems)}</p>
            <Link href="/FinalizarCompra">
              <button className="button">Finalizar Compra</button>
            </Link>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
