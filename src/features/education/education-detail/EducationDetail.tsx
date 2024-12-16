import { Avatar, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import { EduDetails } from "./education-details";
import useGetColorTheme from "../../../components/theme/hooks/useGetColorScheme";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar } from "lucide-react";

type EducationDetailProps = {
  education: EduDetails;
};

function EducationDetail({ education }: EducationDetailProps) {
  const { isLightMode } = useGetColorTheme();
  const isDesktop = useMediaQuery("(min-width: 485px)");

  return (
    <Paper
      bg="secondary"
      withBorder
      px={16}
      py={8}
      radius="md"
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Flex justify="space-between" align="center">
        <Group gap={16}>
          <Avatar bg="primary" radius="xl">
            <Text size="xs" fw="700">
              <Text size="xs" fw="700">
                {education.initials}
              </Text>
            </Text>
          </Avatar>
          <Stack gap={0}>
            <Text size="sm">{education.school}</Text>
            <Text fw="700" size="sm">
              {education.degree}
            </Text>
          </Stack>
        </Group>
        <Text size="xs" mt={4} c="dimmed">
          {education.startDate} - {education.endDate}
        </Text>
      </Flex>
    </Paper>

    // <Paper
    //   bg="secondary"
    //   withBorder
    //   px={16}
    //   py={8}
    //   radius={isDesktop ? "xl" : "md"}
    //   style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    // >
    //   {isDesktop ? (
    //     <Flex justify="space-between" align="center">
    //       <Group gap={16}>
    //         <Avatar bg="primary" radius="xl">
    //           <Text size="xs" fw="700">
    //             {education.initials}
    //           </Text>
    //         </Avatar>
    //         <Stack gap={0}>
    //           <Text size="sm">{education.school}</Text>
    //           <Text fw="700" size="sm">
    //             {education.degree}
    //           </Text>
    //         </Stack>
    //       </Group>
    //       <Flex c="altText">
    //         <Text size="xs">
    //           {education.startDate} - {education.endDate}
    //         </Text>
    //       </Flex>
    //     </Flex>
    //   ) : (
    //     <Stack gap={1}>
    //       <Group gap={16}>
    //         <Avatar bg="primary" radius="xl">
    //           <Text size="xs" fw="700">
    //             {education.initials}
    //           </Text>
    //         </Avatar>
    //         <Stack gap={0}>
    //           <Text size="sm">{education.school}</Text>
    //           <Text fw="700" size="sm">
    //             {education.degree}
    //           </Text>
    //         </Stack>
    //       </Group>

    //       <Group c="altText" gap={8}>
    //         <Avatar bg="primary" radius="xl">
    //           <Calendar size={18} />
    //         </Avatar>
    //         <Text size="xs">
    //           {education.startDate} - {education.endDate}
    //         </Text>
    //       </Group>
    //     </Stack>
    //   )}
    // </Paper>
  );
}

export default EducationDetail;
