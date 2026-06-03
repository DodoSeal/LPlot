<script>
  import Copyright from "./components/Copyright.svelte";
  import Navbar from "./components/Navbar.svelte";

</script>
<svelte:head>
    <title>Welcome to LPlot</title>
</svelte:head>

<div class="w-screen h-screen flex flex-col items-center place-content-center bg-slate-950">
    <Navbar />
    
    <Copyright color="white" />
</div>