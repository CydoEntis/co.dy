import QuestPageLight from "../../../assets/quest-page-light.png";
import QuestLight from "../../../assets/quest-light.png";
import PartyPageLight from "../../../assets/party-page-light.png";
import AvatarShopLight from "../../../assets/avatar-shop-light.png";

import QuestPageDark from "../../../assets/quest-page-dark.png";
import QuestDark from "../../../assets/quest-dark.png";
import PartyPageDark from "../../../assets/party-page-dark.png";
import AvatarShopDark from "../../../assets/avatar-shop-dark.png";

export type Work = {
  imagesLight: string[];
  imagesDark: string[];
  name: string;
  description: string;
  technologies: string[];
  features: Feature[];
  deployment: string;
  conclusion: string;
  testPassword: string;
  testEmail: string;
  liveLink: string;
  frontendRepo: string;
  backendRepo: string;
};

type Feature = {
  title: string;
  points: string[];
};

export const works: Work[] = [
  {
    imagesLight: [QuestPageLight, PartyPageLight, QuestLight, AvatarShopLight],
    imagesDark: [QuestPageDark, PartyPageDark, QuestDark, AvatarShopDark],
    name: "QuestBound",
    description:
      "Questbound—a gamified, RPG-driven task and project management app that transforms productivity into an epic adventure. Team up with friends or colleagues, tackle quests, and earn rewards to unlock unique avatars and achievements. This project isn’t just another app; it’s a showcase of innovative tech, clean architecture, and a passion for creating fun, engaging user experiences.",
    technologies: [
      "React",
      "Mantine UI",
      "TypeScript",
      "TanStack Router",
      "React Query",
      "Zustand",
      "Zod",
      ".NET Core",
      "PostgreSQL",
      "EF Core",
    ],
    features: [
      {
        title: "Gamified User Experience",
        points: [
          "Complete tasks, earn experience and gold",
          "Unlock unique avatars",
        ],
      },
      {
        title: "User Authentication",
        points: ["JWT token based authentication"],
      },
      {
        title: "Task Management",
        points: [
          "Create, update, and conquer tasks effortlessly",
          "Assign tasks to team members with a few clicks.",
          "Keep track of tasks with priority tags",
        ],
      },
      {
        title: "Responsive Design",
        points: [
          "A sleek, adaptable interface for both desktop and mobile users.",
        ],
      },
    ],
    deployment: "Raspberry Pi running Ubuntu Server",
    conclusion:
      "Questbound isn’t just about managing tasks; it’s about turning your everyday to-do list into an epic quest. With a blend of gamification, robust technology, and user-focused design, it delivers a polished experience that’s as fun as it is efficient. This project is a testament to the power of creativity and technical expertise coming together to build something truly extraordinary.",
    liveLink: "https://questbound.xyz/",
    testEmail: "test@test.com",
    testPassword: "Test123*",
    frontendRepo: "https://github.com/CydoEntis/questbound-frontend",
    backendRepo: "https://github.com/CydoEntis/questbound-backend",
  },
];
