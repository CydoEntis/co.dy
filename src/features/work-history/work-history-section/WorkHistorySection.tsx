import Section from "@/components/section/Section";
import { jobs } from "../work-history-detail/work-history-details";
import WorkHistoryDetail from "../work-history-detail/WorkHistoryDetail";
import { Timeline } from "@mantine/core";

function WorkHistorySection() {
  return (
    <Section title="Work History">
      <Timeline color="altText" active={4} bulletSize={18} lineWidth={3}>
        {jobs.map((job, index) => (
          <Timeline.Item>
            <WorkHistoryDetail key={index} job={job} />
          </Timeline.Item>
        ))}
      </Timeline>
    </Section>
  );
}

export default WorkHistorySection;
