import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation.component";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.component.css";

const Home = () => {
  const roles = ["Frontend Developer", "React Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Typing animation logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 3000); // Pause before switching roles
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentRoleIndex, roles]);

  return (
    <>
      <Navigation />
      <div
        className="h-auto md:h-[70vh] flex items-center justify-center my-6"
        data-aos="fade-down"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div className="text-center md:text-left w-[76%] md:w-[50%] flex flex-col gap-4">
            <div className="text-4xl font-semibold text-green-600">
              Hello, I am Fawad Ahmed
            </div>
            <div className="text-6xl text-white transition-all">
              {displayedText}
              <span className="blinking-cursor"></span>
            </div>
            <div className="mt-4 text-gray-300 text-xl">
              I am a Passionate Frontend Developer from Karachi, Pakistan,
              skilled in HTML, CSS, JavaScript, React, and TypeScript. Crafting
              responsive, user-friendly interfaces to deliver seamless web
              experiences and enhance user engagement.
            </div>
            <div className="mt-6">
              <a
                href="/FrontEndResume.pdf"
                download="FrontEndResume.pdf"
                className="px-6 py-2 bg-green-600 text-black font-semibold rounded-lg shadow hover:bg-green-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/profileimage.jpg"
              alt="profile pic"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-green-500 shadow-lg shadow-green-500/50"
            />
          </div>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default Home;
