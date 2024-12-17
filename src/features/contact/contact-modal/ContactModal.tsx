import { Modal, Title } from "@mantine/core";
import ContactForm from "../contact-form/ContactForm";

type ContactModalProps = {
  contactOpened: boolean;
  onContactClose: () => void;
};

function ContactModal({ contactOpened, onContactClose }: ContactModalProps) {
  return (
    <Modal size="xl" opened={contactOpened} onClose={onContactClose} title={<Title size="1.75rem">Let's Talk</Title>}>
      <ContactForm />
    </Modal>
  );
}

export default ContactModal;
