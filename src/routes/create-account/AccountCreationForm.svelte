<script lang="ts">
    import Copyright from "../components/Copyright.svelte";
    import ErrorAlert from "../components/ErrorAlert.svelte";
    import OAuthProvider from "./OAuthProvider.svelte";
    import { mount, onMount } from "svelte";

    onMount(() => {
        const createAccountButton = document.getElementById("create-account-button")! as HTMLInputElement;
        const emailInput = document.getElementById("email-input")! as HTMLInputElement;
        const passwordInput = document.getElementById("password-input")! as HTMLInputElement;
        const passwordVerifyInput = document.getElementById("password-verify-input")! as HTMLInputElement;

        createAccountButton.addEventListener("click", () =>{
            RemoveExistingErrors();

            // TODO: Make account creation system!

            if (emailInput.value === "" || passwordInput.value === "" || passwordVerifyInput.value === "") {
                ShowError("Fill out all required fields!");
            };
        });
    });

    function RemoveExistingErrors(): void {
        const errorBox = document.querySelector("#error-box")!;
        errorBox.innerHTML = "";
    };

    function ShowError(message: string): void {
        RemoveExistingErrors();

        const errorBox = document.querySelector("#error-box")!;
        mount(ErrorAlert, { target: errorBox, props: { message } });
    };
</script>

<div class="w-full md:w-[50%] h-full flex flex-col items-center place-content-center">
    <!-- Login Title -->
    <div class="w-100 h-24 flex items-center place-content-center mb-6">
        <p class="text-3xl text-black font-bold">Account Creation</p>
    </div>

    <div id="error-box"></div>
    
    <!-- Input Fields -->
    <div class="w-full h-100 flex flex-col items-center place-content-center">
        <p class="w-[18rem] font-light text-neutral-500">Email</p>
        <input class="transition-all duration-200" placeholder="name@example.com" type="email" name="email" id="email-input">
        <p class="w-[18rem] font-light text-neutral-500">Password</p>
        <input class="transition-all duration-200" placeholder="••••••••••••••••" type="password" name="password" id="password-input">
        <p class="w-[18rem] font-light text-neutral-500">Verify Password</p>
        <input class="transition-all duration-200" placeholder="••••••••••••••••" type="password" name="password-verify" id="password-verify-input">
        <input class="bg-blue-500 hover:bg-blue-400 transition-all duration-200 text-white" type="button" value="Create Account" id="create-account-button">

        <a class="text-neutral-500 transition-colors duration-200 hover:underline hover:text-blue-500" href="/login">Already have an Account?</a>
    </div>

    <div class="bg-neutral-500 opacity-60 w-50 h-px"></div>

    <!-- External OAuth -->
    <div class="w-full h-45 flex flex-col items-center place-content-center">
        <OAuthProvider providerName="Discord" />
        <OAuthProvider providerName="GitHub" />
    </div>

    <Copyright />
</div>

<style>
    input {
        outline: none;
    }

    input:not([type="button"]) {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        border-color: var(--color-neutral-500);
        outline-color: var(--color-neutral-500);
        padding: 0.75rem;
        font-size: var(--text-md);
        width: 18rem;
        height: 3.125rem;
        color: var(--color-neutral-800);
        margin-bottom: 1rem;
    }

    input:not([type="button"]):focus {
        border-radius: var(--radius-lg);
    }

    input[type="button"] {
        border: 1px;
        border-radius: var(--radius-md);
        border-style: solid;
        border-color: var(--color-blue-500);
        outline-color: var(--color-neutral-500);
        padding: 0.75rem;
        font-size: var(--text-md);
        width: 18rem;
        height: 3.125rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    input::placeholder {
        color: var(--color-neutral-500);
    }

    input:autofill {
        color: var(--color-neutral-800);
    }
</style>