import { Card, Text, Image, Title } from "@mantine/core";
import { Work } from "./my-work";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

type WorkProps = {
  work: Work;
  onClick: (work: Work) => void;
};

function WorkDetail({ work, onClick }: WorkProps) {
  const { isLightMode } = useGetColorTheme();

  // Choose images based on the theme
  const images = isLightMode ? work.imagesLight : work.imagesDark;

  return (
    <Card
      padding="xs"
      radius="md"
      withBorder
      bg="secondary"
      className="card-container"
      style={{
        borderColor: isLightMode ? "#E9E0D9" : "#3A4D63",
      }}
      onClick={() => onClick(work)}
      h={450}
    >
      <Image
        src={images[0]}
        height={280}
        alt={`${work.name} preview`}
        radius="md"
      />
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
