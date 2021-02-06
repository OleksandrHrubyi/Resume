import React, { Component } from "react";
import MainImg from "../Img/Img";
import Section from "../Section/Section";
import MainInfo from "../MainInfo/MainInfo";
import SectionInfo from "../SectionInfo/SectionInfo";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";

class Resume extends Component {
  render() {
    return (
      <>
        <Section>
          <MainImg
            name="Oleksandr Hrubyi"
            skills={["Html", "Css", "Js", "React"]}
            soft={[
              "Працелюбність",
              "Відповідальність",
              "Цілеспрямованість",
              "Порядність",
            ]}
          />
        </Section>
        <SectionInfo>
          <MainInfo name="Грубий Олександр Вікторович" />
          <Experience />
          <Education />
          <Projects />
        </SectionInfo>
      </>
    );
  }
}

export default Resume;
