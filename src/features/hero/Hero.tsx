import { Box, Button, Image, Text, Title } from "@mantine/core";
import MeLight from "@/assets/me-light.png";
import MeDark from "@/assets/me-dark.png";
import { useMediaQuery } from "@mantine/hooks";
import MyTechnologies from "../technologies/my-technologies/MyTechnologies";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isLightMode } = useGetColorTheme();

  return (
    <Box
      style={{
        position: isDesktop ? "fixed" : "relative",
        width: "300px",
        zIndex: 10,
      }}
    >
      <Image src={isLightMode ? MeLight : MeDark} w={200} radius="lg" />
      <Title size="3rem" fw={400} mt={16} c="text">
        I'm Cody Stine
      </Title>
      <Text size="lg" c="text" w={300}>
        Crafting seamless experiences, from pixels to pipelines
      </Text>
      <Button
        mt={16}
        variant="outline"
        color="inverse"
        radius="md"
        component="a"
        href="/resume.pdf"
        download="resume.pdf"
      >
        Resume
      </Button>
      <MyTechnologies />
    </Box>
  );
}

export default Hero;
