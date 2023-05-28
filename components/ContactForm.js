import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">
        Nombre:
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="form-label" htmlFor="email">
        Correo Electrónico:
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className="form-label" htmlFor="message">
        Mensaje:
      </label>
      <textarea
        className="form-input"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button className="submit-button" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
