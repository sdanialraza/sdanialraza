export const BASE_URL = "https://sdanialraza.dev" as const

export const DISCORD_USER_ID = "274615157496348674" as const

export const DATE_OF_BIRTH = new Date("2003-10-18")

export const REPOSITORY_LINK = "https://github.com/sdanialraza/sdanialraza" as const

export const SOCIAL_LINKS = {
  Discord: `https://discordapp.com/users/${DISCORD_USER_ID}`,
  Email: "mailto:danialrazafb@gmail.com",
  GitHub: "https://github.com/sdanialraza",
  Linkedin: "https://www.linkedin.com/in/sdanialraza",
  Twitter: "https://twitter.com/sdanialraza",
} as const

export const TIME_FORMAT_OPTIONS = {
  timeZone: "Europe/Madrid",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
} as const satisfies Intl.DateTimeFormatOptions
