import Section from "@/components/section/Section";
import { Work, works } from "../work-detail/my-work";
import WorkDetail from "../work-detail/WorkDetail";

type WorkSectionProps = {
  onOpen: (work: Work) => void;
};
function WorkSection({ onOpen }: WorkSectionProps) {
  return (
    <Section title="My Work">
      {works.map((work) => (
        <WorkDetail work={work} onClick={onOpen} />
      ))}
    </Section>
  );
}

export default WorkSection;
