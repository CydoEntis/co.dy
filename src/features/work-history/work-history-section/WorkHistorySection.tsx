import Section from "@/components/section/Section";
import { jobs } from "../work-history-detail/work-history-details";
import WorkHistoryDetail from "../work-history-detail/WorkHistoryDetail";
import { Timeline, Text } from "@mantine/core";

function WorkHistorySection() {
  return (
    <Section title="Work History">
      <Timeline color="altText" active={4} bulletSize={40} lineWidth={4}>
        {jobs.map((job, index) => (
          <Timeline.Item bullet={<Text size="xs" fw="700" c="white">{job.initials}</Text>}>
            <WorkHistoryDetail key={index} job={job} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}

export default WorkHistorySection;
