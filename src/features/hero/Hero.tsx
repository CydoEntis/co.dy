import { Box, Image, Text, Title } from "@mantine/core";
import Me from "@/assets/me.png";

function Hero() {
  return (
    <Box w={320}>
      <Image src={Me} w={200} radius="lg" />
      <Title size="3rem" fw={400} mt={16} c="text">
        I'm Cody Stine
      </Title>
      <Text size="lg" c="text">
        Crafting seamless experiences, from pixels to pipelines
      </Text>
    </Box>
  );
}

export default Hero;
