import ThemeToggle from "@/components/theme/ThemeToggle";
import { Burger, Button, Container, Group, Title, Text } from "@mantine/core";
import { MoveUpRight } from "lucide-react";

type HeaderNavProps = {
  onToggle: () => void;
  opened: boolean;
};

function HeaderNav({ onToggle, opened }: HeaderNavProps) {
  return (
    <Container size="xl" py={24} px={16}>
      <Burger opened={opened} onClick={onToggle} hiddenFrom="xs" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <Group gap={16}>
          <Title size="xl" mr={60} c="text">Co.dy</Title>
          <Text>Work History</Text>
          <Text>Projects</Text>
          <Text>Contact</Text>
        </Group>

        <Group ml="xl" gap={8} visibleFrom="xs">
          <Button rightSection={<MoveUpRight size={18} />} variant="outline" radius="md" color="inverse">Lets Talk</Button>
          <ThemeToggle />
        </Group>
      </Group>
    </Container>
  );
}

export default HeaderNav;
