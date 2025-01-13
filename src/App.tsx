import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./components/Home/Home.component";
import Project from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";
import Skills from "./components/Skills/Skills.component";
import About from "./components/About/About.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
      "/": homeRef,
      "/skills": skillsRef,
      "/projects": projectsRef,
      "/contact": contactRef,
      "/about": aboutRef,
    };

    const ref = sectionRefs[location.pathname];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Sections */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      {/* Floating Action Button */}

      {/* Routes */}
      {showFab && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-green-600 text-white py-3 px-6 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
