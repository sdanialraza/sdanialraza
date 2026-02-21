<script lang="ts">
  import BrandsSpotify from "~icons/fa6-brands/spotify";
  import { getLanyardContext } from "$lib/context/lanyard.svelte";

  const lanyard = getLanyardContext();

  let spotify = $derived(lanyard.data.spotify);
  let listening = $derived(lanyard.data.listening_to_spotify);
  let spotifyUrl = $derived(spotify ? `https://open.spotify.com/track/${spotify.track_id}` : "");
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if listening && spotify}
  <p class="mt-1 flex min-w-0 items-center gap-x-1.5 text-sm text-gray-800 dark:text-gray-400">
    <BrandsSpotify class="size-4 shrink-0 text-green-500" />
    <a
      class="min-w-0 truncate font-medium underline underline-offset-2 transition-colors hover:text-black dark:hover:text-white"
      href={spotifyUrl}
      target="_blank"
      title="{spotify.song} by {spotify.artist} — {spotify.album}"
    >
      {spotify.song}
    </a>
  </p>
{/if}
