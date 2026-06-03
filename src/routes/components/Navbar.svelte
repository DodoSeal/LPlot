<script>
    import NavbarButton from "./NavbarButton.svelte";
    import lplotLogo from "$lib/assets/favicon.svg";
</script>

<div class="w-full h-20 rounded-b-xl bg-slate-900 fixed top-0 flex items-center px-12" id="navbar">
    <a href="/" class="w-16 h-full flex items-center m-28">
        <img class="fixed w-11 mx-1" src={lplotLogo} alt="lplot-logo">
        <p class="ml-14 text-white text-[2.1rem] font-bold">LPlot</p>
    </a>

    <div class="w-300 h-full flex items-center place-content-end absolute right-12">
        <NavbarButton name="About" href="/about" />
        <NavbarButton name="Contact" href="/contact" />
        <!-- <NavbarButton name="Dashboard" href="/dashboard" /> -->
        <NavbarButton name="Get Started" href="/create-account" />
    </div>
</div>