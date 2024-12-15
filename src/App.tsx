import { Box, Group, Modal, SimpleGrid, Stack, Title } from "@mantine/core";
import Layout from "./components/layout/Layout";

import WorkHistorySection from "./features/work-history/work-history-section/WorkHistorySection";
import EducationSection from "./features/education/education-section/EducationSection";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import WorkSection from "./features/work/work-section/WorkSection";
import Footer from "./features/footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { Work } from "./features/work/work-detail/my-work";
import TechDetail from "./features/technologies/tech-detail/TechDetail";
function App() {
  const [workOpened, { open: openWork, close: closeWork }] =
    useDisclosure(false);

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const openWorkHandler = (work: Work) => {
    setSelectedWork(work);
    openWork();
  };

  return (
    <Layout>
      <Modal opened={workOpened} onClose={closeWork} centered size="xl">
        <SimpleGrid cols={2}>
          <Carousel withIndicators height={400}>
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
          </Carousel>
          <Stack gap={4}>
            <Title>{selectedWork?.name}</Title>
            <Title>{selectedWork?.description}</Title>
            <Group>
              {selectedWork?.technologies.map((tech) => (
                <TechDetail technology={tech} />
              ))}
            </Group>
          </Stack>
        </SimpleGrid>
      </Modal>
      <SimpleGrid cols={2} px={32}>
        <Box pos="relative">
          <Hero />
        </Box>

        <Stack gap={1}>
          <About />
          <WorkHistorySection />
          <EducationSection />
          <WorkSection onOpen={openWorkHandler} />
        </Stack>
      </SimpleGrid>
      <Footer />
    </Layout>
  );
}

export default App;
