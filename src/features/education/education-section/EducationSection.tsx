import { Timeline } from "@mantine/core";
import { education } from "../education-detail/education-details";
import EducationDetail from "../education-detail/EducationDetail";
import Section from "@/components/section/Section";

function EducationSection() {
  return (
    <Section title="Education">
      <Timeline color="altText" active={4} bulletSize={18} lineWidth={3}>
        {education.map((edu, index) => (
          <Timeline.Item>
            <EducationDetail education={edu} key={index} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}

export default EducationSection;
