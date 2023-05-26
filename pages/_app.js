import CartContextProvider from "@/context/CartContext";
import "@/scss/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
