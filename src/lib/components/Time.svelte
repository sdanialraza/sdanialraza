<script lang="ts">
  import { onMount } from "svelte";
  import { Icon } from "svelte-icons-pack";
  import { LuClock } from "svelte-icons-pack/lu";
  import { Temporal } from "@js-temporal/polyfill";

  const TIME_ZONE = "Europe/Madrid";

  function getCurrentTime(hour12: boolean): string {
    return Temporal.Now.plainTimeISO(TIME_ZONE).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12,
    });
  }

  let hour12 = $state(false);
  let time = $state("");
  let mounted = $state(false);

  function toggleHour12() {
    hour12 = !hour12;
  }

  onMount(() => {
    mounted = true;
    time = getCurrentTime(hour12);
  });

  $effect(() => {
    if (!mounted) return;

    time = getCurrentTime(hour12);
    const interval = setInterval(() => {
      time = getCurrentTime(hour12);
    }, 5_000);

    return () => clearInterval(interval);
  });

  let timeTitle = $derived(`Switch to ${hour12 ? "24" : "12"}-hour format`);
</script>

<div class="flex gap-x-2">
  <Icon src={LuClock} size="20" color="var(--icon-color)" title="My Local Time" />
  {#if mounted}
    <button
      class="cursor-pointer underline underline-offset-2 select-none"
      onclick={toggleHour12}
      title={timeTitle}
      type="button"
    >
      {time}
    </button>
  {:else}
    <span class="underline underline-offset-2 select-none">&nbsp;</span>
  {/if}
</div>
