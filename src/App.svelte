<script lang="ts">
  import Header from "./lib/Header.svelte";
  import List from "./lib/List.svelte";
    import Voiceover from "./lib/Voiceover.svelte";
  import { state } from "./lib/stores";
</script>

<main>
  <Header />
  {#if $state.toString() === ['list'].toString() }
  <List />
  {:else}
  <Voiceover id={$state[1]}/>
  {/if}
</main>

<style>
</style>
