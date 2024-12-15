import { AppShell } from "@mantine/core";
import HeaderNav from "./HeaderNav";

type HeaderProps = {
  onToggle: () => void;
  opened: boolean;
};
function Header({ onToggle, opened }: HeaderProps) {
  return (
    <AppShell.Header withBorder={false} bg="primary">
      <HeaderNav onToggle={onToggle} opened={opened} />
    </AppShell.Header>
  );
}

export default Header;
