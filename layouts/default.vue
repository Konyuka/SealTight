<script setup>
// import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const config = useRuntimeConfig()
const fullPath = useRequestURL().href

useSeoMeta({
    title: 'Acentria Group: Done Smart!',
    description: 'We offer a diversified range of financial services to help you thrive. From insurance and reinsurance to actuarial services, technology, and investment/asset management, we promise to walk alongside you, designing solutions that cater to your specific needs.',
    ogTitle: 'Acentria Group: Done Smart!',
    ogDescription: 'We offer a diversified range of financial services to help you thrive. From insurance and reinsurance to actuarial services, technology, and investment/asset management, we promise to walk alongside you, designing solutions that cater to your specific needs..',
    ogImage: `${config.public.baseUrl}/img/LogoT.png`,
    ogUrl: fullPath,
    twitterTitle: 'Acentria Group: Done Smart!',
    twitterDescription: 'We offer a diversified range of financial services to help you thrive. From insurance and reinsurance to actuarial services, technology, and investment/asset management, we promise to walk alongside you, designing solutions that cater to your specific needs..',
    twitterImage: `${config.public.baseUrl}/img/LogoT.png`,
    twitterCard: 'summary_large_image',
    canonical: fullPath
});

</script>

<template>
    <div class="!font-lato !overflow-x-hidden">
        <Navigation />
        <slot />
        <Footer />
        <!-- <SpeedInsights /> -->
    </div>

</template>

<style></style>