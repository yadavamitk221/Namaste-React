import React, { useState } from "react";
import './styles.css';

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setSubmittedName(form.name);
            setSubmitted(true);
            setErrors({});
            setForm({ name: "", email: "", message: "" });
        }
    };

    return (
        <div>
            {!submitted ? (
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error-msg">{errors.name}</p>}
                    </div>

                    <div className="input-fields">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-msg">{errors.email}</p>}
                    </div>

                    <div className="input-fields">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="error-msg">{errors.message}</p>}
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </form>
            ) : (
                <div className="form-container">
                    <h1>Thank You, {submittedName}!</h1>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
