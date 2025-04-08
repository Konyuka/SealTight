<template>
    <!-- component -->
    <div class="flex h-[5vh] items-center justify-center bg-white font-bold text-black">
        <div class="text-center space-y-5">
            <div class="text-left text-5xl font-bold tracking-widest text-black">
                Seal Tight
                <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-2 overflow-hidden text-edyellow">
                    <span class="animate-word-delay-2 col-span-full row-span-full">Limited</span>
                    <span class="animate-word-delay-1 col-span-full row-span-full">Solutions</span>
                    <span class="animate-word col-span-full row-span-full">LPG</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes word {
    0% {
        transform: translateY(100%);
    }

    15% {
        transform: translateY(-10%);
        animation-timing-function: ease-out;
    }

    20% {
        transform: translateY(0);
    }

    40%,
    100% {
        transform: translateY(-110%);
    }
}

.animate-word {
    animation: word 5s infinite;
}

.animate-word-delay-1 {
    animation: word 5s infinite;
    animation-delay: -1.0s;
}

.animate-word-delay-2 {
    animation: word 5s infinite;
    animation-delay: -2.4s;
}

</style>