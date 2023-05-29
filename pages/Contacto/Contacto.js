import MainLayout from "@/layouts/MainLayout";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <MainLayout>
      <div className="contacto-page">
        <h1>Formulario de Contacto</h1>
        <ContactForm />
      </div>
    </MainLayout>
  );
}
