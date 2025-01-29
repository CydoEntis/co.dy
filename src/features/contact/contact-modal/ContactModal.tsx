import { Modal } from "@mantine/core";
import ContactForm from "../contact-form/ContactForm";

type ContactModalProps = {
  contactOpened: boolean;
  onContactClose: () => void;
};

function ContactModal({ contactOpened, onContactClose }: ContactModalProps) {
  return (
    <Modal
      size="xl"
      opened={contactOpened}
      onClose={onContactClose}
      title="Let's Talk"
    >
      <ContactForm onContactClose={onContactClose} />
    </Modal>
  );
}

export default ContactModal;
