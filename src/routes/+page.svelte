<script lang="ts">
  import Activity from "$lib/components/Activity.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import Spotify from "$lib/components/Spotify.svelte";
  import Status from "$lib/components/Status.svelte";
  import Time from "$lib/components/Time.svelte";
  import { calculateAge } from "$lib/util";
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
  <div class="flex w-full max-w-150 flex-col gap-y-3 p-5 md:p-0">
    <div class="flex items-center gap-x-1">
      <img
        alt="Danial Raza"
        class="h-15 w-15 rounded-full bg-cover md:h-20 md:w-20 lg:h-25 lg:w-25"
        src="/logo.png"
        width="100"
        height="100"
      />
    </div>

    <section class="w-full">
      <Status>
        <Time />
      </Status>
      <h1 class="text-3xl font-bold">Danial Raza</h1>
      <Spotify />
      <Activity />
      <p class="mt-2 text-sm text-gray-800 dark:text-gray-400">A {calculateAge()}-year-old software developer</p>
      <SocialLinks />
    </section>
  </div>
</main>
