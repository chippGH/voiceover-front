<script lang="ts">
    import { onMount } from "svelte";
    import { state } from "./stores";
    import { get } from "./api";

    export let id: number = -1;
    let isLoading: boolean = false;
    let data: Voiceover
    onMount(() => {
        if (id == -1) {
            state.set(['list'])
            return
        }
        get(id).then(response => response.json()).then(json => {
            data = json
            isLoading=true
        })
    })
</script>
<div class="content">
    {#if !isLoading}
        <div class="loader">Loading...</div>
    {:else}
        <h2 class="voiceover-name">{data.name}</h2>
        {#each data.replicas as replica}
            <div class="replica" style:border-color={data.persons[replica.person].color}>
                <span class="name" style:color={data.persons[replica.person].color}>{data.persons[replica.person].name}: </span>{replica.text}
            </div>
        {/each}
    {/if}    
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
    }
    .voiceover-name {
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
    }
    .replica {
        font-size: 1.2rem;
        display: block;
        background-color: #ccc;
        margin: 1rem 0 0 1rem;
        width: calc(100% - 4.5rem);
        padding: 0.2rem 1rem 0.2rem 1rem;
        border-left: solid 4px;
    }

</style>