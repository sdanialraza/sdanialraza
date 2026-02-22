<script lang="ts">
  import LuGamepad2 from "~icons/lucide/gamepad-2";
  import { Temporal } from "temporal-polyfill";
  import { getLanyardContext } from "$lib/context/lanyard.svelte";
  import { resolveActivityAssetUrl } from "$lib/util";

  const lanyard = getLanyardContext();

  let activity = $derived(lanyard.data.activities.find(a => a.type === 0));
  let assetUrl = $derived(resolveActivityAssetUrl(activity?.application_id, activity?.assets?.large_image));
  let altText = $derived(activity?.assets?.large_text ?? activity?.name ?? "Activity");

  let elapsed = $state("");

  $effect(() => {
    const start = activity?.timestamps?.start;

    if (!start) {
      elapsed = "";

      return;
    }

    const update = () => {
      const duration = Temporal.Duration.from({ milliseconds: Date.now() - start }).round({ largestUnit: "hour" });

      const minutes = String(duration.minutes).padStart(2, "0");
      const seconds = String(duration.seconds).padStart(2, "0");

      elapsed = duration.hours > 0 ? `${duration.hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
    };

    update();

    const interval = setInterval(update, 1_000);

    return () => clearInterval(interval);
  });
</script>

{#if activity}
  <div class="mt-1 flex min-w-0 items-center gap-x-2 text-sm text-gray-800 dark:text-gray-400">
    {#if assetUrl}
      <img alt={altText} class="size-4 shrink-0 rounded-sm object-cover" src={assetUrl} />
    {:else}
      <LuGamepad2 class="size-4 shrink-0 text-(--icon-color)" />
    {/if}
    <span class="min-w-0 truncate">
      <span class="font-medium">{activity.name}</span>
      {#if activity.details}
        <span class="text-gray-500 dark:text-gray-500"> &mdash; {activity.details}</span>
      {/if}
      {#if elapsed}
        <span class="text-gray-500 tabular-nums dark:text-gray-500"> &middot; {elapsed}</span>
      {/if}
    </span>
  </div>
{/if}
