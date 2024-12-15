import { education } from "../education-detail/education-details";
import EducationDetail from "../education-detail/EducationDetail";
import Section from "@/components/section/Section";

function EducationSection() {
  return (
    <Section title="Education">
      {education.map((edu) => (
        <EducationDetail education={edu} />
      ))}
    </Section>
  );
}

export default EducationSection;
