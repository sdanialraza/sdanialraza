<script lang="ts">
  import type { Snippet } from "svelte";
  import type { DiscordStatus } from "$lib/types/lanyard";
  import { getLanyardContext } from "$lib/context/lanyard.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  const statusColors: Record<string, string> = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };

  const statusMappings: Record<DiscordStatus, string> = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline",
  };

  const lanyard = getLanyardContext();

  let discordStatus = $derived(lanyard.data.discord_status);
  let color = $derived(statusColors[discordStatus] ?? "bg-gray-500");
  let status = $derived(statusMappings[discordStatus] ?? "Offline");
</script>

<aside class="flex items-center gap-x-2 text-sm font-semibold dark:text-gray-400">
  <span class={`ml-1 h-3 w-3 rounded-full md:ml-0 ${color}`}></span>
  <p>{status}</p>
  &mdash;
  {@render children()}
</aside>
