import { Timeline, Text } from "@mantine/core";
import { education } from "../education-detail/education-details";
import EducationDetail from "../education-detail/EducationDetail";
import Section from "@/components/section/Section";

function EducationSection() {
  return (
    <Section title="Education">
      <Timeline color="altText" active={2} bulletSize={40} lineWidth={4}>
        {education.map((edu, index) => (
          <Timeline.Item
            bullet={
              <Text size="xs" fw="700" c="white">
                {edu.initials}
              </Text>
            }
          >
            <EducationDetail education={edu} key={index} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}

export default EducationSection;
