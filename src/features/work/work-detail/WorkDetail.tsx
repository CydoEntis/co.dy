import { Card, Text, Image, Title } from "@mantine/core";
import { Work } from "./my-work";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

type WorkProps = {
  work: Work;
};

function WorkDetail({ work }: WorkProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Card
      padding="xs"
      radius="md"
      withBorder
      bg="secondary"
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Image src={work.image} height={240} alt="Norway" radius="md" />
      <Title size="xl" py={8} fw={700}>
        {work.name}
      </Title>

      <Text size="sm" c="text">
        {work.description}
      </Text>
    </Card>
  );
}

export default WorkDetail;
