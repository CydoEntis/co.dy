import { Divider, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import useGetColorTheme from "../theme/hooks/useGetColorScheme";

type SectionProps = {
  title?: string;
  children: ReactNode;
  withDivider?: boolean;
  spacing?: number;
  id?: string;
};

function Section({
  id,
  title,
  children,
  withDivider = true,
  spacing = 64,
}: SectionProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Stack id={id} pt={spacing}>
      {withDivider && <Divider color={isLightMode ? "#E9E0D9" : "#3A4D63"} />}
      <Title fw="400" size="1.25rem">
        {title}
      </Title>
      {children}
    </Stack>
  );
}

export default Section;
