import TechDetail from "@/features/technologies/tech-detail/TechDetail";
import { Carousel } from "@mantine/carousel";
import {
  Modal,
  Stack,
  Title,
  Button,
  Group,
  Text,
  Image,
  Box,
  List,
  Divider,
} from "@mantine/core";
import { Globe2, Github } from "lucide-react";
import { Work } from "../work-detail/my-work";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

type WorkModalProps = {
  selectedWork: Work | null;
  opened: boolean;
  onClose: () => void;
};

function WorkModal({ selectedWork, opened, onClose }: WorkModalProps) {
  const { isLightMode } = useGetColorTheme();

  // Choose the appropriate images based on the theme
  const images = isLightMode
    ? selectedWork?.imagesLight
    : selectedWork?.imagesDark;

  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false} size="xl">
      <Carousel>
        {images?.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image src={image} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Stack py={12}>
        <Box pt={16}>
          <Title pb={8} size="h2" order={2}>
            Technologies
          </Title>
          <Group gap={4}>
            {selectedWork?.technologies.map((tech, index) => (
              <TechDetail key={index} technology={tech} />
            ))}
          </Group>
        </Box>
        <Group gap={4}>
          <Button
            component="a"
            target="_blank"
            href={selectedWork?.liveLink}
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
            component="a"
            target="_blank"
            href={selectedWork?.frontendRepo}
            size="sm"
            variant="outline"
            radius="xl"
            color="inverse"
            leftSection={<Github size={18} />}
          >
            Frontend Repo
          </Button>
          <Button
            component="a"
            target="_blank"
            href={selectedWork?.backendRepo}
            size="sm"
            variant="outline"
            radius="xl"
            color="inverse"
            leftSection={<Github size={18} />}
          >
            Backend Repo
          </Button>
        </Group>
      </Stack>
      <Divider my={12} color="inverse"/>
      <Stack gap={12}>
        <Title c="text" order={1} size="h1">
          {selectedWork?.name}
        </Title>
        <Text c="text" size="sm">
          {selectedWork?.description}
        </Text>
        <Divider my={12} color="inverse"/>
        <Title c="text" order={2} size="h2">
          Features
        </Title>
        {selectedWork?.features.map((feature, index) => (
          <div key={index}>
            <Text>{feature.title}</Text>
            <List>
              {feature?.points.map((point, index) => (
                <List.Item key={index}>{point}</List.Item>
              ))}
            </List>
          </div>
        ))}
        <Divider my={12} color="inverse"/>
        <Title c="text" order={2} size="h2">
          Deployment
        </Title>
        <Text>{selectedWork?.deployment}</Text>
        <Divider my={12} color="inverse"/>
        <Title c="text" order={2} size="h2">
          Conclusion
        </Title>
        <Text>{selectedWork?.conclusion}</Text>
      </Stack>
    </Modal>
  );
}

export default WorkModal;
