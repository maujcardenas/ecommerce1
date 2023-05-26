import MainLayout from "@/layouts/MainLayout";
import CartItem from "@/components/CartItem";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import ProductsList from "@/components/productList";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
  console.log(cartItems);
  //   const cartItems = [
  //     {
  //       productId: 1,
  //       name: "Product 1",
  //       price: 10.99,
  //       quantity: 2,
  //     },
  //     {
  //       productId: 2,
  //       name: "Product 2",
  //       price: 15.99,
  //       quantity: 1,
  //     },
  //     {
  //       productId: 3,
  //       name: "Product 3",
  //       price: 7.99,
  //       quantity: 4,
  //     },
  //   ];

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
            <CartItem
              key={item.productId}
              item={item}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          <div className="total-compra basic-card">
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
