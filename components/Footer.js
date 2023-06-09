import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <Link className="links-footer" href="/#">
          <Image
            className="logo_img-home"
            src="/logotm.webp"
            alt="Tropical Mitch Logo"
            height="170"
            width="170"
          />
        </Link>

        <div className="menu-footer">
          <ul>
            <Link as="a" href="/Tienda">
              Tienda
            </Link>
            <Link as="a" href="/Contacto">
              Contacto
            </Link>
            <Link as="a" href="/">
              Términos y Condiciones
            </Link>
            <Link as="a" href="/">
              Política de privacidad
            </Link>
          </ul>
        </div>

        <div className="social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">
          Desarrollado por: Equipo II Máster Web Development Fullstack
        </span>
      </div>
    </div>
  );
}
