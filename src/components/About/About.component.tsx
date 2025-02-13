import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        className="h-auto flex flex-col items-center justify-center p-4 text-green-400 md:h-[50vh]"
        data-aos="fade-down"
      >
        <div className="text-4xl font-bold mb-6 text-green-600">About Me</div>
        <div className="text-gray-300 leading-relaxed max-w-3xl text-center mb-6 text-xl">
          I’m an enthusiastic frontend developer with a strong background in
          React, HTML, CSS, and JavaScript. I’m passionate about creating
          interactive, user-friendly websites and applications that provide
          great experiences across all devices. Currently, I’m diving into
          Next.js to enhance my skills and build optimized, high-performance web
          apps. My journey is fueled by curiosity and the desire to stay
          up-to-date with the latest in web development. I thrive on solving
          problems, learning new technologies, and delivering well-crafted,
          functional solutions that bring ideas to life on the web.
        </div>

        <div className="text-lg text-gray-400 mb-6">
          <span className="font-semibold text-green-500">University: </span>
          <span className="font-semibold text-green-500">
            University Of Karachi (UBIT) (2024 - Present)
          </span>
        </div>
        <div className="text-lg text-gray-400 mb-6">
          <span className="font-semibold text-green-500">Intermediate: </span>
          <span className="font-semibold text-green-500">
            Govt College For Men Nazimabad (2021-2023)
          </span>
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="px-6 py-3 bg-green-600 text-gray-900 font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Contact Me
        </button>
      </div>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default About;
