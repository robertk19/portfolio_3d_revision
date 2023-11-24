import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Robert",
          from_email: form.email,
          to_email: "robertjackknieriemen@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setIsLoading(false);
        // TODO: SHOW SUCCESS MESSAGE AND HIDE ALERT

        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // TODO: SHOW SUCCESS MESSAGE AND HIDE ALERT
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">
          Get in Touch
          <form
            className="w-full flex flex-col gap=7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                className="input"
                type="text"
                name="name"
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input
                className="input"
                type="email"
                name="email"
                placeholder="john@email.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                className="textarea"
                rows={4}
                name="message"
                placeholder="Let me know how I can help!"
                required
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
