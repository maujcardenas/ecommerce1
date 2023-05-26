import ProductsList from "@/components/productList";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";

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
        <div className="portada">
          <h1>Tropical Mitch</h1>
          <h3>Jugos Naturales</h3>
          <Link href="/Tienda">
            <button className="button">Comprar</button>
          </Link>
        </div>

        <ProductsList />
      </MainLayout>
    </>
  );
}
