import {
  Box,

  SimpleGrid,
  Stack,
} from "@mantine/core";
import Layout from "./components/layout/Layout";

import WorkHistorySection from "./features/work-history/work-history-section/WorkHistorySection";
import EducationSection from "./features/education/education-section/EducationSection";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import WorkSection from "./features/work/work-section/WorkSection";
import Footer from "./features/footer/Footer";
import ContactModal from "./features/contact/contact-modal/ContactModal";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [contactOpened, { open: openContactForm, close: closeContactForm }] =
    useDisclosure(false);

  return (
    <Layout onOpenContact={openContactForm}>
      <ContactModal
        contactOpened={contactOpened}
        onContactClose={closeContactForm}
      />
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
      <Footer onOpenContact={openContactForm}/>
    </Layout>
  );
}

export default App;
