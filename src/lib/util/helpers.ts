import { DATE_OF_BIRTH } from "$lib/util/constants";

export function calculateAge() {
  return new Date(Date.now() - DATE_OF_BIRTH.getTime()).getFullYear() - 1_970;
}
