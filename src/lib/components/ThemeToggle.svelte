<script lang="ts">
  import { useTheme } from "svelte-themes";
  import LuSun from "~icons/lucide/sun";
  import LuMoon from "~icons/lucide/moon";

  const theme = useTheme();

  const toggleTheme = () => (theme.theme = theme.resolvedTheme === "dark" ? "light" : "dark");

  const handleClick = () => {
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(toggleTheme);
    } else {
      toggleTheme();
    }
  };

  let label = $derived(`Switch to ${theme.resolvedTheme === "light" ? "dark" : "light"} mode`);
</script>

<button
  aria-label={label}
  class="group relative flex items-center rounded-xl bg-gray-200/60 p-2 dark:bg-white/10"
  onclick={handleClick}
  type="button"
>
  {#if theme.resolvedTheme === "light"}
    <LuMoon class="size-5 text-(--icon-color)" />
  {:else}
    <LuSun class="size-5 text-(--icon-color)" />
  {/if}
  <span
    aria-hidden="true"
    class="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-white dark:text-black"
  >
    {label}
  </span>
</button>
