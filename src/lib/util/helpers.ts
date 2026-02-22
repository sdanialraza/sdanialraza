import { DATE_OF_BIRTH } from "$lib/util/constants";

export function calculateAge() {
  return new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;
}

export function resolveActivityAssetUrl(applicationId?: string, image?: string): string | null {
  if (!image) return null;

  if (image.startsWith("mp:external/")) {
    const [, , protocol, ...rest] = image.split("/");
    return decodeURIComponent(`${protocol}://${rest.join("/")}`);
  }

  if (applicationId) {
    return `https://cdn.discordapp.com/app-assets/${applicationId}/${image}.png`;
  }

  return null;
}
