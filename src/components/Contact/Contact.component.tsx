import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      _replyto: email,
      message: message,
    };
    fetch("https://formspree.io/f/mnnnwdeg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Message sent successfully!");
          setEmail("");
          setMessage("");
        } else {
          setStatus("Error sending message. Please try again.");
        }
      })
      .catch(() => {
        setStatus("Error sending message. Please try again.");
      });
  };

  return (
    <>
      <div
        className="h-auto md:h-[50vh] text-white p-4 sm:p-8 flex items-center justify-center"
        data-aos="fade-down"
      >
        <div className="max-w-4xl w-full bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-green-500 mb-6">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Your Message"
              />
            </div>

            {status && (
              <div
                className={`text-center ${
                  status.includes("Error") ? "text-red-500" : "text-green-500"
                }`}
              >
                {status}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="w-3/4 sm:w-1/2 bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default Contact;
