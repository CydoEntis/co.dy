export type Work = {
  image: string;
  name: string;
  description: string;
  // technologies: string[];
  onClick: () => void;
};

export const works = [
  {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    name: "QuestBound",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    onClick: () => console.log("clicked"),
  },
  {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    name: "Task Garden",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    onClick: () => console.log("clicked"),
  },
  {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    name: "TypeCasters",
    description:
      "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
    onClick: () => console.log("clicked"),
  },
];
