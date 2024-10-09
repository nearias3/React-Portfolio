import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation for empty fields
    if (value.trim() === "") {
      setFormErrors({ ...formErrors, [name]: `${name} is required.` });
    } else {
      setFormErrors({ ...formErrors, [name]: "" });
    }

    // Additional validation for email
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailPattern.test(value)) {
        setFormErrors({
          ...formErrors,
          email: "Please enter a valid email address.",
        });
      } else {
        setFormErrors({ ...formErrors, email: "" });
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setFormErrors({ ...formErrors, [name]: `${name} is required.` });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        name: formData.name ? "" : "Name is required.",
        email: formData.email ? "" : "Email is required.",
        message: formData.message ? "" : "Message is required.",
      });
      return;
    }

    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
