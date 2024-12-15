import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../navigation/header/Header";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
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
      <Header onToggle={toggle} opened={opened} />
      <AppShell.Navbar hiddenFrom="sm" p="md">
        Navbar
      </AppShell.Navbar>

      <AppShell.Main px={0} bg={"primary"}>
        <Container size="xl" style={{ border: "2px solid red" }}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
