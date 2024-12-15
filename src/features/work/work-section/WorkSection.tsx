import Section from "@/components/section/Section";
import { works } from "../work-detail/my-work";
import WorkDetail from "../work-detail/WorkDetail";

function WorkSection() {
  return (
    <Section title="My Work">
      {works.map((work) => (
        <WorkDetail work={work} />
      ))}
    </Section>
  );
}

export default WorkSection;
