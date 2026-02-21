<script lang="ts">
  import { onMount } from "svelte";
  import { Icon } from "svelte-icons-pack";
  import { LuSun, LuMoon } from "svelte-icons-pack/lu";

  type Theme = "light" | "dark";

  let theme = $state<Theme>("dark");
  let mounted = $state(false);

  function toggleTheme() {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    theme = newTheme;
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  function applyTheme(newTheme: Theme) {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onMount(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    theme = saved ? saved : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    applyTheme(theme);

    mounted = true;
  });
</script>

{#if mounted}
  <button
    aria-label="Toggle theme"
    class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold dark:bg-white/10"
    onclick={toggleTheme}
    title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    type="button"
  >
    <Icon color="var(--icon-color)" size="20" src={theme === "light" ? LuMoon : LuSun} />
  </button>
{/if}
