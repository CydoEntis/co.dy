import {
  Box,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Image,
  Button,
} from "@mantine/core";
import Layout from "./components/layout/Layout";

import WorkHistorySection from "./features/work-history/work-history-section/WorkHistorySection";
import EducationSection from "./features/education/education-section/EducationSection";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import WorkSection from "./features/work/work-section/WorkSection";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <Layout>
      <SimpleGrid cols={{ base: 1, sm: 2 }} px={{ base: 8, sm: 8, lg: 32 }}>
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
      <Footer />
    </Layout>
  );
}

export default App;
