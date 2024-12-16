import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Anchor, Button, Drawer, Flex, Group } from "@mantine/core";
import { MoveUpRight } from "lucide-react";
import useNavigation from "../hooks/useNavigation";
import Link from "../Link";

type MobileNavProps = {
  opened: boolean;
  onClose: () => void;
};

function MobileNav({ opened, onClose }: MobileNavProps) {
  const { isLightMode } = useGetColorTheme();
  const sectionIds = ["about-section", "my-work-section"];
  const { activeSection, activeRouteHandler } = useNavigation({
    sectionIds,
    onClose,
  });

  return (
    <Drawer
      bg="primary"
      w="100%"
      position="top"
      h={100}
      opened={opened}
      title="Co.dy"
      onClose={onClose}
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
  );
}

export default MobileNav;
