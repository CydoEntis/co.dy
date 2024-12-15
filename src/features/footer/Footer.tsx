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
import Me from "@/assets/me.png";
import { MoveUpRight } from "lucide-react";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

function Footer() {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      mt={32}
      bg="secondary"
      p={32}
      radius="10rem"
      withBorder
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Flex justify="space-between" align="center">
        <Group>
          <Image src={Me} w={80} radius="100%" />
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
          radius="xl"
        >
          Lets Talk
        </Button>
      </Flex>
    </Paper>
  );
}

export default Footer;
