import MainLayout from "@/layouts/MainLayout";
import ProductsList from "@/components/productList";

export default function Tienda() {
  return (
    <MainLayout>
      <div className="tienda">
        <h1> Tienda Tropical Mitch </h1>
        <ProductsList />
      </div>
    </MainLayout>
  );
}
