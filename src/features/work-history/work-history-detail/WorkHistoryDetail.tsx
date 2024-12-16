import {
  Avatar,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";
import useGetColorTheme from "../../../components/theme/hooks/useGetColorScheme";
import { useMediaQuery } from "@mantine/hooks";
import { Building, Building2, Calendar } from "lucide-react";
import { JobDetails } from "./work-history-details";

type JobDetailProps = {
  job: JobDetails;
};

function JobDetail({ job }: JobDetailProps) {
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
              <Building2 />
            </Text>
          </Avatar>
          <Stack gap={0}>
            <Text size="sm">{job.jobTitle}</Text>
            <Text fw="700" size="sm">
              {job.company}
            </Text>
          </Stack>
        </Group>
        <Text size="xs" mt={4} c="dimmed">
          {job.startDate} - {job.endDate}
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
    //     <Flex justify="space-between" align="center">
    //       <Group gap={16}>
    // <Avatar bg="primary" radius="xl">
    //   <Text size="xs" fw="700">
    //     <Building2 />
    //   </Text>
    // </Avatar>
    //         <Stack gap={0}>
    //           <Text size="sm">{job.jobTitle}</Text>
    //           <Text fw="700" size="sm">
    //             {job.company}
    //           </Text>
    //         </Stack>
    //       </Group>
    //       <Stack c="altText" gap={1}>
    //         <Text size="xs">{job.startDate}</Text>
    //         <Divider my="xs" label="to" labelPosition="center" p={0}/>
    //         <Text size="xs">{job.endDate}</Text>
    //       </Stack>
    //     </Flex>
    //     <Stack gap={1}>
    //       <Group gap={16}>
    //         <Avatar bg="primary" radius="xl">
    //           <Text size="xs" fw="700">
    //             <Building2 />
    //           </Text>
    //         </Avatar>
    //         <Stack gap={0}>
    //           <Text size="sm">{job.jobTitle}</Text>
    //           <Text fw="700" size="sm">
    //             {job.company}
    //           </Text>
    //         </Stack>
    //       </Group>

    //       <Group c="altText" gap={8}>
    //         <Avatar bg="primary" radius="xl">
    //           <Calendar size={18} />
    //         </Avatar>
    //         <Text size="xs">
    //           {job.startDate} - {job.endDate}
    //         </Text>
    //       </Group>
    //     </Stack>
    //   )}
    // </Paper>
  );
}

export default JobDetail;
