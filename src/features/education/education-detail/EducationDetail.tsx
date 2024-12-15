import { Building } from "lucide-react";
import { Avatar, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import { EduDetails } from "./education-details";
import useGetColorTheme from "../../../components/theme/hooks/useGetColorScheme";

type EducationDetailProps = {
  education: EduDetails;
};

function EducationDetail({ education }: EducationDetailProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      bg="secondary"
      withBorder
      px={16}
      py={8}
      radius="xl"
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Flex justify="space-between" align="center">
        <Group gap={16}>
          <Avatar bg="primary" radius="xl">
            <Building size={18} />
          </Avatar>
          <Stack gap={0}>
            <Text>{education.school}</Text>
            <Text fw="700">{education.degree}</Text>
          </Stack>
        </Group>

        <Text size="xs" c="altText">
          {education.startDate} - {education.endDate}
        </Text>
      </Flex>
    </Paper>
  );
}

export default EducationDetail;
