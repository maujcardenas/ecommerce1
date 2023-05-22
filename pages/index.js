import ProductsList from "@/components/productList";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Aplicacion de E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>Bienvenido a Tropical Mitch</h1>
        <ProductsList />
      </MainLayout>
    </>
  );
}
