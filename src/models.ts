export type Badge = "moderator" | "vip" | "prime" | "turbo";

export interface User {
  rgbColor: string;
  username: string;
  badges: Badge[];
}

export type MessageModel = {
  id: string;
  author: User;
  content: string;
};
