import React from "react";
import Heading from "../Atoms/Heading/Heading2";
import Table from "../Molecules/Table/Table";

function About() {
  return (
    <div>
      <div className="pb-10">
      <Heading  textMode="light">
        Why <span className="text-gold-500">Moonex</span> ?
      </Heading>
      </div>
      <Table/>
    </div>
  );
}

export default About;
