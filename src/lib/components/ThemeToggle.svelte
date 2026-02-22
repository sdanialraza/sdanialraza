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
</script>

<button
  aria-label="Toggle theme"
  class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold dark:bg-white/10"
  onclick={handleClick}
  title={`Switch to ${theme.resolvedTheme === "light" ? "dark" : "light"} mode`}
  type="button"
>
  {#if theme.resolvedTheme === "light"}
    <LuMoon class="size-5 text-(--icon-color)" />
  {:else}
    <LuSun class="size-5 text-(--icon-color)" />
  {/if}
</button>
