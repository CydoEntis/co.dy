import Section from "@/components/section/Section";
import { Work, works } from "../work-detail/my-work";
import WorkDetail from "../work-detail/WorkDetail";

type WorkSectionProps = {
  onOpen: (work: Work) => void;
};
function WorkSection({ onOpen }: WorkSectionProps) {
  return (
    <Section id="my-work-section" title="My Work">
      {works.map((work, index) => (
        <WorkDetail work={work} key={index} onClick={onOpen} />
      ))}
    </Section>
);
}

export default WorkSection;
