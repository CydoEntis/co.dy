import ThemeToggle from "@/components/theme/ThemeToggle";
import { Burger, Button, Container, Group, Title } from "@mantine/core";
import { MoveUpRight } from "lucide-react";

type HeaderNavProps = {
  onToggle: () => void;
  opened: boolean;
};

function HeaderNav({ onToggle, opened }: HeaderNavProps) {
  return (
    <Container size="xl">
      <Burger opened={opened} onClick={onToggle} hiddenFrom="xs" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <Group>
          <Title size="xl">Co.dy</Title>
          <p>Tesrt</p>
          <p>Tesrt</p>
          <p>Tesrt</p>
          <p>Tesrt</p>
        </Group>

        <Group ml="xl" gap={8} visibleFrom="xs">
          <Button rightSection={<MoveUpRight size={18} />} variant="outline" radius="xl" color="grey">Lets Talk</Button>
          <ThemeToggle />
        </Group>
      </Group>
    </Container>
  );
}

export default HeaderNav;
