<script>
  import Copyright from "../Copyright.svelte";
  import LoginForm from "./LoginForm.svelte";
  import LoginSidebar from "./LoginSidebar.svelte";

</script>
<svelte:head>
    <title>Login Page!</title>
</svelte:head>

<div class="w-screen h-screen flex">
    <LoginForm />
    <!-- <LoginSidebar /> -->

    <Copyright />
</div>