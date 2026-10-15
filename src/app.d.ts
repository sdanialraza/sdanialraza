import "unplugin-icons/types/svelte";
import type { PageMeta } from "#lib/types/index.ts";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      meta?: Partial<PageMeta>;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
