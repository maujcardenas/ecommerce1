import ProductsList from "@/components/productList";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tropical Mitch</title>
        <meta name="description" content="Tienda en línea de Tropical Mitch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <MainLayout>
        <div className="portada-section">
          <img
            className="image-b"
            src="/bannerPortada.webp"
            alt="banner Tropical Mitch"
          />

          <div className="intro-card">
            <h3>Jugos Naturales</h3>
            <h1>Tropical Mitch</h1>
            <Link href="/Tienda">
              <button className="button">Comprar</button>
            </Link>
          </div>
        </div>

        <div className="tienda-section">
          <div className="bienvenidos-card">
            <h3>Nuestros</h3>
            <h2>Productos</h2>
            <span className="bienvenidos">
              ¡Bienvenidos a nuestra tienda en línea de jugos naturales!
            </span>
            <p>
              Aquí encontrarás una gran variedad de deliciosos y saludables
              jugos naturales para todos los gustos y necesidades. Si
              simplemente buscas disfrutar de un refresco natural y lleno de
              sabor, nuestros jugos naturales son ideales para ti. Elaborados
              con las frutas y verduras más frescas y sabrosas, nuestros jugos
              son una opción saludable y deliciosa para cualquier momento del
              día.
            </p>
          </div>

          <ProductsList />
        </div>
      </MainLayout>
    </>
  );
}
