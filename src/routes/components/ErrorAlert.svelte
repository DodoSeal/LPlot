<script>
    const { message } = $props();
</script>

<div class="error-alert flex items-center p-4">
    <p class="w-full text-center">{message}</p>
</div>

<style>
    .error-alert {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        border-color: var(--color-red-400);
        outline-color: var(--color-red-400);
        background-color: var(--color-red-300);
        font-size: var(--text-md);
        width: 18rem;
        height: 3.125rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    p {
        color: var(--color-red-900);
    }
</style>