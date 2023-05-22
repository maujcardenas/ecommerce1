import CartItem from "@/components/cartItem";
import MainLayout from "@/layouts/MainLayout";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import ProductsList from "@/components/productList";

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

  return (
    <MainLayout>
      <ProductsList />
      <h2>Shopping Cart</h2>
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
          <p>Total:</p>
          <p>$56.78</p>
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
