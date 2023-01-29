import React from "react";
import { FaReact } from "react-icons/fa";
import { RiGamepadLine } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="what I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Frontend Development"
          des="I built some web pages and application using React"
          icon={<FaReact />}
        />
        <Card
          title="Game development "
          des="I built some game application using Javascipts"
          icon={<RiGamepadLine />}
        />
        <Card
          title="Ux design"
          des="I know the basic of Ux Design and hope to learn more"
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
