import type { LayoutServerLoad } from "./$types";
import type { LanyardResponse } from "$lib/types/lanyard";
import { LANYARD_API_URL, LANYARD_OFFLINE_FALLBACK } from "$lib/util";

export const load: LayoutServerLoad = async ({ fetch }) => {
  try {
    const response = await fetch(LANYARD_API_URL);
    const { data }: LanyardResponse = await response.json();
    return { lanyard: data };
  } catch {
    return { lanyard: LANYARD_OFFLINE_FALLBACK };
  }
};
