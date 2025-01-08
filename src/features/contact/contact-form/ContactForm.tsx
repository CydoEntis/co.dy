import { Flex, TextInput, Button, Text, Box, Stack } from "@mantine/core";
import RichTextEditor from "../rich-text-editor/RichTextEditor";
import { useForm } from "@mantine/form";
import emailjs from "emailjs-com";
import { MoveUpRight } from "lucide-react";
import { notifications } from "@mantine/notifications";

type ContactFormProps = {
  onContactClose: () => void;
};

function ContactForm({ onContactClose }: ContactFormProps) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      content: "",
    },
    validate: {
      firstName: (value) => (value ? null : "First name is required"),
      lastName: (value) => (value ? null : "Last name is required"),
      email: (value) => (value ? null : "Email is required"),
      subject: (value) => (value ? null : "Subject is required"),
      content: (value) => (value ? null : "Content is required"),
    },
  });

  const handleEditorChange = (editorContent: string) => {
    form.setFieldValue("content", editorContent);
  };

  const handleSubmit = async (values: typeof form.values) => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;

    const templateParams = {
      from_name: `${values.firstName} ${values.lastName}`,
      from_email: values.email,
      subject: values.subject,
      message: values.content,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      onContactClose();
      notifications.show({
        title: "Message sent",
        message: "Your message has been sent successfully.",
        color: "lime",
        position: "top-right",
      });
    } catch (error) {
      const e = error;
      notifications.show({
        title: "Message Failed",
        message: "Your message could not be sent.",
        color: "red",
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap={16}>
        <Flex w="100%" gap="md">
          <Box w="50%">
            <TextInput
              placeholder="First Name"
              {...form.getInputProps("firstName")}
            />
          </Box>

          <Box w="50%">
            <TextInput
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
            />
          </Box>
        </Flex>

        <div>
          <TextInput placeholder="Email" {...form.getInputProps("email")} />
        </div>

        <div>
          <TextInput placeholder="Subject" {...form.getInputProps("subject")} />
        </div>
        <div>
          <RichTextEditor
            value={form.values.content}
            onChange={handleEditorChange}
          />
          {form.errors.content && (
            <Text c="red.7" size="xs">
              {form.errors.content}
            </Text>
          )}
        </div>

        <Button
          variant="filled"
          bg="inverse"
          c="primary"
          type="submit"
          rightSection={<MoveUpRight size={18} />}
        >
          Send
        </Button>
      </Stack>
    </form>
  );
}

export default ContactForm;
