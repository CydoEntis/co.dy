import TechDetail from "@/features/technologies/tech-detail/TechDetail";
import { Carousel } from "@mantine/carousel";
import {
  Modal,
  SimpleGrid,
  Stack,
  Title,
  Button,
  Group,
  Text,
  Image,
  Box,
} from "@mantine/core";
import { Globe2, Github } from "lucide-react";
import { Work } from "../work-detail/my-work";

type WorkModalProps = {
  selectedWork: Work | null;
  opened: boolean;
  onClose: () => void;
};

function WorkModal({ selectedWork, opened, onClose }: WorkModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      size="xl"
    >
      <SimpleGrid cols={{ xs: 1, base: 1, sm: 2 }}>
        <Stack justify="center" align="center">
          <Carousel>
            {selectedWork?.images.map((image) => (
              <Carousel.Slide>
                <Image src={image} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>
        <Stack gap={12}>
          <Title c="text" size="1.75rem">{selectedWork?.name}</Title>
          <Text c="text" size="sm">{selectedWork?.description}</Text>

          <Group gap={4}>
            <Button
              size="sm"
              radius="xl"
              variant="filled"
              bg="inverse"
              c="primary"
              leftSection={<Globe2 size={18} />}
            >
              Live Link
            </Button>
            <Button
              size="sm"
              variant="outline"
              radius="xl"
              color="inverse"
              leftSection={<Github size={18} />}
            >
              Git Repo
            </Button>
          </Group>
        </Stack>
      </SimpleGrid>
      <Box pt={16}>
        <Title pb={8} size="xl">
          Tech Used
        </Title>
        <Group gap={4}>
          {selectedWork?.technologies.map((tech) => (
            <TechDetail technology={tech} />
          ))}
        </Group>
      </Box>
    </Modal>
  );
}

export default WorkModal;
