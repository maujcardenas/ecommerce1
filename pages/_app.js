import CartContextProvider from "@/context/CartContext";
import "@/scss/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
