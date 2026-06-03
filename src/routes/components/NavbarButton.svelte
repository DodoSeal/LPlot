<script>
    const { name, href } = $props();
</script>

<input class="text-center transition-all duration-200" type="button" value={name} onclick={() => { window.location.href = `${href}` }}>

<style>
    input {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        color: white;
        padding: 0.2rem;
        font-size: var(--text-md);
        background-color: var(--color-slate-900);
        width: 8rem;
        height: 3rem;
        cursor: pointer;
        margin-right: 2rem;
    }

    input:hover {
        background-color: var(--color-slate-800);
        border-radius: var(--radius-lg);
    }
</style>