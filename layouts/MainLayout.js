import Header from "@/components/Header";
import Footer from "@/components/Footer";
const MainLayout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
