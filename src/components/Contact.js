import React, { useState } from "react";
import "../styles/Contact.css";
import data from "../data";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.description) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Here you would typically send the formData to your backend
      console.log("Form data submitted:", formData);
      setConfirmationMessage("Mail sent! I'll get back to you soon.");
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setConfirmationMessage("");
      }, 3000); // Hide after 3 seconds
      setFormData({
        name: "",
        email: "",
        description: "",
      });
      setIsModalOpen(false);
      // IMPORTANT: Backend integration is required here to send the email.
      // This frontend only collects data. You would need a server-side script
      // (e.g., Node.js, Python, PHP) to handle sending emails securely.
      // The target email is amsaikiran02@gmail.com as per user request.
    } else {
      setConfirmationMessage("Please correct the errors in the form.");
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setConfirmationMessage("");
      }, 3000); // Hide after 3 seconds
    }
  };

  return (
    <>
      {showConfirmation && (
        <div
          className={`confirmation-message ${
            errors.name || errors.email || errors.description
              ? "error"
              : "success"
          }`}
        >
          {confirmationMessage}
        </div>
      )}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
        <div className="contact-links">
          <button
            onClick={() => setIsModalOpen(true)}
            className="contact-button"
          >
            Send me an Email
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description (Mandatory):</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={errors.description ? "input-error" : ""}
                  ></textarea>
                  {errors.description && (
                    <span className="error-message">{errors.description}</span>
                  )}
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
