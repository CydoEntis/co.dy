import ThemeToggle from "@/components/theme/ThemeToggle";
import { Burger, Container, Group, Text } from "@mantine/core";

type HeaderNavProps = {
  onToggle: () => void;
  opened: boolean;
};

function HeaderNav({ onToggle, opened }: HeaderNavProps) {
  return (
    <Container size="xl">
      <Burger opened={opened} onClick={onToggle} hiddenFrom="xs" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <Text>Co.dy</Text>

        <Group ml="xl" gap={8} visibleFrom="xs">
          <p>Tesrt</p>
          <p>Tesrt</p>
          <p>Tesrt</p>
          <p>Tesrt</p>
          <ThemeToggle />
        </Group>
      </Group>
    </Container>
  );
}

export default HeaderNav;
