import { Box, SimpleGrid, Stack } from "@mantine/core";
import Layout from "./components/layout/Layout";

import WorkHistorySection from "./features/work-history/work-history-section/WorkHistorySection";
import EducationSection from "./features/education/education-section/EducationSection";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import WorkSection from "./features/work/work-section/WorkSection";
function App() {
  return (
    <Layout>
      <SimpleGrid cols={2} px={32}>
        <Box pos="relative">
          <Hero />
        </Box>

        <Stack gap={1}>
          <About />
          <WorkHistorySection />
          <EducationSection />
          <WorkSection />
        </Stack>
      </SimpleGrid>
    </Layout>
  );
}

export default App;
