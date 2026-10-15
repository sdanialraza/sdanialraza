<script lang="ts">
  import { untrack, type Snippet } from "svelte";
  import { page } from "$app/state";
  import { SvelteTheme } from "svelte-themes";
  import { createLanyardSocket, setLanyardContext } from "#lib/context/lanyard.svelte.ts";
  import type { PageMeta } from "#lib/types/index.ts";
  import { SITE_URL } from "#lib/util/index.ts";
  import "../app.css";
  import type { LayoutData } from "./$types";

  const DEFAULT_META: PageMeta = {
    card: "summary",
    description: "Personal website of Danial Raza.",
    image: "/logo.png",
    path: "/",
    title: "Danial Raza",
  };

  let { children, data }: { children: Snippet; data: LayoutData } = $props();

  let meta = $derived({ ...DEFAULT_META, ...page.data.meta });
  let image = $derived(`${SITE_URL}${meta.image}`);
  let url = $derived(`${SITE_URL}${meta.path === "/" ? "" : meta.path}`);
  let lanyardData = $state(untrack(() => data.lanyard));

  setLanyardContext({
    get data() {
      return lanyardData;
    },
  });

  const { connect, destroy } = createLanyardSocket(incoming => (lanyardData = incoming));

  connect();

  $effect(() => () => destroy());
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta name="keywords" content="sdanialraza, Danial Raza, Danial, Raza, Website, Portfolio, Projects" />
  <meta name="application-name" content="Danial Raza" />
  <meta name="apple-mobile-web-app-title" content="Danial Raza" />
  <meta name="author" content="Danial Raza" />
  <link href={url} rel="canonical" />

  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:site_name" content="Danial Raza" />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content={meta.card} />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={image} />
</svelte:head>

<SvelteTheme attribute="class">
  <div
    class="bg-stone-100 text-black dark:bg-black dark:bg-linear-to-br dark:from-black dark:via-(--charcoal) dark:to-black dark:text-white"
  >
    {@render children()}
  </div>
</SvelteTheme>
