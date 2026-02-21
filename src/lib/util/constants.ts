import type { LanyardData } from "$lib/types/lanyard";

export const DATE_OF_BIRTH = new Date("2003-10-18");

export const DISCORD_USER_ID = "274615157496348674";

export const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

export const LANYARD_OFFLINE_FALLBACK: LanyardData = {
  active_on_discord_desktop: false,
  active_on_discord_mobile: false,
  active_on_discord_web: false,
  activities: [],
  discord_status: "offline",
  discord_user: {
    avatar: "",
    discriminator: "0",
    display_name: "",
    id: DISCORD_USER_ID,
    public_flags: 0,
    username: "",
  },
  kv: {},
  listening_to_spotify: false,
  spotify: null,
};

export const LANYARD_WS_URL = "wss://api.lanyard.rest/socket";

export const REPOSITORY_LINK = "https://github.com/sdanialraza/sdanialraza";

export const SOCIAL_LINKS = {
  Discord: `https://discord.com/users/${DISCORD_USER_ID}`,
  Email: "mailto:danialrazafb@gmail.com",
  GitHub: "https://github.com/sdanialraza",
  Linkedin: "https://www.linkedin.com/in/sdanialraza",
  Twitter: "https://twitter.com/sdanialraza",
} as const;
