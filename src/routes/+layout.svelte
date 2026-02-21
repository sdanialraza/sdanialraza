<script lang="ts">
  import { untrack, type Snippet } from "svelte";
  import { SvelteTheme } from "svelte-themes";
  import "../app.css";
  import { createLanyardSocket, setLanyardContext } from "$lib/context/lanyard.svelte";
  import type { LayoutData } from "./$types";

  let { children, data }: { children: Snippet; data: LayoutData } = $props();

  let lanyardData = $state(untrack(() => data.lanyard));

  setLanyardContext({
    get data() {
      return lanyardData;
    },
  });

  const { connect, destroy } = createLanyardSocket(incoming => {
    lanyardData = incoming;
  });

  connect();

  $effect(() => () => destroy());
</script>

<svelte:head>
  <title>Danial Raza</title>
  <meta name="description" content="Personal website of Danial Raza." />
  <meta name="keywords" content="sdanialraza, Danial Raza, Danial, Raza, Website, Portfolio, Projects" />
  <meta name="application-name" content="Danial Raza" />
  <meta name="apple-mobile-web-app-title" content="Danial Raza" />
  <meta name="author" content="Danial Raza" />

  <meta property="og:title" content="Danial Raza" />
  <meta property="og:description" content="Personal website of Danial Raza." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sdanialraza.dev" />
  <meta property="og:site_name" content="Danial Raza" />
  <meta property="og:image" content="/logo.png" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Danial Raza" />
  <meta name="twitter:description" content="Personal website of Danial Raza." />
  <meta name="twitter:image" content="/logo.png" />
</svelte:head>

<SvelteTheme attribute="class">
  <div
    class="bg-stone-100 text-black dark:bg-black dark:bg-linear-to-br dark:from-black dark:via-(--charcoal) dark:to-black dark:text-white"
  >
    {@render children()}
  </div>
</SvelteTheme>
