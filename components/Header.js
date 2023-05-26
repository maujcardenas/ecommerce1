import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href="/Tienda">Tienda</Link>
          <Link href="/Nosotros">Nosotros </Link>
          <Link href="/Contacto">Contacto</Link>
        </div>
        <div className="navbar-right">
          <Link href="/Carrito">Carrito </Link>
          <Link href="/MiCuenta">Mi Cuenta </Link>
        </div>
        <div className="navbar-mobile-icon" onClick={toggleMenu}>
          {/* Replace with your custom icon */}
          {isMenuOpen ? "Close" : "Menu"}
        </div>
      </div>
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <Link href="/Tienda">Tienda</Link>
          <Link href="/Nosotros">Nosotros</Link>
          <Link href="/Contacto">Contacto</Link>
          <Link href="/Carrito">Carrito</Link>
          <Link href="/MiCuenta">Mi Cuenta</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
