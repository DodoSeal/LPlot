<script>
  import Copyright from "../components/Copyright.svelte";
  import Navbar from "../components/Navbar.svelte";

</script>
<svelte:head>
    <title>About - LPlot</title>
</svelte:head>

<div class="w-screen h-screen flex flex-col items-center place-content-center bg-slate-950">
    <Navbar color="var(--color-slate-900)" />
    
    <Copyright color="white" />
</div>