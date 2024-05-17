<script lang="ts">
    import { state } from "./stores";

    function onlist() {
        state.set(["list"]);
    }
</script>

<div class="header">
    <button class="list" on:click={onlist}>List</button>
</div>

<style>
    .header {
        padding: 1rem;
        margin: 0;
        background-color: #999;
        max-width: 100%;
        position: static;
        height: fit-content;
    }
    .list {
        font-size: x-large;
        color: white;
        padding: 4px 1rem;
        background: transparent;
        border: none;
        transition: 0.1s;
        &:hover {
            color: #eee
        }
    }
</style>
