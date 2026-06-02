<style>
    * {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
    }

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

<div class="w-full h-full flex flex-col items-center place-content-center">
    <!-- Login Title -->
    <!-- <div class="w-130 h-24 flex items-center place-content-center mb-6">
        <p class="text-3xl text-black font-bold">Log in to your Account</p>
    </div> -->
    
    <!-- Input Fields -->
    <div class="w-130 h-65 flex flex-col items-center place-content-center">
        <p class="w-[18rem] font-light text-neutral-500">Email</p>
        <input class="transition-all duration-200" placeholder="name@example.com" type="email" name="email" id="email-input">
        <p class="w-[18rem] font-light text-neutral-500">Password</p>
        <input class="transition-all duration-200" placeholder="••••••••••••••••" type="password" name="password" id="password-input">
        <input class="bg-blue-500 hover:bg-blue-400 transition-all duration-200 text-white" type="button" value="Login">
    </div>
</div>