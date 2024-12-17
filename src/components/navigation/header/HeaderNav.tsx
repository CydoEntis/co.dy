import ThemeToggle from "@/components/theme/ThemeToggle";
import { Burger, Button, Container, Group, Title, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MoveUpRight } from "lucide-react";
import useNavigation from "../hooks/useNavigation";
import Link from "../Link";

type HeaderNavProps = {
  onToggle: () => void;
  opened: boolean;
  onOpenContact: () => void;
};

function HeaderNav({ onToggle, opened, onOpenContact }: HeaderNavProps) {
  const isDesktop = useMediaQuery("(min-width: 48em)");
  const sectionIds = ["about-section", "my-work-section"];
  const { activeSection, activeRouteHandler } = useNavigation({
    sectionIds,
  });
  return (
    <Container size="xl" py={24} px={16}>
      <Group justify="space-between" style={{ flex: 1 }}>
        <Title size="xl" mr={60} c="text">
          Co.dy
        </Title>
        {isDesktop ? (
          <Flex justify="space-between">
            <Group gap={16}>
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
            <Group ml="xl" gap={8} visibleFrom="xs">
              <Button
                onClick={onOpenContact}
                rightSection={<MoveUpRight size={18} />}
                variant="outline"
                radius="md"
                color="inverse"
              >
                Lets Talk
              </Button>
              <ThemeToggle />
            </Group>
          </Flex>
        ) : null}
        <Burger opened={opened} onClick={onToggle} hiddenFrom="sm" size="sm" />
      </Group>
    </Container>
  );
}

export default HeaderNav;
