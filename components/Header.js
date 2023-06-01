import Link from "next/link";
import { useState, useContext } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import CartContext from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { cartItems } = useContext(CartContext);
  const totalItemCount = 5;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/">Inicio</Link>
          <Link href="/Nosotros">Nosotros </Link>
          <Link href="/Tienda">Tienda</Link>
          <Link href="/Contacto">Contacto</Link>
        </div>
        <div className="navbar-right">
          <Link href="/MiCuenta">
            <FaUser />
            <div className="item"> Mi Cuenta </div>
          </Link>
          <Link href="/Carrito">
            <FaShoppingCart />
            <div className="item"> Carrito </div>
            {/* {totalItemCount > 0 && (
              <span className="item-count">{totalItemCount} </span>
            )} */}
          </Link>
        </div>
        <div className="navbar-mobile-icon" onClick={toggleMenu}>
          {/* Replace with your custom icon */}
          {isMenuOpen ? "Cerrar" : "Menu"}
        </div>
      </div>
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <Link href="/">Inicio</Link>
          <Link href="/Nosotros">Nosotros</Link>
          <Link href="/Tienda">Tienda</Link>
          <Link href="/Contacto">Contacto</Link>
          <Link href="/MiCuenta">
            <FaUser />
            <div className="item"> Mi Cuenta </div>
          </Link>
          <Link href="/Carrito">
            <FaShoppingCart />
            <div className="item"> Carrito </div>
            {/* {totalItemCount > 0 && (
              <span className="item-count">{totalItemCount} </span>
            )} */}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
