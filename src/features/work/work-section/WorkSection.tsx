import Section from "@/components/section/Section";
import { Work, works } from "../work-detail/my-work";
import WorkDetail from "../work-detail/WorkDetail";
import WorkModal from "../work-modal/WorkModal";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

function WorkSection() {
  const [workOpened, { open: openWork, close: closeWork }] =
    useDisclosure(false);

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const openWorkHandler = (work: Work) => {
    setSelectedWork(work);
    openWork();
  };

  return (
    <>
      <WorkModal
        opened={workOpened}
        onClose={closeWork}
        selectedWork={selectedWork}
      />
      <Section id="my-work-section" title="My Work">
        {works.map((work, index) => (
          <WorkDetail work={work} key={index} onClick={openWorkHandler} />
        ))}
      </Section>
    </>
  );
}

export default WorkSection;
