import { Anchor } from "@mantine/core";

type LinkProps = {
  onActive: (sectionId: string) => void;
  text: string;
  sectionId: string;
  active: string;
};

function Link({ onActive, text, sectionId, active }: LinkProps) {
    console.log(active);
    console.log(sectionId)
  return (
    <Anchor
      underline="hover"
      onClick={() => onActive(sectionId)}
      c={(active === sectionId) ? "altText" : "inverse"}
    >
      {text}
    </Anchor>
  );
}

export default Link;
