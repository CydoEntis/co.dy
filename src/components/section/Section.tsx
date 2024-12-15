import { Divider, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import useGetColorTheme from "../theme/hooks/useGetColorScheme";

type SectionProps = {
  title: string;
  children: ReactNode;
  withDivder?: boolean;
  spacing?: number;
};

function Section({ title, children, withDivder = true, spacing = 64 }: SectionProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Stack pt={spacing}>
      {withDivder && <Divider color={isLightMode ? "#E9E0D9" : "#3A4D63"} />}
      <Title fw="400" size="xl">
        {title}
      </Title>
      {children}
    </Stack>
  );
}

export default Section;
