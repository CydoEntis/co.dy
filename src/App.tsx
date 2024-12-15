import {
  AppShell,
  Burger,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Container >
          <Group h="100%">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="xs"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Text>Co.dy</Text>

              <Group ml="xl" gap={8} visibleFrom="xs">
                <p>Tesrt</p>
                <p>Tesrt</p>
                <p>Tesrt</p>
                <p>Tesrt</p>
              </Group>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="sm" p="md">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main px={0}>
        <Container style={{ border: "2px solid red" }}>
          <Title>Hello??</Title>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
