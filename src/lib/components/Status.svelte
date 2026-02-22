<script lang="ts">
  import type { Snippet } from "svelte";
  import { DISCORD_STATUS_COLORS, DISCORD_STATUS_MAPPINGS } from "$lib/util";
  import { getLanyardContext } from "$lib/context/lanyard.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const lanyard = getLanyardContext();

  let discordStatus = $derived(lanyard.data.discord_status);
  let color = $derived(DISCORD_STATUS_COLORS[discordStatus]);
  let status = $derived(DISCORD_STATUS_MAPPINGS[discordStatus]);
</script>

<aside class="flex items-center gap-x-2 text-sm font-semibold dark:text-gray-400">
  <span class={`ml-1 h-3 w-3 rounded-full md:ml-0 ${color}`}></span>
  <p>{status}</p>
  &mdash;
  {@render children()}
</aside>
