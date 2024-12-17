import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../navigation/header/Header";
import { ReactNode } from "react";

import MobileNav from "../navigation/mobile/MobileNav";

type LayoutProps = {
  onOpenContact: () => void;
  children: ReactNode;
};
function Layout({ children, onOpenContact }: LayoutProps) {
  const [opened, { close, toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 80 }} padding="md">
      <Header onToggle={toggle} opened={opened} onOpenContact={onOpenContact} />

      <MobileNav
        opened={opened}
        onClose={close}
        onOpenContact={onOpenContact}
      />

      <AppShell.Main px={0} bg={"primary"}>
        <Container size="lg">{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
