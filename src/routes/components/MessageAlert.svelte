<script>
    const { message } = $props();
</script>

<div class="message-alert flex items-center p-4">
    <p class="w-full text-center">{message}</p>
</div>

<style>
    .message-alert {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        border-color: var(--color-blue-400);
        outline-color: var(--color-blue-400);
        background-color: var(--color-blue-300);
        font-size: var(--text-md);
        width: 18rem;
        height: 3.125rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    p {
        color: var(--color-blue-900);
    }
</style>