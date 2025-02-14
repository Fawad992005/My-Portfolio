import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Define the type for a project, including an image property
export type ProjectType = {
  id: number;
  name: string;
  description: string;
  image: string; // URL to the project image
  link: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    name: "NewMovies (Movies Website)",
    description:
      "NewMovies is a sleek React-based platform for discovering and tracking movies. Built with Zustand, Tailwind CSS, DaisyUI, Firebase, and Firestore, it offers personalized watchlists, movie search, and a responsive design. Users enjoy a seamless experience managing their favorites with real-time updates and intuitive features tailored to movie enthusiasts.",
    image: "/newmovies.png", // Replace with your image URL
    link: "https://newmoviesbeta.netlify.app",
  },
  {
    id: 2,
    name: "ShopEase : Ecommerce Store",
    description:
      "ShopEase is a modern e-commerce platform built with React, Redux, SCSS, and Firebase for secure authentication. Integrated with Stripe for seamless and secure payments, it features a stylish design, fast performance, and easy navigation. ShopEase ensures users can browse, shop, and checkout effortlessly, delivering a hassle-free online shopping experience!",
    image: "/shopease.png", // Replace with your image URL
    link: "https://shopease2.netlify.app",
  },
  {
    id: 3,
    name: "Password Manager In React",
    description:
      "Passop is a secure password manager built with React, designed for simplicity and efficiency. It offers a user-friendly interface for storing, managing, and retrieving passwords safely. With robust security features, Passop ensures your credentials are protected while remaining easily accessible, making password management stress-free and reliable.",
    image: "/passop.jpg", // Replace with your image URL
    link: "https://passopbeta.netlify.app",
  },
  {
    id: 4,
    name: "NASA MERN stack Project",
    description:
      "Nasa Project is a MERN stack project where users can launch and abort space missions. Built with React, Node.js, Express.js, and MongoDB, it features a dynamic interface for managing missions. Users can schedule new launches and cancel existing ones, with real-time updates reflecting mission status. The backend ensures efficient data handling, while the frontend provides a seamless and interactive experience.",
    image: "/NASA.PNG", // Replace with your image URL
    link: "https://nasa-project-frontend-gray.vercel.app/",
  },
  {
    id: 5,
    name: "MERN Chat Web App",
    description:
      "MERN Chat App is a real-time messaging application built with React, Node.js, Express.js, and MongoDB. It features one-to-one and group chats, user authentication, and real-time updates using Socket.io. The backend ensures secure and efficient message handling, while the frontend provides a seamless and interactive chat experience.",
    image: "/ChatApp.PNG", // Replace with your image URL
    link: "https://mern-chat-web-app-olive.vercel.app/",
  },
  // Add more projects as needed
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="h-auto py-12" data-aos="fade-down">
        <h1 className="text-4xl font-semibold text-center text-green-500 mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" text-white p-6 bg-gray-900 rounded-lg shadow-lg shadow-green-500 hover:shadow-xl hover:shadow-green-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-4 text-green-600">
                {project.name}
              </h2>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="bg-green-600 text-black font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-green-600"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default Project;
