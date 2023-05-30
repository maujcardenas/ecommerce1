import ResumenCompra from "@/components/ResumenCompra";
import MainLayout from "@/layouts/MainLayout";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function FinalizarCompra() {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
  console.log(cartItems, "ahora es el ob en fin compra");

  return (
    <MainLayout>
      <div className="fincompra-page">
        <h1>Finalizar Compra</h1>
        <ResumenCompra cartItems={cartItems} />
      </div>
    </MainLayout>
  );
}
