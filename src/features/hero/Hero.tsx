import { Box, Button, Image, Text, Title } from "@mantine/core";
import Me from "@/assets/me.png";
import { useMediaQuery } from "@mantine/hooks";
import MyTechnologies from "../technologies/my-technologies/MyTechnologies";

function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      style={{
        position: isDesktop ? "fixed" : "relative",
        width: "300px",
        zIndex: 10,
      }}
    >
      <Image src={Me} w={200} radius="lg" />
      <Title size="3rem" fw={400} mt={16} c="text">
        I'm Cody Stine
      </Title>
      <Text size="lg" c="text" w={320}>
        Crafting seamless experiences, from pixels to pipelines
      </Text>
      <Button mt={16} variant="outline" color="inverse" radius="xl">
        Resume
      </Button>
      <MyTechnologies />
    </Box>
  );
}

export default Hero;
