import { faker } from "@faker-js/faker";
import { Badge, MessageModel, User } from "./models";

export const generateMessage = (options?: {
  content?: string;
  author?: User;
}): MessageModel => {
  return {
    id: faker.datatype.uuid(),
    author: options?.author ?? generateUser(),
    content: options?.content ?? generateRandomSentence(),
  };
};

export const generateUser = (): User => {
  return {
    rgbColor: faker.internet.color(250, 250, 250),
    username: faker.internet.userName(),
    badges: generateRandomBadges(),
  };
};

const generateRandomBadges = (): Badge[] => {
  const badge = (badge: Badge, prob: number) =>
    faker.helpers.maybe(() => badge, { probability: prob });

  return [
    badge("vip", 0.1),
    badge("moderator", 0.1),
    badge("prime", 0.2),
    badge("turbo", 0.1),
  ].filter((x) => x !== undefined) as Badge[];
};

const generateRandomSentence = () => {
  const sentences: string[] = [
    "Hello! 👋🏻",
    "🤣🤣🤣🤣",
    "lol",
    "So cool! 😎",
    "I love this chat! 😍",
    "Please don't write bad words!",
    "Subscribe to Gionatha's channel!",
    "Don't forget to like and subscribe!",
    "Is anybody here ?",
    "Byeeee",
  ];

  return faker.helpers.arrayElement(sentences);
};
