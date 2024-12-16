import ThemeToggle from "@/components/theme/ThemeToggle";
import {
  Burger,
  Button,
  Container,
  Group,
  Title,
  Text,
  Flex,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MoveUpRight } from "lucide-react";

type HeaderNavProps = {
  onToggle: () => void;
  opened: boolean;
};

function HeaderNav({ onToggle, opened }: HeaderNavProps) {
  const isDesktop = useMediaQuery("(min-width: 48em)");

  return (
    <Container size="xl" py={24} px={16}>
      <Group justify="space-between" style={{ flex: 1 }}>
        <Title size="xl" mr={60} c="text">
          Co.dy
        </Title>
        {isDesktop ? (
          <Flex justify="space-between">
            <Group gap={16}>
              <Text>Work History</Text>
              <Text>Projects</Text>
              <Text>Contact</Text>
            </Group>
            <Group ml="xl" gap={8} visibleFrom="xs">
              <Button
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
