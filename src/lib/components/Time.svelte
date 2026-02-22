<script lang="ts">
  import { Temporal } from "temporal-polyfill";
  import LuClock from "~icons/lucide/clock";

  const TIME_ZONE = "Europe/Madrid";

  function getCurrentTime(hour12: boolean): string {
    return Temporal.Now.zonedDateTimeISO(TIME_ZONE)
      .toLocaleString("en-ES", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
        hour12,
      })
      .toUpperCase();
  }

  let hour12 = $state(false);
  let time = $state(getCurrentTime(false));

  const toggleHour12 = () => (hour12 = !hour12);

  $effect(() => {
    time = getCurrentTime(hour12);

    const interval = setInterval(() => (time = getCurrentTime(hour12)), 1_000);

    return () => clearInterval(interval);
  });
</script>

<div class="flex gap-x-2">
  <LuClock class="size-5 text-(--icon-color)" />
  <button
    class="cursor-pointer underline underline-offset-2 select-none"
    onclick={toggleHour12}
    title="Switch to {hour12 ? '24' : '12'}-hour format"
    type="button"
  >
    {time}
  </button>
</div>
