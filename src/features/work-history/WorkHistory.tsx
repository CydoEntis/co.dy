import { Building } from "lucide-react";
import { Avatar, Flex, Group, Paper, Stack, Text } from "@mantine/core";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";
import { JobDetails } from "./work-history";

type WorkHistoryProps = {
  job: JobDetails;
};

function WorkHistory({ job }: WorkHistoryProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      bg="secondary"
      withBorder
      px={16}
      py={8}
      radius="xl"
      //   style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
      className={isLightMode ? "card-border-light" : "card-border-dark"}
    >
      <Flex justify="space-between" align="center">
        <Group gap={16}>
          <Avatar bg="primary" radius="xl">
            <Building size={18} />
          </Avatar>
          <Stack gap={0}>
            <Text>{job.jobTitle}</Text>
            <Text fw="700">{job.company}</Text>
          </Stack>
        </Group>

        <Text size="xs" c="altText">
          {job.startDate} - {job.endDate}
        </Text>
      </Flex>
    </Paper>
  );
}

export default WorkHistory;
