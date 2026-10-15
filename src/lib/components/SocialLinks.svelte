<script lang="ts">
  import FaBrandsDiscord from "~icons/fa6-brands/discord";
  import FaBrandsGithub from "~icons/fa6-brands/github";
  import FaBrandsLinkedin from "~icons/fa6-brands/linkedin";
  import FaBrandsXTwitter from "~icons/fa6-brands/x-twitter";
  import FaSolidCode from "~icons/fa6-solid/code";
  import LuMail from "~icons/lucide/mail";
  import ThemeToggle from "#lib/components/ThemeToggle.svelte";
  import { REPOSITORY_LINK, SOCIAL_LINKS } from "#lib/util/index.ts";

  const LINKS = [
    { href: SOCIAL_LINKS.Discord, icon: FaBrandsDiscord, label: "Discord" },
    { href: SOCIAL_LINKS.Email, icon: LuMail, label: "Email" },
    { href: SOCIAL_LINKS.GitHub, icon: FaBrandsGithub, label: "GitHub" },
    { href: SOCIAL_LINKS.Linkedin, icon: FaBrandsLinkedin, label: "LinkedIn" },
    { href: SOCIAL_LINKS.X, icon: FaBrandsXTwitter, label: "X" },
  ] as const;
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#snippet link(href: string, label: string, Icon: typeof LuMail)}
  <a
    aria-label={label}
    class="group relative flex items-center rounded-xl bg-gray-200/60 p-2 dark:bg-white/10"
    {href}
    rel="noreferrer"
    target="_blank"
  >
    <Icon class="size-5 text-(--icon-color)" />
    <span
      aria-hidden="true"
      class="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-white dark:text-black"
    >
      {label}
    </span>
  </a>
{/snippet}

<section class="mt-4 flex w-full items-center">
  <div class="flex gap-x-2">
    {#each LINKS as { href, icon, label } (label)}
      {@render link(href, label, icon)}
    {/each}
  </div>
  <div class="mx-3 h-5 w-px rounded-full bg-black/20 dark:bg-white/20"></div>
  <div class="flex gap-x-2">
    {@render link(REPOSITORY_LINK, "Source code", FaSolidCode)}
    <ThemeToggle />
  </div>
</section>
