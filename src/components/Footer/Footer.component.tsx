import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://wa.me/923102924814"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition duration-300"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://github.com/Fawad992005"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition duration-300"
        >
          <FaGithub size={30} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/fawad-ahmed-207b3b343/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text-base text-gray-400">
        © 2025 Fawad Ahmed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
