<script lang="ts">
    import { onMount } from "svelte";

    const { color } = $props();

    onMount(() => {
        const element = document.getElementById("copyright")!;
        element.style.color = color;
    });
</script>

<div class="w-full h-6 fixed flex items-center place-content-center bottom-0 mb-1">
    <p id="copyright" class="font-thin">© 2026 Max McDaniel</p>
</div>