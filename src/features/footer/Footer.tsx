import {
  Image,
  Flex,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Button,
} from "@mantine/core";
import MeLight from "@/assets/me-light.png";
import MeDark from "@/assets/me-dark.png";
import { MoveUpRight } from "lucide-react";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";
import useNavigation from "@/components/navigation/hooks/useNavigation";
import Link from "@/components/navigation/Link";
import { useMediaQuery } from "@mantine/hooks";

type FooterProps = {
  onOpenContact: () => void;
};

function Footer({ onOpenContact }: FooterProps) {
  const { isLightMode } = useGetColorTheme();
  const isDesktop = useMediaQuery("(min-width: 485px)");

  const sectionIds = ["about-section", "my-work-section"];
  const { activeSection, activeRouteHandler } = useNavigation({
    sectionIds,
  });

  return (
    <Paper
      mt={32}
      bg="secondary"
      p={{ base: 16, md: 32 }}
      radius="md"
      withBorder
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      {isDesktop ? (
        <Flex justify="space-between" align="center">
          <Group>
            <Image src={isLightMode ? MeLight : MeDark} w={80} radius="md" />
            <Stack gap={2}>
              <Title size="1.5rem" c="text">
                I'm Cody Stine
              </Title>
              <Text>
                Crafting seamless experiences, from pixels to pipelines
              </Text>
            </Stack>
          </Group>

          <Group>
            <Link
              text="About"
              active={activeSection!}
              onActive={activeRouteHandler}
              sectionId={sectionIds[0]}
            />
            <Link
              text="My Work"
              active={activeSection!}
              onActive={activeRouteHandler}
              sectionId={sectionIds[1]}
            />
          </Group>

          <Button
            onClick={onOpenContact}
            rightSection={<MoveUpRight size={18} />}
            variant="filled"
            bg="inverse"
            c="primary"
            radius="md"
          >
            Lets Talk
          </Button>
        </Flex>
      ) : (
        <Stack>
          <Flex gap={8} w="100%" justify="space-evenly">
            <Image src={isLightMode ? MeLight : MeDark} w={80} radius="md" />
            <Stack gap={2}>
              <Title size="1.5rem" c="text">
                I'm Cody Stine
              </Title>
              <Text>
                Crafting seamless experiences, from pixels to pipelines
              </Text>
            </Stack>
          </Flex>

          <Flex gap={8} w="100%" justify="space-evenly" align="center">
            <Link
              text="About"
              active={activeSection!}
              onActive={activeRouteHandler}
              sectionId={sectionIds[0]}
            />
            <Link
              text="My Work"
              active={activeSection!}
              onActive={activeRouteHandler}
              sectionId={sectionIds[1]}
            />
            <Button
              onClick={onOpenContact}
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
      )}
    </Paper>
  );
}

export default Footer;
