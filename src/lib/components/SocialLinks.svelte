<script lang="ts">
  import FaBrandsDiscord from "~icons/fa6-brands/discord";
  import FaBrandsGithub from "~icons/fa6-brands/github";
  import FaBrandsLinkedin from "~icons/fa6-brands/linkedin";
  import FaBrandsTwitter from "~icons/fa6-brands/twitter";
  import FaSolidCode from "~icons/fa6-solid/code";
  import LuMail from "~icons/lucide/mail";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { REPOSITORY_LINK, SOCIAL_LINKS } from "$lib/util";
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section class="mt-4 flex w-full items-center">
  <div class="flex gap-x-2">
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.Discord}
      target="_blank"
      title="Discord"
    >
      <FaBrandsDiscord class="size-5 text-(--icon-color)" />
    </a>
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.Email}
      target="_blank"
      title="Email"
    >
      <LuMail class="size-5 text-(--icon-color)" />
    </a>
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.GitHub}
      target="_blank"
      title="GitHub"
    >
      <FaBrandsGithub class="size-5 text-(--icon-color)" />
    </a>
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.Linkedin}
      target="_blank"
      title="LinkedIn"
    >
      <FaBrandsLinkedin class="size-5 text-(--icon-color)" />
    </a>
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={SOCIAL_LINKS.Twitter}
      target="_blank"
      title="Twitter"
    >
      <FaBrandsTwitter class="size-5 text-(--icon-color)" />
    </a>
  </div>
  <div class="mx-3 h-5 w-px rounded-full bg-black/20 dark:bg-white/20"></div>
  <a
    class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
    href={REPOSITORY_LINK}
    target="_blank"
    title="Source Code"
  >
    <FaSolidCode class="size-5 text-(--icon-color)" />
  </a>
  <div class="mx-3 h-5 w-px rounded-full bg-black/20 dark:bg-white/20"></div>
  <ThemeToggle />
</section>
