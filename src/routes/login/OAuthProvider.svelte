<script lang="ts">
    const { providerName } = $props();
</script>

<button class="hover:bg-black group transition-all duration-200 flex items-center" title={providerName.toLowerCase()}>
    <img class="w-6 mx-4" src="src/lib/assets/{providerName}.png" alt="{providerName.toLowerCase()}-logo">
    <p class="group-hover:text-white transition-all duration-200">Continue with {providerName}</p>
</button>

<style>
    button {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        border-color: var(--color-neutral-500);
        outline-color: var(--color-neutral-500);
        font-size: var(--text-md);
        width: 15.5rem;
        height: 3.125rem;
        color: var(--color-neutral-800);
        margin-bottom: 1rem;
        cursor: pointer;
    }

    button:hover {
        border-radius: var(--radius-lg);
    }
</style>