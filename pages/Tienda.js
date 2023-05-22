import MainLayout from "@/layouts/MainLayout";
import ProductsList from "@/components/productList";

export default function Tienda() {
  return (
    <MainLayout>
      <h1> Esta es la tienda sola</h1>
      <ProductsList />
    </MainLayout>
  );
}
