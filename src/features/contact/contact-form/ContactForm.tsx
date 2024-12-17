import { Flex, TextInput, Button, Text, Box, Stack } from "@mantine/core";
import RichTextEditor from "../rich-text-editor/RichTextEditor";
import { useForm } from "@mantine/form";
import emailjs from "emailjs-com";
import { MoveUpRight } from "lucide-react";

type Props = {};

function ContactForm({}: Props) {
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
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your message. Please try again.");
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
