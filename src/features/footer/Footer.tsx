import {
  Image,
  Flex,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Anchor,
  Button,
} from "@mantine/core";
import MeLight from "@/assets/me-light.png";
import MeDark from "@/assets/me-dark.png";
import { MoveUpRight } from "lucide-react";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

function Footer() {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      mt={32}
      bg="secondary"
      p={{ base: 16, md: 32 }}
      radius="md"
      withBorder
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      {/* <Flex justify="space-between" align="center">
        <Group>
          <Image src={isLightMode ? MeLight : MeDark} w={80} radius="md" />
          <Stack gap={2}>
            <Title size="1.5rem" c="text">
              I'm Cody Stine
            </Title>
            <Text>Crafting seamless experiences, from pixels to pipelines</Text>
          </Stack>
        </Group>

        <Group>
          <Anchor c="inverse" underline="hover" href="#about">
            About
          </Anchor>
          <Anchor c="inverse" underline="hover" href="#work">
            My work
          </Anchor>
        </Group>

        <Button
          rightSection={<MoveUpRight size={18} />}
          variant="filled"
          bg="inverse"
          c="primary"
          radius="md"
        >
          Lets Talk
        </Button>
      </Flex> */}

      <Stack>
        <Flex gap={8} w="100%" justify="space-evenly">
          <Image src={isLightMode ? MeLight : MeDark} w={80} radius="md" />
          <Stack gap={2}>
            <Title size="1.5rem" c="text">
              I'm Cody Stine
            </Title>
            <Text>Crafting seamless experiences, from pixels to pipelines</Text>
          </Stack>
        </Flex>

        <Flex gap={8} w="100%" justify="space-evenly" align="center">
          <Anchor
            c="inverse"
            underline="hover"
            onClick={() => {
              document.getElementById("about-section")?.scrollIntoView({
                behavior: "smooth",
              });
              close();
            }}
          >
            About
          </Anchor>
          <Anchor
            c="inverse"
            underline="hover"
            onClick={() => {
              document.getElementById("my-work-section")?.scrollIntoView({
                behavior: "smooth",
              });
              close();
            }}
          >
            My work
          </Anchor>
          <Button
            rightSection={<MoveUpRight size={18} />}
            variant="filled"
            bg="inverse"
            c="primary"
            radius="md"
          >
            Lets Talk
          </Button>
        </Flex>
      </Stack>
    </Paper>
  );
}

export default Footer;
