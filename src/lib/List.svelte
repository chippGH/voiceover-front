<script lang="ts">
    import { onMount } from "svelte";
    import { state } from "./stores";
    import { getlist } from "./api";

    let isLoading = true;
    let names: string[] = [];

    onMount(() => {
        getlist().then(response => response.json()).then(arr => {
            isLoading = false
            names = arr
        })
    }) 

    function setget(i: number) {
        state.set(["get", i]);
    }
</script>

<div class="content">
    {#if isLoading}
        <div class="loader">Loading...</div>
    {:else}
        {#each names as name, i}
            <button class="link" on:click={() => setget(i)}>{name}</button>
        {/each}
    {/if}
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
    }

    .link {
        margin-top: 1rem;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        height: 3rem;
        font-size: large;
        color: white;
        background-color: #aaa;
        border: none;
        transition: 0.1s;
        &:hover {
            background-color: #ccc;
        }
    }
</style>
