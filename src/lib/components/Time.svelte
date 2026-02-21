<script lang="ts">
  import { Temporal } from "temporal-polyfill";
  import LuClock from "~icons/lucide/clock";

  const TIME_ZONE = "Europe/Madrid";

  function getCurrentTime(hour12: boolean): string {
    return Temporal.Now.plainTimeISO(TIME_ZONE).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12,
    });
  }

  let hour12 = $state(false);
  let time = $state(getCurrentTime(false));

  function toggleHour12() {
    hour12 = !hour12;
  }

  $effect(() => {
    time = getCurrentTime(hour12);
    const interval = setInterval(() => {
      time = getCurrentTime(hour12);
    }, 5_000);

    return () => clearInterval(interval);
  });

  let timeTitle = $derived(`Switch to ${hour12 ? "24" : "12"}-hour format`);
</script>

<div class="flex gap-x-2">
  <LuClock class="size-5 text-(--icon-color)" />
  <button
    class="cursor-pointer underline underline-offset-2 select-none"
    onclick={toggleHour12}
    title={timeTitle}
    type="button"
  >
    {time}
  </button>
</div>
