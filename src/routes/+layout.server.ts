import type { LanyardResponse } from "$lib/types/lanyard";
import { LANYARD_API_URL } from "$lib/util";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  try {
    const response = await fetch(LANYARD_API_URL);

    if (!response.ok) {
      return { lanyard: null };
    }

    const { data }: LanyardResponse = await response.json();

    return { lanyard: data };
  } catch {
    return { lanyard: null };
  }
};
