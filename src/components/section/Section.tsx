import { Divider, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";
import useGetColorTheme from "../theme/hooks/useGetColorScheme";

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Stack pt={64}>
      <Divider style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }} />
      <Title fw="400" size="xl">
        {title}
      </Title>
      {children}
    </Stack>
  );
}

export default Section;
