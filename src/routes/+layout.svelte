<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import { setLanyardContext } from "$lib/context/lanyard.svelte";

  let { data, children } = $props();

  const lanyard = setLanyardContext(data.lanyard);

  onMount(() => {
    lanyard.connect();
    return () => lanyard.destroy();
  });
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

<div
  class="bg-white bg-linear-to-br text-black dark:bg-black dark:from-black dark:via-(--charcoal) dark:to-black dark:text-white"
>
  {@render children()}
</div>
