import {
  AppShell,
  Button,
  Container,
  Box,
  Group,
  Stack,
  Text,
  NavLink,
  Anchor,
  Drawer,
  Dialog,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../navigation/header/Header";
import { ReactNode } from "react";
import { Folder, MoveUpRight, User2 } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import useGetColorTheme from "../theme/hooks/useGetColorScheme";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  const { isLightMode } = useGetColorTheme();
  const [opened, { close, toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 80 }}
      // navbar={{
      //   width: 300,
      //   breakpoint: "62em",
      //   collapsed: { mobile: !opened },
      // }}
      padding="md"
    >
      <Header onToggle={toggle} opened={opened} />

      {/* <Dialog
        opened={opened}
        withCloseButton={false}
        onClose={close}
        position={{ top: 80 }}
        w="100%"
      >
        <Flex justify="space-between">
          <Button
            rightSection={<User2 size={18} />}
            variant="outline"
            radius="md"
            color="inverse"
          >
            About
          </Button>
          <Button
            rightSection={<Folder size={18} />}
            variant="outline"
            radius="md"
            color="inverse"
          >
            Work
          </Button>
          <Group gap={8} w="100%">
            <Button
              size="md"
              rightSection={<MoveUpRight size={22} />}
              variant="outline"
              radius="md"
              color="inverse"
            >
              Lets Talk
            </Button>
            <Box pos="absolute" right={5} bottom={5}>
              <ThemeToggle size={32} />
            </Box>
          </Group>
        </Flex>
      </Dialog> */}

      {/* <AppShell.Navbar hiddenFrom="sm" p="md" bg="primary" position="top">

      </AppShell.Navbar> */}

      <AppShell.Main px={0} bg={"primary"}>
        <Container size="lg">
          <Drawer
            bg="primary"
            w="100%"
            position="top"
            h={100}
            opened={opened}
            title="Co.dy"
            onClose={close}
            styles={{
              header: {
                background: isLightMode ? "#FFFBF5" : "#10171F",
              },
              content: {
                height: 120,
                background: isLightMode ? "#FFFBF5" : "#10171F",
              },
            }}
          >
            <Flex w="100%" justify="space-between">
              <Group>
                <Anchor
                  underline="hover"
                  c="inverse"
                  onClick={() => {
                    document.getElementById("about-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    close();
                  }}
                >
                  About
                </Anchor>
                <Anchor
                  underline="hover"
                  c="inverse"
                  onClick={() => {
                    document.getElementById("my-work-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    close();
                  }}
                >
                  My Work
                </Anchor>
              </Group>
              <Group>
                <ThemeToggle />
                <Button
                  size="sm"
                  rightSection={<MoveUpRight size={22} />}
                  variant="outline"
                  radius="md"
                  color="inverse"
                >
                  Lets Talk
                </Button>
              </Group>
            </Flex>
          </Drawer>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
