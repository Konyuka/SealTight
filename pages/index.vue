<script setup>


const services = ref([
    {
        name: '',
        icon: ''
    }
]) 
</script>

<template>
    <div>
        <main>
            <section class="ed-2-banner bg-edoffwhite pt-[20px] pb-[190px] relative z-[1] overflow-hidden">
                <div class="container max-w-[71.6%] xxxl:max-w-[86.5%] xxl:max-w-[90.6%] mx-auto">
                    <div class="flex md:flex-col gap-x-[112px] gap-y-[40px] items-center">
                        <!-- banner text -->
                        <div class="max-w-[49%] xxxl:max-w-[45.5%] md:max-w-full shrink-0">
                            <h6 class="ed-section-sub-title !text-black before:!content-none">Seal Tight, Gas Right <br>
                                <span class="text-edpurple">Safe. Reliable. Efficient. </span>
                            </h6>
                            <h1
                                class="font-medium text-[clamp(35px,5.4vw,80px)] text-edblue tracking-tight leading-[1.12] mb-[25px]">
                                Seal Tight <br><span class="font-bold"><span
                                        class="inline-block text-edpurple relative before:absolute before:left-0 before:top-[calc(100%-6px)] before:w-[240px] before:h-[21px] before:bg-[url('../assets/img/banner-2-title-vector.svg')]">LPG</span>
                                    Solutions</span></h1>
                            <p class="text-edgray font-medium mb-[41px]">
                                At Seal Tight LPG Solution, we are dedicated to providing safe, reliable, and innovative
                                LPG gas solutions. Our team of expert engineers and installers specializes in LPG gas
                                reticulation, bulk storage systems, installation, maintenance, and adherence to the
                                highest safety standards. We leverage cutting-edge technology to deliver efficient and
                                long-lasting LPG systems, ensuring optimal performance for both residential and
                                commercial applications. With a strong commitment to safety and excellence, we guarantee
                                seamless and secure gas solutions tailored to meet your needs.
                            </p>
                            <div class="flex flex-wrap gap-[10px]">
                                <NuxtLink href="contact-us"
                                    class="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white">
                                    Schedule a Consultation
                                </NuxtLink>

                            </div>
                        </div>

                        <!-- banner image -->
                        <div class="max-w-[51%] md:max-w-full">
                            <div class="w-max relative z-[1] flex gap-[30px] items-center">
                                <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-blue-green-flame-gas-stove_181624-9674.jpg?t=st=1741941481~exp=1741945081~hmac=94d0ac0c0074f79424819689fce44ecc9a02b58a355898e4d3a4ef5caba9b410&w=1380"
                                    alt="banner image"
                                    class="border-[10px] border-white rounded-[20px] max-w-[241px] aspect-[261/366]">
                                <img src="https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-146.jpg?t=st=1741940340~exp=1741943940~hmac=c43c823656ab9d7d4ee942dc0fb4b828ba95f93d7090db481b24c608416228e8&w=1380"
                                    alt="banner image" class="rounded-[20px] object-cover w-[400px] h-[500px]">

                                <!-- vectors -->
                                <div>
                                    <div
                                        class="w-[242px] aspect-square rounded-full bg-edpurple opacity-80 blur-[110px] absolute -z-[1] bottom-0 left-[163px]">
                                    </div>
                                    <!-- <img src="/assets/img/banner-2-img-vector-1.svg" alt="vector"
                                        class="pointer-events-none absolute -z[1] top-[30px] -left-[35px]"> -->
                                    <img src="/assets/img/banner-2-img-vector-2.svg" alt="vector"
                                        class="pointer-events-none absolute -z[1] -top-[50px] -right-[40px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- vector -->
                <div>
                    <!-- <img src="/assets/img/banner-2-vector-1.svg" alt="vector"
                        class="pointer-events-none absolute -z-[1] top-[135px] left-[38px] xxxl:hidden">
                    <img src="/assets/img/banner-2-vector-2.svg" alt="vector"
                        class="pointer-events-none absolute -z-[1] bottom-0 left-0">
                    <img src="/assets/img/banner-2-vector-3.svg" alt="vector"
                        class="pointer-events-none absolute -z-[1] -bottom-[8px] right-0"> -->
                </div>
            </section>

            <div class="ed-2-categories -mt-[98px] relative z-[2]">
                <div
                    class="mx-[15.8%] xxxl:mx-[9.8%] xxl:mx-[3.5%] bg-white p-[40px] sm:p-[30px] xxs:p-[20px] rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                    <div class="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-[20px]">
                        <a href="/lpg-cylinders"
                            class="border border-[#e5e5e5] rounded-[10px] py-[16px] px-[20px] flex sm:flex-col items-center sm:items-start gap-y-[15px] gap-x-[20px] hover:bg-[#EA703B] hover:border-[#EA703B] group">
                            <div
                                class="bg-[#EA703B] shrink-0 w-[84px] sm:w-[64px] aspect-square rounded-md p-[14px] duration-[400ms] flex items-center justify-center group-hover:bg-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2L4 6V26L16 30L28 26V6L16 2ZM26 24V8L16 4L6 8V24L16 28L26 24Z"
                                        fill="white" class="group-hover:fill-[#EA703B]" />
                                    <path d="M16 10V22" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:stroke-[#EA703B]" />
                                    <path d="M12 14H20" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:stroke-[#EA703B]" />
                                </svg>
                            </div>
                            <div>
                                <h5
                                    class="font-semibold text-[20px] text-edblue duration-[400ms] group-hover:text-white">
                                    LPG Cylinders</h5>
                                <h6 class="text-[#808080] duration-[400ms] group-hover:text-white">Various Sizes</h6>
                            </div>
                        </a>

                        <a href="/lpg-refills"
                            class="border border-[#e5e5e5] rounded-[10px] py-[16px] px-[20px] flex sm:flex-col items-center sm:items-start gap-y-[15px] gap-x-[20px] hover:bg-[#EA703B] hover:border-[#EA703B] group">
                            <div
                                class="bg-[#EA703B] shrink-0 w-[84px] sm:w-[64px] aspect-square rounded-md p-[14px] duration-[400ms] flex items-center justify-center group-hover:bg-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 4V16M16 28V18M16 16L20 12M16 16L12 12" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="group-hover:stroke-[#EA703B]" />
                                    <circle cx="16" cy="24" r="4" fill="white" class="group-hover:fill-[#EA703B]" />
                                </svg>
                            </div>
                            <div>
                                <h5
                                    class="font-semibold text-[20px] text-edblue duration-[400ms] group-hover:text-white">
                                    LPG Refills</h5>
                                <h6 class="text-[#808080] duration-[400ms] group-hover:text-white">Fast & Reliable</h6>
                            </div>
                        </a>

                        <a href="/lpg-installations"
                            class="border border-[#e5e5e5] rounded-[10px] py-[16px] px-[20px] flex sm:flex-col items-center sm:items-start gap-y-[15px] gap-x-[20px] hover:bg-[#EA703B] hover:border-[#EA703B] group">
                            <div
                                class="bg-[#EA703B] shrink-0 w-[84px] sm:w-[64px] aspect-square rounded-md p-[14px] duration-[400ms] flex items-center justify-center group-hover:bg-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 10.5L27.5 10.5" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:stroke-[#EA703B]" />
                                    <path d="M7.5 7.5L5 10.5L7.5 13.5" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="group-hover:stroke-[#EA703B]" />
                                    <path d="M24.5 7.5L27 10.5L24.5 13.5" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="group-hover:stroke-[#EA703B]" />
                                    <rect x="2" y="15" width="28" height="14" rx="2" stroke="white" stroke-width="2"
                                        class="group-hover:stroke-[#EA703B]" />
                                </svg>
                            </div>
                            <div>
                                <h5
                                    class="font-semibold text-[20px] text-edblue duration-[400ms] group-hover:text-white">
                                    Installations</h5>
                                <h6 class="text-[#808080] duration-[400ms] group-hover:text-white">Expert & Safe</h6>
                            </div>
                        </a>

                        <a href="/lpg-safety"
                            class="border border-[#e5e5e5] rounded-[10px] py-[16px] px-[20px] flex sm:flex-col items-center sm:items-start gap-y-[15px] gap-x-[20px] hover:bg-[#EA703B] hover:border-[#EA703B] group">
                            <div
                                class="bg-[#EA703B] shrink-0 w-[84px] sm:w-[64px] aspect-square rounded-md p-[14px] duration-[400ms] flex items-center justify-center group-hover:bg-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7L16 3L29 7V15C29 22.67 24.67 29 16 29C7.33 29 3 22.67 3 15V7Z"
                                        fill="white" class="group-hover:fill-[#EA703B]" />
                                    <path d="M7 15H25" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:stroke-[#EA703B]" />
                                    <path d="M13 21H19" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="group-hover:stroke-[#EA703B]" />
                                </svg>
                            </div>
                            <div>
                                <h5
                                    class="font-semibold text-[20px] text-edblue duration-[400ms] group-hover:text-white">
                                    Safety Guidelines</h5>
                                <h6 class="text-[#808080] duration-[400ms] group-hover:text-white">Important Information
                                </h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <section class="ed-2-courses py-[120px] xl:py-[80px] md:py-[60px]">
                <div class="mx-[9.2%] xxxl:mx-[8.2%] xxl:mx-[3%]">
                    <div class="text-center mb-[21px]">
                        <h6 class="ed-section-sub-title">Our Services</h6>
                        <h2 class="ed-section-title">Explore Our LPG Solutions</h2>
                    </div>

                    <div
                        class="ed-2-courses-container grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[30px] xxl:gap-[20px]">
                        <div
                            class="ed-2-single-course mix cylinders border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="https://img.freepik.com/free-photo/different-sizes-gas-cylinders-placed-stack_1160-179.jpg?w=1380&t=st=1741947574~exp=1741951174~hmac=152118219a074739ff411189c4405c48698a8c138d42c35153981176a909194a"
                                    alt="LPG Cylinders"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                            </div>

                            <div class="mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Supply</span>
                            </div>

                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="/lpg-cylinders"
                                    class="hover:text-edpurple">High-Quality LPG Cylinders</a></h5>

                            <p class="text-edgray text-[14px] mb-[24px]">
                                We offer a wide range of LPG cylinders in various sizes to meet your residential and
                                commercial needs. Our cylinders are safe, durable, and regularly inspected.
                            </p>

                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <a href="/contact-us"
                                    class="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white !py-[8px] !px-[15px]">Inquire
                                    Now</a>
                            </div>
                        </div>

                        <div
                            class="ed-2-single-course mix refills border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="https://img.freepik.com/free-photo/hand-holding-lpg-gas-refill-nozzle-close-up_35768-1178.jpg?w=1380&t=st=1741947717~exp=1741951317~hmac=2919531b598344793a8249a995111458c8c40556a9a173c85130ef98c8698377"
                                    alt="LPG Refills"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                            </div>

                            <div class="mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Reliable</span>
                            </div>

                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="/lpg-refills"
                                    class="hover:text-edpurple">Fast and Reliable LPG Refills</a></h5>

                            <p class="text-edgray text-[14px] mb-[24px]">
                                Get your LPG cylinders refilled quickly and safely by our experienced team. We ensure
                                accurate measurements and adhere to all safety protocols.
                            </p>

                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <a href="/contact-us"
                                    class="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white !py-[8px] !px-[15px]">Order
                                    Refill</a>
                            </div>
                        </div>

                        <div
                            class="ed-2-single-course mix installations border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="https://img.freepik.com/free-photo/gas-fitter-tightening-pipe-wrench_329181-1783.jpg?w=1380&t=st=1741947828~exp=1741951428~hmac=594019c89d0c590a3c15139494c14a8b939c9943957546313ffc13213b3a811c"
                                    alt="LPG Installations"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                            </div>

                            <div class="mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Professional</span>
                            </div>

                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="/lpg-installations"
                                    class="hover:text-edpurple">Expert LPG Installations</a></h5>

                            <p class="text-edgray text-[14px] mb-[24px]">
                                Our certified technicians provide safe and efficient LPG installations for homes,
                                businesses, and industrial applications.
                            </p>

                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <a href="/contact-us"
                                    class="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white !py-[8px] !px-[15px]">Request
                                    Installation</a>
                            </div>
                        </div>

                        <div
                            class="ed-2-single-course mix maintenance border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="https://img.freepik.com/free-photo/close-up-hand-wearing-protective-gloves-checking-gas-pipe_329181-2138.jpg?w=1380&t=st=1741947947~exp=1741951547~hmac=419a909a8c7e935b891c193c7a91b56831a14333f22aa244777c89111140229b"
                                    alt="LPG MaintenFance"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                            </div>

                            <div class="mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Safety
                                    First</span>
                            </div>

                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="/lpg-maintenance"
                                    class="hover:text-edpurple">LPG Maintenance & Safety Checks</a></h5>

                            <p class="text-edgray text-[14px] mb-[24px]">
                                Ensure the safety and efficiency of your LPG systems with our regular maintenance and
                                thorough safety checks.
                            </p>

                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <a href="/contact-us"
                                    class="ed-btn !bg-transparent border border-edpurple !text-edpurple hover:!bg-edpurple hover:!text-white !py-[8px] !px-[15px]">Schedule
                                    Maintenance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                class="ed-2-about bg-edoffwhite py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-[url('../assets/img/about-us-bg.png')] before:opacity-[5%] before:bg-no-repeat before:bg-cover before:bg-center before:mix-blend-multiply">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-x-[75px] gap-y-[30px]">
                        <div class="max-w-[46%] md:max-w-full grow shrink-0">
                            <div class="relative flex items-end">
                                <img src="https://img.freepik.com/free-photo/man-showing-ok-sign-near-gas-cylinders_1303-13691.jpg?w=1380&t=st=1741948803~exp=1741952403~hmac=3118111111465259473c14a1173732c42d8a46041198531182b564e255315459"
                                    alt="About Seal Tight LPG" class="border-[12px] border-white rounded-full">

                                <div
                                    class="relative shrink-0 -ml-[202px] lg:-ml-[262px] md:-ml-[202px] xs:-ml-[242px] -mb-[24px]">
                                    <img src="https://img.freepik.com/free-photo/worker-checking-gas-cylinder_1303-13688.jpg?w=1380&t=st=1741948915~exp=1741952515~hmac=c684911a79393843c29aa897a7d579c771e3c13c99806886411561f793c476d5"
                                        alt="Seal Tight LPG Operations"
                                        class="border-[8px] border-white rounded-full w-[292px] xs:w-[252px] aspect-square">
                                    <a href="https://www.youtube.com/watch?v=YOUR_YOUTUBE_VIDEO_ID"
                                        data-fslightbox="gallery"
                                        class="flex items-center justify-center w-[60px] aspect-square bg-white rounded-full text-edyellow absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] before:border before:absolute before:top-[50%] before:-translate-y-[50%] before:left-[50%] before:-translate-x-[50%] before:w-[calc(100%+15px)] before:h-[calc(100%+15px)] before:rounded-full before:transition before:duration-[400ms] hover:bg-edpurple hover:text-white hover:before:border-edpurple"><i
                                            class="fa-solid fa-play"></i></a>
                                </div>

                                <div>
                                    <img src="/assets/img/about-2-img-vector.svg" alt="vector"
                                        class="absolute pointer-events-none top-[60px] right-[65px] -z-[1]">
                                    <img src="/assets/img/about-2-img-vector-2.svg" alt="vector"
                                        class="absolute pointer-events-none -bottom-[30px] right-0 -z-[1] md:hidden">
                                </div>
                            </div>
                        </div>

                        <div class="max-w-[54%] md:max-w-full">
                            <h6 class="ed-section-sub-title">About us</h6>
                            <h2 class="ed-section-title mb-[6px]">Your Reliable Partner for <span
                                    class="inline-block font-bold relative before:absolute before:left-0 before:top-[calc(100%-6px)] before:w-[220px] before:h-[14px] before:bg-[url('../assets/img/banner-2-title-vector.svg')] before:bg-[length:100%_100%]">LPG
                                    Solutions in Nairobi</span>
                            </h2>
                            <p class="text-edgray mb-[34px]">At Seal Tight LPG Solutions, we are committed to providing
                                Nairobi and the surrounding areas with safe, efficient, and affordable Liquefied
                                Petroleum Gas. With years of experience in the industry, we have built a reputation for
                                reliability, quality products, and exceptional customer service. Our priority is the
                                safety and satisfaction of our clients, and we strive to exceed expectations in every
                                aspect of our business.</p>
                            <ul
                                class="ed-about-list font-medium text-[18px] text-edblue grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[15px] mb-[52px] *:pl-[40px] *:relative *:before:absolute *:before:left-0 *:before:-top-[3px] *:before:w-[30px] *:before:aspect-square *:before:border *:before:border-edpurple *:before:rounded-full *:before:bg-[url(../assets/img/icon/checkmark.svg)] *:before:bg-no-repeat *:before:bg-[length:15px_13px] *:before:bg-center">
                                <li>Safety First Approach</li>
                                <li>High-Quality LPG</li>
                                <li>Timely and Reliable Delivery</li>
                                <li>Expert Installation & Maintenance</li>
                                <li>Customer-Focused Service</li>
                                <li>Competitive Pricing</li>
                            </ul>
                            <a href="/about-us" class="ed-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ed-2-events py-[120px] xl:py-[80px] md:py-[60px]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div
                        class="flex flex-wrap items-end justify-between gap-x-[30px] gap-y-[15px] border-b border-[#002147]/15 pb-[32px] xxs:pb-[22px] mb-[40px] xxs:mb-[30px]">
                        <div class="left">
                            <h6 class="ed-section-sub-title">Announcements & Initiatives</h6>
                            <h2 class="ed-section-title">What's Happening at Sealtight LPG</h2>
                        </div>
                        <div
                            class="ed-2-events-slider-nav flex gap-[15px] *:w-[40px] *:h-[40px] *:rounded-full *:border *:border-[#808080]/20 *:text-black *:text-[18px]">
                            <button class="prev hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                    class="fa-solid fa-angle-left"></i></button>
                            <button class="next hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                    class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>

                    <div class="ed-2-events-slider swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <div class="relative">
                                            <img src="https://img.freepik.com/free-photo/group-diverse-people-attending-safety-seminar_53876-96759.jpg?w=1380&t=st=1741949937~exp=1741953537~hmac=409a795c79e10548c5498c63644a1137944962925c0c9711214e511148383302"
                                                alt="LPG Safety Awareness"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><i class="fa-solid fa-shield-halved"></i></span>
                                                <span>Safety</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><i class="fa-regular fa-calendar"></i></span>
                                                <span>Coming Soon</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="/lpg-safety-awareness" class="hover:text-edpurple">LPG Safety
                                                    Awareness
                                                    Campaign</a></h5>
                                            <p class="text-edgray mb-[15px]">Join our upcoming campaign to learn
                                                essential LPG
                                                safety tips for your home and business.</p>
                                            <a href="/contact-us"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Learn
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>

                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <div class="relative">
                                            <img src="https://img.freepik.com/free-photo/handshake-business-meeting-successful-negotiation_109639-3053.jpg?w=1380&t=st=1741950058~exp=1741953658~hmac=6915a7f1945861c158b8c1991c59b083d867a91b20a7835094a619804459c672"
                                                alt="Community Partnership"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <span
                                                class="absolute w-max max-w-full bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><i class="fa-solid fa-handshake"></i></span>
                                                <span>Community</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><i class="fa-regular fa-calendar"></i></span>
                                                <span>Ongoing</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="/community-initiatives" class="hover:text-edpurple">Supporting
                                                    Local
                                                    Communities</a></h5>
                                            <p class="text-edgray mb-[15px]">Learn about our ongoing initiatives to
                                                support and
                                                give back to the Nairobi community.</p>
                                            <a href="/contact-us"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Our
                                                Impact <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <div class="relative">
                                            <img src="https://img.freepik.com/free-photo/close-up-shot-gas-cylinder-with-blurred-background_181624-57181.jpg?w=1380&t=st=1741950169~exp=1741953769~hmac=63c10373126b04546a8d935a09bc5423619071341253645502a56036830a893b"
                                                alt="Special Offer"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><i class="fa-solid fa-tags"></i></span>
                                                <span>Offers</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><i class="fa-regular fa-calendar"></i></span>
                                                <span>Limited Time</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="/special-offers" class="hover:text-edpurple">Special LPG
                                                    Cylinder Offers</a></h5>
                                            <p class="text-edgray mb-[15px]">Check out our limited-time offers on
                                                various LPG
                                                cylinder sizes and refills.</p>
                                            <a href="/contact-us"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">View
                                                Deals <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>

                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <div class="relative">
                                            <img src="https://img.freepik.com/free-photo/delivery-man-giving-gas-cylinder-customer-home_1303-13693.jpg?w=1380&t=st=1741950278~exp=1741953878~hmac=69759890309a2c19c94719f9201189194c1113d29d11391697a016c92334020b"
                                                alt="Delivery Updates"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <span
                                                class="absolute w-max max-w-full bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><i class="fa-solid fa-truck-fast"></i></span>
                                                <span>Updates</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><i class="fa-regular fa-bell"></i></span>
                                                <span>New Information</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="/delivery-updates" class="hover:text-edpurple">Important
                                                    Updates
                                                    Regarding Deliveries</a></h5>
                                            <p class="text-edgray mb-[15px]">Stay informed about any changes or updates
                                                to our
                                                delivery schedules and processes.</p>
                                            <a href="/contact-us"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <div class="relative">
                                            <img src="https://img.freepik.com/free-photo/professional-plumber-repairing-gas-pipe_329181-1785.jpg?w=1380&t=st=1741950387~exp=1741953987~hmac=12c9484a921701995426c60a4441a7206f7a9909b82b211999b84c79b259a015"
                                                alt="Maintenance Tips"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><i class="fa-solid fa-screwdriver-wrench"></i></span>
                                                <span>Maintenance</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><i class="fa-regular fa-lightbulb"></i></span>
                                                <span>Useful Information</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="/lpg-maintenance-tips" class="hover:text-edpurple">Essential
                                                    LPG System
                                                    Maintenance Tips</a></h5>
                                            <p class="text-edgray mb-[15px]">Learn how to keep your LPG system running
                                                safely and
                                                efficiently with our expert tips.</p>
                                            <a href="/blog"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Visit
                                                Blog <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                class="ed-2-cta overflow-hidden bg-edpurple pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(../assets/img/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-y-[15px] items-center justify-between">
                        <div class="max-w-[600px] md:max-w-full shrink-0 relative">
                            <h3
                                class="font-semibold text-[36px] sm:text-[32px] xxs:text-[28px] text-white leading-[1.4] mb-[41px] xxs:mb-[31px]">
                                Get Reliable LPG Delivery in Nairobi Today!</h3>
                            <a href="/order-now"
                                class="ed-btn !h-[56px] !bg-white !text-black gap-[10px] hover:!bg-edyellow hover:!text-edblue">Order
                                Now <span class="icon"><i class="fa-solid fa-fire"></i></span></a>

                            <img src="/assets/img/cta-2-txt-vector.svg" alt="vector"
                                class="absolute bottom-[10px] left-[37%] xs:left-[75%]">
                        </div>

                        <div class="mr-[40px] lg:mr-0 relative z-[1] shrink-0">
                            <img src="https://img.freepik.com/free-photo/delivery-man-uniform-carrying-gas-cylinder-trolley_1303-13694.jpg?w=1380&t=st=1741950908~exp=1741954508~hmac=49a0a8a6e5524996894812699439759b2358023679b6f3038948ef123957c239"
                                alt="LPG Delivery">
                            <div
                                class="aspect-square w-[386px] border-[57px] border-edyellow rounded-full absolute bottom-0 right-[25%] translate-y-[50%] -z-[1]">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="grid grid-cols-2 md:grid-cols-1 gap-x-[60px] gap-y-[25px] items-center">
                        <div class="grow shrink-0">
                            <div class="relative flex items-end md:justify-center mb-[140px]">
                                <img src="https://img.freepik.com/free-photo/happy-young-woman-holding-red-gas-cylinder-smiling-outdoors_1303-28799.jpg?w=1380&t=st=1741951635~exp=1741955235~hmac=51507932993a988a41132380389b8a941640a817c493a8698611e084999703c9"
                                    alt="LPG Cylinder" class="border-[8px] border-white rounded-[8px] shrink-0">
                                <img src="https://img.freepik.com/free-photo/man-wearing-protective-gloves-checking-gas-cylinder_1303-28798.jpg?w=1380&t=st=1741951711~exp=1741955311~hmac=80d438a3981542491334a6d3b13a9907989e97093a750841587662641543f123"
                                    alt="LPG Safety Check"
                                    class="border-[8px] border-white rounded-[8px] shrink-0 -ml-[202px] lg:-ml-[272px] -mb-[140px]">

                                <div>
                                    <img src="/assets/img/about-2-img-vector.svg" alt="vector"
                                        class="absolute pointer-events-none rounded-full top-[60px] right-[110px] -z-[1]">
                                    <img src="/assets/img/about-2-img-vector.svg" alt="vector"
                                        class="absolute pointer-events-none rounded-full top-[100%] left-[30px] -z-[1]">
                                    <img src="/assets/img/faq-img-vector.svg" alt="vector"
                                        class="absolute pointer-events-none top-[52%] left-[20px] -z-[1]">
                                    <img src="/assets/img/banner-2-img-vector-2.svg" alt="vector"
                                        class="absolute pointer-events-none top-[30px] right-[50px]">
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6 class="ed-section-sub-title">Frequently Asked Questions</h6>
                            <h2 class="ed-section-title mb-[26px]">Common Questions About Sealtight LPG</h2>

                            <div class="ed-accordion space-y-[20px]">
                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)] open">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            How do I place an order for an LPG cylinder?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">You can easily place an order
                                            through our
                                            website on the "Order Now" page, by calling our customer service hotline, or
                                            by visiting
                                            one of our authorized dealers in Nairobi.</p>
                                    </div>
                                </div>

                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            What safety precautions should I take when using LPG?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">Always ensure proper ventilation,
                                            keep cylinders
                                            upright and away from heat sources, check for leaks regularly using soapy
                                            water, and never
                                            attempt to modify the cylinder or its connections. Refer to our safety
                                            guidelines for
                                            detailed information.</p>
                                    </div>
                                </div>

                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            What are the different sizes of LPG cylinders you offer?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">We offer a range of cylinder sizes
                                            to meet
                                            various needs, including 6kg, 13kg, and larger commercial sizes. Please
                                            visit our "Products"
                                            page for a complete list and specifications.</p>
                                    </div>
                                </div>

                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            What is your delivery process and what areas in Nairobi do you cover?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">Our delivery team ensures prompt
                                            and safe
                                            delivery across most areas within Nairobi County. Once your order is placed,
                                            we will
                                            provide an estimated delivery time. You can find more details on our
                                            "Delivery Information"
                                            page.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="/assets/img/faq-2-vector.svg" alt="vector"
                    class="absolute -z-[1] pointer-events-none right-0 bottom-[255px]">
            </section>

            <section class="bg-edoffwhite py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="text-center mb-[46px] lg:mb-[36px] md:mb-[26px]">
                        <h2 class="ed-section-sub-title">OUR TEAM</h2>
                        <h6 class="ed-section-title">Meet Our Experienced Professionals</h6>
                    </div>

                    <div
                        class="grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 gap-[30px] md:gap-[15px]">
                        <div class="text-center group">
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="https://img.freepik.com/free-photo/portrait-smiling-handsome-man-isolated_171377-3232.jpg?w=1380&t=st=1741952148~exp=1741955748~hmac=821980c199996a8a98c14a1c124a8481a78a193a5963486958992b459e495a67"
                                    alt="Team Member Image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <div
                                    class="et-member-socials absolute right-[20px] md:right-[15px] top-[20px] md:top-[15px] z-[1]">
                                    <div
                                        class="et-member-socials__icon w-[40px] md:w-[35px] aspect-square rounded-full border border-white flex items-center justify-center group-hover:bg-white">
                                        <svg width="17" height="20" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                                                class="fill-white group-hover:fill-edpurple duration-[400ms]" />
                                        </svg>
                                    </div>
                                    <div
                                        class="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] top-[calc(100%+8px)] -translate-y-[50px] group-hover:translate-y-0 group-hover:opacity-100">
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a href="/team/john-doe"
                                        class="hover:text-edyellow">John Doe</a></h6>
                                <span class="text-edgray">Safety Officer</span>
                            </div>
                        </div>

                        <div class="text-center group">
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="https://img.freepik.com/free-photo/young-woman-with-clipboard-showing-thumb-up_1303-21204.jpg?w=1380&t=st=1741952238~exp=1741955838~hmac=4633191b885630f33697751af4499c190429f6216096f016387b59910b617143"
                                    alt="Team Member Image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <div
                                    class="et-member-socials absolute right-[20px] md:right-[15px] top-[20px] md:top-[15px] z-[1]">
                                    <div
                                        class="et-member-socials__icon w-[40px] md:w-[35px] aspect-square rounded-full border border-white flex items-center justify-center group-hover:bg-white">
                                        <svg width="17" height="20" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432
8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                                                class="fill-white group-hover:fill-edpurple duration-[400ms]" />
                                        </svg>
                                    </div>
                                    <div
                                        class="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] top-[calc(100%+8px)] -translate-y-[50px] group-hover:translate-y-0 group-hover:opacity-100">
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a href="/team/jane-doe"
                                        class="hover:text-edyellow">Jane Doe</a></h6>
                                <span class="text-edgray">Customer Service Manager</span>
                            </div>
                        </div>

                        <div class="text-center group">
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="https://img.freepik.com/free-photo/confident-businessman-working-his-office_1303-20987.jpg?w=1380&t=st=1741952345~exp=1741955945~hmac=c2d5a1132c18316148f31149517491857939468658c298494c8994113524a937"
                                    alt="Team Member Image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <div
                                    class="et-member-socials absolute right-[20px] md:right-[15px] top-[20px] md:top-[15px] z-[1]">
                                    <div
                                        class="et-member-socials__icon w-[40px] md:w-[35px] aspect-square rounded-full border border-white flex items-center justify-center group-hover:bg-white">
                                        <svg width="17" height="20" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                                                class="fill-white group-hover:fill-edpurple duration-[400ms]" />
                                        </svg>
                                    </div>
                                    <div
                                        class="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] top-[calc(100%+8px)] -translate-y-[50px] group-hover:translate-y-0 group-hover:opacity-100">
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a href="/team/peter-jones"
                                        class="hover:text-edyellow">Peter Jones</a></h6>
                                <span class="text-edgray">Logistics Coordinator</span>
                            </div>
                        </div>

                        <div class="text-center group">
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="https://img.freepik.com/free-photo/young-woman-with-notebook-showing-okay-sign_1303-21203.jpg?w=1380&t=st=1741952433~exp=1741956033~hmac=a16a7a641516f7d7124f286672b210291c67116234d033774f13c53131057686"
                                    alt="Team Member Image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <div
                                    class="et-member-socials absolute right-[20px] md:right-[15px] top-[20px] md:top-[15px] z-[1]">
                                    <div
                                        class="et-member-socials__icon w-[40px] md:w-[35px] aspect-square rounded-full border border-white flex items-center justify-center group-hover:bg-white">
                                        <svg width="17" height="20" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.89361 9.41703C9.22284 9.41703 8.61849 9.70668 8.19906 10.1675L4.42637 7.83088C4.52995 7.56611 4.58305 7.28429 4.58294 6.99999C4.58307 6.71568 4.52997 6.43386 4.42637 6.16909L8.19906 3.83238C8.61851 4.29318 9.22284 4.58297 9.89361 4.58297C11.1572 4.58297 12.1851 3.55501 12.1851 2.29143C12.1851 1.02785 11.1572 0 9.89361 0C8.63005 0 7.60209 1.02796 7.60209 2.29154C7.60204 2.57583 7.65514 2.85763 7.75866 3.1224L3.98608 5.45903C3.56663 4.99824 2.96231 4.70845 2.29154 4.70845C1.02796 4.70845 0 5.73652 0 6.99999C0 8.26354 1.02796 9.29152 2.29154 9.29152C2.96228 9.29152 3.56666 9.00185 3.98608 8.54094L7.75869 10.8776C7.65515 11.1424 7.60204 11.4242 7.60209 11.7085C7.60209 12.972 8.63003 14 9.89361 14C11.1572 14 12.1851 12.972 12.1851 11.7086C12.1851 10.445 11.1572 9.41703 9.89361 9.4

           41703ZM8.43766 2.29154C8.43766 1.48873 9.09082 0.835596 9.89361 0.835596C10.6964 0.835596 11.3495 1.48873 11.3495 2.29154C11.3495 3.09435 10.6964 3.74748 9.89361 3.74748C9.09079 3.74748 8.43766 3.09432 8.43766 2.29154ZM2.29154 8.45593C1.48862 8.45593 0.835487 7.80277 0.835487 6.99999C0.835487 6.1972 1.48862 5.54404 2.29154 5.54404C3.09435 5.54404 3.74737 6.1972 3.74737 6.99999C3.74737 7.80277 3.09432 8.45593 2.29154 8.45593ZM8.43766 11.7085C8.43766 10.9057 9.09082 10.2525 9.89361 10.2525C10.6964 10.2525 11.3495 10.9057 11.3495 11.7084C11.3495 12.5112 10.6964 13.1644 9.89361 13.1644C9.09079 13.1644 8.43766 12.5112 8.43766 11.7084V11.7085Z"
                                                class="fill-white group-hover:fill-edpurple duration-[400ms]" />
                                        </svg>
                                    </div>
                                    <div
                                        class="et-speaker__socials flex flex-col gap-[8px] absolute -z-[2] text-[14px] opacity-0 transition duration-[400ms] top-[calc(100%+8px)] -translate-y-[50px] group-hover:translate-y-0 group-hover:opacity-100">
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"
                                            class="border bg-white text-[18px] text-edpurple w-[40px] md:w-[35px] aspect-square flex items-center justify-center rounded-full hover:border-edpurple hover:bg-transparent"><i
                                                class="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a href="/team/sarah-lee"
                                        class="hover:text-edyellow">Sarah Lee</a></h6>
                                <span class="text-edgray">Sales Representative</span>
                            </div>
                        </div>
                    </div>

                    <div class="lg:hidden">
                        <div
                            class="pointer-events-none w-[434px] aspect-square rounded-full bg-edpurple/15 absolute -z-[1] top-0 left-[56px] -translate-y-[50%]">
                        </div>
                        <div
                            class="pointer-events-none w-[694px] aspect-square rounded-full bg-edpurple/10 absolute -z-[1] bottom-0 right-[21px] translate-y-[50%]">
                        </div>
                        <img src="/assets/img/admission-vector-2.svg" alt="vector"
                            class="absolute -z-[1] bottom-[154px] right-[58px]">
                        <img src="/assets/img/instructor-vector.svg" alt="vector"
                            class="absolute -z-[1] top-[120px] left-0">
                    </div>
                </div>
            </section>

            <section class=" py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-[30px]">
                        <div class="max-w-[370px] md:max-w-full shrink-0">
                            <h6 class="ed-section-sub-title">Testimonials</h6>
                            <h2 class="ed-section-title mb-[36px] md:mb-[26px]">What Our Customers Say About Us</h2>
                            <div
                                class="ed-2-testimonial-slider-nav flex gap-[15px] *:w-[40px] *:h-[40px] *:rounded-full *:border *:border-[#808080]/20 *:text-edpurple *:text-[18px]">
                                <button class="prev hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                        class="fa-solid fa-angle-left"></i></button>
                                <button class="next hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                        class="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>

                        <div>
                            <div class="ed-2-testimonial-slider swiper max-w-[1200px]">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="https://img.freepik.com/free-photo/happy-bearded-man-showing-thumb-up_1194-183.jpg?w=1380&t=st=1741956890~exp=1741960490~hmac=d26292610820362c78c429a08209a6995819c98432c990490149f8133992c674"
                                                    alt="customer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            David Miller</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">
                                                            Home User</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">
                                                Sealtight LPG has been a reliable and safe source for our home gas
                                                needs. Their
                                                delivery is always on time, and the team is very professional. We feel
                                                secure using
                                                their products.
                                            </p>

                                            <div
                                                class="inline-flex items-center gap-[6px] border border-edyellow rounded-full px-[10px] h-[40px]">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="https://img.freepik.com/free-photo/portrait-successful-mid-adult-businessman-with-crossed-arms_1262-18689.jpg?w=1380&t=st=1741957001~exp=1741960601~hmac=8f616711543f9992965301b6a21131430410d989423f2212287595615796345f"
                                                    alt="customer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            Sarah Williams</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">
                                                            Restaurant Owner</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">
                                                As a restaurant owner, consistent and safe LPG supply is crucial.
                                                Sealtight LPG has
                                                never let us down. Their bulk delivery options and safety standards are
                                                top-notch,
                                                making them a valuable partner for our business.
                                            </p>

                                            <div
                                                class="inline-flex items-center gap-[6px] border border-edyellow rounded-full px-[10px] h-[40px]">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="https://img.freepik.com/free-photo/young-beautiful-woman-wearing-white-sweater-posing-outdoors_273609-3565.jpg?w=1380&t=st=1741957108~exp=1741960708~hmac=9926f594a661098711f0111576418671484a3593954e3780904337d04c3a9494"
                                                    alt="customer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            Michael Brown</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">
                                                            Small Business Owner</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">
                                                Sealtight LPG has been instrumental in the smooth operation of our small
                                                business.
                                                Their flexible delivery schedules and attention to safety protocols are
                                                commendable.
                                                We highly recommend their services.
                                            </p>

                                            <div
                                                class="inline-flex items-center gap-[6px] border border-edyellow rounded-full px-[10px] h-[40px]">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                                <img src="/assets/img/icon/star.svg" alt="star">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="/assets/img/testimonial-2-vector.svg" alt="vector"
                    class="absolute -z-[1] pointer-events-none left-[44px] bottom-[60px]">
            </section>

            <section class="py-[80px] bg-edblue">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-wrap gap-[70px] lg:gap-[50px] *:flex-auto">
                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <i class="fa-solid fa-truck-fast fa-2xl mb-[7px]" style="color: #ffffff;"></i>
                            <h3 class="font-bold text-[36px]">25+</h3>
                            <h6 class="font-medium">Years of Reliable Service</h6>
                        </div>

                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <i class="fa-solid fa-users fa-2xl mb-[7px]" style="color: #ffffff;"></i>
                            <h3 class="font-bold text-[36px]">10,000+</h3>
                            <h6 class="font-medium">Satisfied Customers</h6>
                        </div>

                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <i class="fa-solid fa-shield-check fa-2xl mb-[7px]" style="color: #ffffff;"></i>
                            <h3 class="font-bold text-[36px]">100%</h3>
                            <h6 class="font-medium">Safety Compliance Rate</h6>
                        </div>

                        <div
                            class="text-white text-center md:w-[45%] shrink-0 last:pr-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <i class="fa-solid fa-location-dot fa-2xl mb-[7px]" style="color: #ffffff;"></i>
                            <h3 class="font-bold text-[36px]">Wide</h3>
                            <h6 class="font-medium">Service Area Coverage</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-[120px] xl:mt-[80px] md:mt-[60px]">
                <div
                    class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px] bg-[url('../assets/img/cta-lpg-bg.jpg')] bg-no-repeat bg-cover bg-center rounded-[20px] overflow-hidden text-center py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] before:absolute before:inset-0 before:bg-edblue/80 before:-z-[1]">
                    <div class="max-w-[570px] mx-auto">
                        <h6 class="ed-section-sub-title ed-section-sub-title--white mr-[48px]">Your Trusted Partner</h6>
                        <h2 class="ed-section-title !text-white mb-[18px]">Experience Safe and Reliable LPG Services!
                        </h2>
                        <a href="/contact-us"
                            class="ed-btn !h-[56px] !bg-white !text-black gap-[10px] hover:!bg-edyellow hover:!text-edblue">Request
                            a
                            Quote <span class="icon"><i class="fa-solid fa-arrow-right-long"></i></span></a>
                    </div>
                </div>
            </section>

            <section class="pt-[120px] xl:pt-[80px] md:pt-[60px]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex flex-wrap items-end justify-between mb-[60px] lg:mb-[40px] gap-[15px]">
                        <div class="max-w-[35%] md:max-w-[40%] sm:max-w-none">
                            <h6 class="ed-section-sub-title">Latest Updates</h6>
                            <h2 class="ed-section-title">Safety Tips & Company News</h2>
                        </div>

                        <a href="/news"
                            class="ed-btn !h-[56px] gap-[10px] border border-[#E5E5E5] !bg-transparent !text-edpurple hover:!bg-edpurple hover:!border-edpurple hover:!text-white">View
                            All Updates <span><i class="fa-solid fa-arrow-right-long"></i></span></a>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                        <div class="rounded-[20px] bg-edoffwhite overflow-hidden">
                            <div class="relative">
                                <img src="https://via.placeholder.com/570x290" alt="safety tips"
                                    class="w-full aspect-[570/290] object-cover">
                                <div
                                    class="absolute top-[30px] left-[30px] bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                    <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">11</span>
                                    <span class="px-[11px] py-[2px] block">Apr</span>
                                </div>
                            </div>

                            <div class="px-[30px] xxs:px-[20px] py-[22px] pt-[27px]">
                                <div class="flex items-center gap-[16px] mb-[9px]">
                                    <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><i class="fa-solid fa-user-tie" style="color: #800080;"></i></span>
                                        <span>By Sealtight Admin</span>
                                    </div>

                                    <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><i class="fa-regular fa-comment" style="color: #808080;"></i></span>
                                        <span>No Comments Yet</span>
                                    </div>
                                </div>
                                <h5 class="font-medium text-[20px]"><a href="/news/safe-lpg-handling"
                                        class="hover:text-edpurple">Important Safety Guidelines for Handling LPG
                                        Cylinders at
                                        Home</a></h5>
                            </div>
                        </div>

                        <div class="bg-edoffwhite rounded-[20px] p-[30px] xxs:p-[20px] space-y-[26px]">
                            <div
                                class="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                                <div class="shrink-0 rounded-[10px] overflow-hidden">
                                    <img src="https://via.placeholder.com/142x153" alt="delivery update"
                                        class="w-[142px] aspect-[142/153] object-cover">
                                </div>

                                <div>
                                    <div class="flex items-center gap-[16px] mb-[9px]">
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><i class="fa-solid fa-bullhorn" style="color: #800080;"></i></span>
                                            <span>Company Announcement</span>
                                        </div>

                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><i class="fa-regular fa-calendar" style="color: #808080;"></i></span>
                                            <span>Today</span>
                                        </div>
                                    </div>
                                    <h5 class="font-medium text-[20px] mb-[17px]"><a href="/news/new-delivery-schedule"
                                            class="hover:text-edpurple">Updated LPG Delivery Schedule for Nairobi
                                            Area</a></h5>

                                    <div
                                        class="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                        <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">11</span>
                                        <span class="px-[11px] py-[2px] block">Apr</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                                <div class="shrink-0 rounded-[10px] overflow-hidden">
                                    <img src="https://via.placeholder.com/142x153" alt="maintenance tips"
                                        class="w-[142px] aspect-[142/153] object-cover">
                                </div>

                                <div>
                                    <div class="flex items-center gap-[16px] mb-[9px]">
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><i class="fa-solid fa-screwdriver-wrench"
                                                    style="color: #800080;"></i></span>
                                            <span>Safety Tips</span>
                                        </div>

                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><i class="fa-regular fa-clock" style="color: #808080;"></i></span>
                                            <span>Few Hours Ago</span>
                                        </div>
                                    </div>
                                    <h5 class="font-medium text-[20px] mb-[17px]"><a href="/news/lpg-tank-maintenance"
                                            class="hover:text-edpurple">Simple Steps to Ensure the Longevity of Your LPG
                                            Tank</a></h5>

                                    <div
                                        class="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                        <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">11</span>
                                        <span class="px-[11px] py-[2px] block">Apr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                <div class="ed-partners-slider swiper my-[100px] xl:my-[70px] md:my-[50px]">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/TotalEnergies.svg/2560px-TotalEnergies.svg.png"
                                alt="TotalEnergies Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/National_Oil_Corporation_of_Kenya_logo.svg/1200px-National_Oil_Corporation_of_Kenya_logo.svg.png"
                                alt="National Oil Corporation of Kenya Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vivo_Energy_Logo.svg/1200px-Vivo_Energy_Logo.svg.png"
                                alt="Vivo Energy (Shell & Engen) Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oilibya_logo.svg/1200px-Oilibya_logo.svg.png"
                                alt="Oilibya Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/KenolKobil_Logo.svg/1200px-KenolKobil_Logo.svg.png"
                                alt="KenolKobil Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hashi_Energy_Logo.svg/1200px-Hashi_Energy_Logo.svg.png"
                                alt="Hashi Energy Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/TotalEnergies.svg/2560px-TotalEnergies.svg.png"
                                alt="TotalEnergies Logo" class="max-h-[80px] object-contain"></div>
                        <div class="swiper-slide"><img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/National_Oil_Corporation_of_Kenya_logo.svg/1200px-National_Oil_Corporation_of_Kenya_logo.svg.png"
                                alt="National Oil Corporation of Kenya Logo" class="max-h-[80px] object-contain"></div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style></style>