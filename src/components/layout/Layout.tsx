import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../navigation/header/Header";
import { ReactNode } from "react";

import MobileNav from "../navigation/mobile/MobileNav";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  const [opened, { close, toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 80 }} padding="md">
      <Header onToggle={toggle} opened={opened} />

      <MobileNav opened={opened} onClose={close} />

      <AppShell.Main px={0} bg={"primary"}>
        <Container size="lg">{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
