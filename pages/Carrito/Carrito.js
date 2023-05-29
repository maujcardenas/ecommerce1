import Link from "next/link";
import React, { useContext, useEffect, useMemo } from "react";
import MainLayout from "@/layouts/MainLayout";
import { CartContext } from "@/context/CartContext";
import CarritoItem from "@/components/CarritoItem";
import axios from "axios";

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

  const total = useMemo(() => {
    return calculateTotal(cartItems);
  }, [cartItems]);

  // A request to post a order-detail for each product (each item)
  const createOrderDetail = async (item) => {
    try {
      const response = await axios.post(
        "https://tfs-strapi-new-production.up.railway.app/api/order-details",
        {
          data: {
            quantity: item.quantity,
            unitPrice: item.price,
            unitPriceDiscount: 0,
            subTotalProduct: item.quantity * item.price,
            products: item.productId,
          },
        }
      );

      console.log(response.data.data.id);
      return response.data.data.id;
    } catch (error) {
      console.error(error);
    }
  };

  const createOrder = async () => {
    const detailsIds = [];
    for (const item of cartItems) {
      const currentCartItemId = await createOrderDetail(item);
      if (currentCartItemId) {
        detailsIds.push(currentCartItemId);
      }
    }

    const today = new Date();
    const fiveDaysLater = new Date();
    fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);

    // const fiveDaysLater = new Date(today + 5);

    try {
      const response = await axios.post(
        "https://tfs-strapi-new-production.up.railway.app/api/orders",
        {
          data: {
            orderDate: today.toISOString(),
            deliveryDate: fiveDaysLater.toISOString(),
            subTotal: total,
            taxes: 0,
            totalOrder: total,
            stateOrder: "N",
            order_details: detailsIds,
          },
        }
      );
      console.log(response.data, "exitosa");
    } catch (error) {
      console.error(error, "horrorrr");
    }
  };

  return (
    <MainLayout>
      <div className="carrito-page">
        <h1>Carrito</h1>

        {cartItems.length === 0 ? (
          <div className="carrito-vacio">
            <p>El carrito está vacío</p>
            <p>Visita la tienda y selecciona nuestros productos:</p>
            <Link href="/Tienda">
              <button className="button">Tienda</button>
            </Link>
          </div>
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
              <p>${total}</p>
              <Link href="/FinalizarCompra">
                <button className="button" onClick={createOrder}>
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
