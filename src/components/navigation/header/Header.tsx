import { AppShell } from "@mantine/core";
import HeaderNav from "./HeaderNav";

type HeaderProps = {
  onToggle: () => void;
  onOpenContact: () => void;
  opened: boolean;
};
function Header({ onToggle, opened, onOpenContact }: HeaderProps) {
  return (
    <AppShell.Header withBorder={false} bg="primary">
      <HeaderNav onToggle={onToggle} opened={opened} onOpenContact={onOpenContact}/>
    </AppShell.Header>
  );
}

export default Header;
