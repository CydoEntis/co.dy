import { Technology } from "@/features/technologies/my-technologies/technologies";
export type Work = {
  images: string[];
  name: string;
  description: string;
  technologies: Technology[];
};

export const works: Work[] = [
  {
    images: [
      "https://cdn.dribbble.com/userupload/13995001/file/original-0441209f42c4e1866c8182388a0044e8.jpg?resize=1024x768&vertical=center",
      "https://cdn.dribbble.com/userupload/13995002/file/original-2c7d9ee7c6c58ff375817a7fa1e24692.jpg?resize=1024x768&vertical=center",
      "https://cdn.dribbble.com/userupload/13995003/file/original-a03c404865d3626ce8f230bee903105e.jpg?resize=1024x768&vertical=center",
    ],
    name: "QuestBound",
    description:
      "Turn your tasks into adventures with Questbound, the project management app that gamifies productivity. Complete quests solo or with friends, earn XP, and level up as you tackle your goals. Work feels like an adventure with Questbound.",
    technologies: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "TanStack Router",
      },
      {
        id: 4,
        name: "TanStack Query",
      },
      {
        id: 5,
        name: "Zustand",
      },
      {
        id: 6,
        name: ".Net Core",
      },
      {
        id: 7,
        name: "MSSQL",
      },
    ],
  },
  {
    images: [
      "https://cdn.dribbble.com/userupload/4678156/file/original-eb0be0cfb7164a1ddafa3edf00a0dcb2.png?resize=1905x1429&vertical=center",
      "https://cdn.dribbble.com/userupload/4678159/file/original-888015583286d13c774ee46a86b42ca5.png?resize=1024x768&vertical=center",
      "https://cdn.dribbble.com/userupload/4678158/file/original-085288901981f231069f732b560c93f8.png?resize=1024x768&vertical=center",
    ],
    name: "Task Garden",
    description:
      "Grow your productivity with TaskGarden, the to-do app where completed tasks help your virtual garden thrive. Earn seeds, unlock milestones, and cultivate your dream garden as you accomplish your goals.",
    technologies: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "TanStack Router",
      },
      {
        id: 4,
        name: "TanStack Query",
      },
      {
        id: 5,
        name: "Zustand",
      },
      {
        id: 6,
        name: ".Net Core",
      },
      {
        id: 7,
        name: "MSSQL",
      },
    ],
  },
  {
    images: [
      "https://cdn.dribbble.com/userupload/9876880/file/original-c943b01d8a56b32573eddb90f8e594b1.png?resize=1905x1429&vertical=center",
      "https://cdn.dribbble.com/userupload/9876884/file/original-5684cb22caab7167028370cd1b596837.png?resize=1905x1428&vertical=center",
      "https://cdn.dribbble.com/userupload/9876882/file/original-88fa3d6c92b763692542eb75a0158dae.png?resize=1024x768&vertical=center",
    ],
    name: "TypeCasters",
    description:
      "Type your way to victory in TypeCasters, a competitive typing game where words are spells. Battle opponents, unlock spellbooks, and improve your typing skills in this fast-paced magical showdown.",
    technologies: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "TypeScript",
      },
      {
        id: 3,
        name: "TanStack Router",
      },
      {
        id: 4,
        name: "TanStack Query",
      },
      {
        id: 5,
        name: "Zustand",
      },
      {
        id: 6,
        name: ".Net Core",
      },
      {
        id: 7,
        name: "MSSQL",
      },
    ],
  },
];
