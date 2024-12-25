import { useEffect, useState } from "react";
import { Error } from "./Error";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
       <Navbar/>
       <Hero/>
       <Skills/>
       <About/>
       <Project/>
       <ContactForm/>
       </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar/>
       <About/>
      </div>
    ),
  },
  {
    path: "/skills",
    element: (
      <div>
        <Navbar />
        <Skills />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <Navbar/>
       <Project/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar/>
       <ContactForm/>
      </div>
    ),
  },

  {
    path: "/*",
    element: (
      <div>
        <Navbar />
        <Error />
      </div>
    ),
  },
]);

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
