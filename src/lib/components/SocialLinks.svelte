<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import {
    FaSolidCode,
    FaBrandsDiscord,
    FaBrandsGithub,
    FaBrandsLinkedin,
    FaBrandsTwitter,
  } from "svelte-icons-pack/fa";
  import { LuMail } from "svelte-icons-pack/lu";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { REPOSITORY_LINK, SOCIAL_LINKS } from "$lib/util";

  interface Props {
    iconSize?: string;
  }

  let { iconSize = "20" }: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section class="mt-4 flex w-full items-center justify-between">
  <div class="flex items-center self-start">
    <div class="flex gap-x-2">
      <a
        class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
        href={SOCIAL_LINKS.Discord}
        target="_blank"
        title="Discord"
      >
        <Icon src={FaBrandsDiscord} size={iconSize} color="var(--icon-color)" />
      </a>
      <a
        class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
        href={SOCIAL_LINKS.Email}
        target="_blank"
        title="Email"
      >
        <Icon src={LuMail} size={iconSize} color="var(--icon-color)" />
      </a>
      <a
        class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
        href={SOCIAL_LINKS.GitHub}
        target="_blank"
        title="GitHub"
      >
        <Icon src={FaBrandsGithub} size={iconSize} color="var(--icon-color)" />
      </a>
      <a
        class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
        href={SOCIAL_LINKS.Linkedin}
        target="_blank"
        title="LinkedIn"
      >
        <Icon src={FaBrandsLinkedin} size={iconSize} color="var(--icon-color)" />
      </a>
      <a
        class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
        href={SOCIAL_LINKS.Twitter}
        target="_blank"
        title="Twitter"
      >
        <Icon src={FaBrandsTwitter} size={iconSize} color="var(--icon-color)" />
      </a>
    </div>
    <div class="mx-3 h-5 w-px rounded-full bg-black/20 dark:bg-white/20"></div>
    <ThemeToggle />
  </div>

  <div class="flex items-center self-end">
    <a
      class="flex items-center gap-x-2 rounded-xl bg-gray-200/60 p-2 font-semibold underline underline-offset-4 dark:bg-white/10"
      href={REPOSITORY_LINK}
      target="_blank"
      title="Source Code"
    >
      <Icon src={FaSolidCode} size={iconSize} color="var(--icon-color)" />
    </a>
  </div>
</section>
