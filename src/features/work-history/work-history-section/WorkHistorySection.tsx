import Section from "@/components/section/Section";
import { jobs } from "../work-history-detail/work-history-details";
import WorkHistoryDetail from "../work-history-detail/WorkHistoryDetail";

function WorkHistorySection() {
  return (
    <Section title="Work History">
      {jobs.map((job) => (
        <WorkHistoryDetail job={job} />
      ))}
    </Section>
  );
}

export default WorkHistorySection;
