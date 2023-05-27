import ProductsList from "@/components/productList";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Aplicacion de E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <MainLayout>
        <div className="portada">
          <Image
            src="/bannerPortada.webp"
            alt="banner Tropical Mitch"
            width="563"
            height="650"
          />
          <div className="portada-title">
            <h3>Jugos Naturales</h3>
            <h1>Tropical Mitch</h1>
            <Link href="/Tienda">
              <button className="button">Comprar</button>
            </Link>
          </div>
        </div>

        <ProductsList />
      </MainLayout>
    </>
  );
}
