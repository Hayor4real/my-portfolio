import React from "react";
import Title from "../layouts/Title";

import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
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
          title="Visit My PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Personal Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="ADMIN-DASHBOARD-APP"
          des="An Admin dash board fullstack application using MERN, frontend consist of material ui for styling, material
          data grid for tables, nivo for charts, Redux toolkit for state management , Redux toolkit query for making
          API calls while backend is node js, express js and Mongoose for managing mongodb."
          src={projectOne}
        />

        <ProjectsCard
          title="ECOMMERCE APPLICATION"
          des="A fullstack ecommerce application using React for the frontend .An external database is used and
          connected to via fetch API and responds completely to user interaction while backend is node, express js
          and mongoose for managing mongodb. "
          src={projectTwo}
        />

        <ProjectsCard
          title="CAR BOOKING APPLICATION"
          des="This is a fully react responsive car rental website design using mordern UI and UX using React"
          src={projectThree}
        />
        <ProjectsCard
          title="SHOPPING-CART"
          des="This is a project with react context api for state managment used to build an E-commerce shopping cart. The goal of the project was to teach how to use react for state management"
          src={projectFour}
        />

        <ProjectsCard
          title="RESUME GENERATOR APPLICATION"
          des="This application helps user to generate CV by filling the fields.The goal of the project was to teach advanced HTML5 and CSS3 and the fundamental of JavaScripts concepts"
          src={projectOne}
        />

        <ProjectsCard
          title="FRIENDS CONTACTS APP"
          des="A friends list application where a user can add friends from the input field, i utilised Js DOM manipulation to come up with this application"
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
