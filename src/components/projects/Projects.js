import React from "react";
import Title from "../layouts/Title";

import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit My PORTFOLIO AND LET ME KNOW YOUR FEEDBACK"
          des="My Personal Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ECOMMERCE APPLICATION"
          des="A fullstack ecommerce application. 
          Technologies used: 
          HTML,CSS,ReactJS,NodeJS,ExpressJS,MongoDB"
          src={projectTwo}
          link="https://my-ecommerce-application-website.onrender.com"
          github="https://github.com/Hayor4real/Fullstack-project-1"
        />

        <ProjectsCard
          title="CAR BOOKING APPLICATION"
          des="This is a fully react responsive car rental website design using mordern UI and UX using.
          Technologies used: 
          HTML,CSS,ReactJS"
          src={projectThree}
          link="https://car-booking-application-germany.onrender.com"
          github="https://github.com/Hayor4real/car-rental"
        />
        <ProjectsCard
          title="ADMIN-DASHBOARD-APP"
          des="An Admin dash board fullstack application. 
          Technologies used: 
          HTML, Material UI CSS, ReactJS, NodeJS, ExpressJS, MongoDB"
          src={projectOne}
          link="https://admin-frontend-bz42.onrender.com"
          github="https://github.com/Hayor4real/Admin-Dashboard-App"
        />
        <ProjectsCard
          title="SHOPPING-CART"
          des="This is a project with react context api for state managment used to build an E-commerce shopping cart.
          Technologies: HTML, CSS, ReactJS "
          src={projectFour}
          link="https://react-shopping-items.netlify.app"
          github="https://github.com/Hayor4real/shopping-cart-context-api"
        />

        <ProjectsCard
          title="RESUME GENERATOR APPLICATION"
          des="This application helps user to generate CV by filling the fields.The goal of the project was to teach advanced HTML5 and CSS3 and the fundamental of JavaScripts concepts"
          src={projectFive}
          link="https://hayor4real.github.io/Cv-Generator-App"
          github="https://github.com/Hayor4real/Cv-Generator-App"
        />

        <ProjectsCard
          title="Calculator APPLICATION"
          des="This application helps user to use a calculator.The goal of the project was to teach advanced HTML5 and CSS3 and the fundamental of JavaScripts concepts"
          src={projectSix}
          link="https://hayor4real.github.io/Project-4-Brainnest"
          github="https://github.com/Hayor4real/Project-4-Brainnest"
        />
      </div>
    </section>
  );
};

export default Projects;
