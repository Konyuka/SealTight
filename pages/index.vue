<script setup>


const services = ref([
    {
        name:'',
        icon:''
    }
]) 
</script>

<template>
    <div>
        <main>
            <!-- BANNER SECTION START -->
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
            <!-- BANNER SECTION END -->


            <!-- CATEGORIES SECTION START -->
            <div class="ed-2-categories -mt-[98px] relative z-[2]">
                <div
                    class="mx-[15.8%] xxxl:mx-[9.8%] xxl:mx-[3.5%] bg-white p-[40px] sm:p-[30px] xxs:p-[20px] rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                    <div class="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-[20px]">
                        <!-- single category -->
                        <a href="course-grid.html"
                            class="border border-[#e5e5e5] rounded-[10px] py-[16px] px-[20px] flex sm:flex-col items-center sm:items-start gap-y-[15px] gap-x-[20px] hover:bg-[#EA703B] hover:border-[#EA703B] group">
                            <!-- icon -->
                            <div
                                class="bg-[#EA703B] shrink-0 w-[84px] sm:w-[64px] aspect-square rounded-md p-[14px] duration-[400ms] flex items-center justify-center group-hover:bg-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M32 7.5V2.8125C32 1.26169 30.7383 0 29.1875 0H2.8125C1.26169 0 0 1.26169 0 2.8125V7.5H32ZM21.625 3.75H27.25C27.7677 3.75 28.1875 4.16975 28.1875 4.6875C28.1875 5.20525 27.7677 5.625 27.25 5.625H21.625C21.1073 5.625 20.6875 5.20525 20.6875 4.6875C20.6875 4.16975 21.1073 3.75 21.625 3.75ZM12.25 3.75C12.7677 3.75 13.1875 4.16975 13.1875 4.6875C13.1875 5.20525 12.7677 5.625 12.25 5.625C11.7323 5.625 11.3125 5.20525 11.3125 4.6875C11.3125 4.16975 11.7323 3.75 12.25 3.75ZM8.5 3.75C9.01775 3.75 9.4375 4.16975 9.4375 4.6875C9.4375 5.20525 9.01775 5.625 8.5 5.625C7.98225 5.625 7.5625 5.20525 7.5625 4.6875C7.5625 4.16975 7.98225 3.75 8.5 3.75ZM4.75 3.75C5.26775 3.75 5.6875 4.16975 5.6875 4.6875C5.6875 5.20525 5.26775 5.625 4.75 5.625C4.23225 5.625 3.8125 5.20525 3.8125 4.6875C3.8125 4.16975 4.23225 3.75 4.75 3.75ZM0 9.375V29.0625C0 30.6133 1.26169 31.875 2.8125 31.875H29.1875C30.7383 31.875 32 30.6133 32 29.0625V9.375H0ZM10.9606 22.7054C11.365 23.0289 11.4305 23.6188 11.1071 24.0231C10.7837 24.4274 10.1936 24.493 9.78938 24.1695L5.10187 20.4195C4.63319 20.0447 4.63287 19.3305 5.10187 18.9554L9.78938 15.2054C10.1935 14.8819 10.7836 14.9474 11.1071 15.3518C11.4305 15.7561 11.365 16.3461 10.9606 16.6694L7.18825 19.6875L10.9606 22.7054ZM19.6742 13.4943L14.0492 26.6193C13.8453 27.0951 13.2943 27.3158 12.8182 27.1117C12.3423 26.9077 12.1218 26.3566 12.3258 25.8807L17.9508 12.7557C18.1548 12.2798 18.7059 12.0594 19.1818 12.2633C19.6577 12.4672 19.8782 13.0184 19.6742 13.4943ZM26.8981 20.4196L22.2106 24.1696C21.807 24.4926 21.2169 24.4281 20.8929 24.0232C20.5695 23.6189 20.635 23.0289 21.0394 22.7055L24.8118 19.6875L21.0394 16.6696C20.635 16.3461 20.5695 15.7562 20.8929 15.3519C21.2163 14.9476 21.8063 14.882 22.2106 15.2055L26.8981 18.9555C27.3668 19.3303 27.3671 20.0444 26.8981 20.4196Z"
                                        class="fill-white group-hover:fill-[#EA703B]" />
                                </svg>
                            </div>
                            <!-- text -->
                            <div>
                                <h5
                                    class="font-semibold text-[20px] text-edblue duration-[400ms] group-hover:text-white">
                                    Development</h5>
                                <h6 class="text-[#808080] duration-[400ms] group-hover:text-white">3 Courses</h6>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <!-- CATEGORIES SECTION END -->


            <!-- COURSES SECTION START -->
            <section class="ed-2-courses py-[120px] xl:py-[80px] md:py-[60px]">
                <div class="mx-[9.2%] xxxl:mx-[8.2%] xxl:mx-[3%]">
                    <!-- section heading -->
                    <div class="text-center mb-[21px]">
                        <h6 class="ed-section-sub-title">Our Courses</h6>
                        <h2 class="ed-section-title">Edutics Courses</h2>
                    </div>

                    <div
                        class="ed-2-courses-filter-navs flex flex-wrap justify-center gap-[10px] mb-[40px] xs:mb-[30px] pb-[30px] xs:pb-[20px] border-b border-[#002147]/15 mx-[200px] lg:mx-[100px] md:mx-[12px] *:border *:border-edpurple *:rounded-[6px] *:py-[5px] *:px-[10px] *:text-edpurple *:font-medium *:text-[14px]">
                        <button class="hover:bg-edpurple hover:text-white" data-filter="all">All</button>
                        <button class="hover:bg-edpurple hover:text-white" data-filter=".personal-skill">Personal
                            Skill</button>
                        <button class="hover:bg-edpurple hover:text-white" data-filter=".web-dev">Web
                            Development</button>
                        <button class="hover:bg-edpurple hover:text-white" data-filter=".ui-ux-design">UX/UI
                            Design</button>
                        <button class="hover:bg-edpurple hover:text-white" data-filter=".data-science">Data
                            Science</button>
                        <button class="hover:bg-edpurple hover:text-white" data-filter=".finance">Finance</button>
                    </div>

                    <!-- course cards -->
                    <div
                        class="ed-2-courses-container grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[30px] xxl:gap-[20px]">
                        <!-- single course -->
                        <div
                            class="ed-2-single-course mix personal-skill border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <!-- course image  -->
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="/assets/img/course-1.jpg" alt="Course Image"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                                <span
                                    class="absolute bg-edyellow px-[10px] h-[33px] flex gap-[8px] items-center top-[16px] left-[16px] rounded-[6px]">
                                    <span class="icon"><img src="/assets/img/icon/clock.svg" alt="icon"></span>
                                    <span class="txt">8h 30m</span>
                                </span>
                            </div>

                            <!-- course infos -->
                            <div class="flex justify-between items-center mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Expert</span>
                                <span class="text-edpurple font-semibold text-[20px]">$59.00</span>
                            </div>

                            <!-- course title -->
                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="course-details.html"
                                    class="hover:text-edpurple">Financial Analyst Training & Investing Course</a></h5>

                            <!-- course stats -->
                            <div class="flex flex-wrap items-center gap-x-[30px] gap-y-[10px]">
                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/user-group.svg" alt="icon"></span>
                                    <span class="txt">169 Students</span>
                                </div>

                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/lesson.svg" alt="icon"></span>
                                    <span class="txt">12 Lesson</span>
                                </div>
                            </div>

                            <!-- course footer -->
                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <!-- course author -->
                                <div class="flex items-center gap-[8px]">
                                    <img src="/assets/img/user.png" alt="Course Author Image"
                                        class="w-[34px] aspect-square object-cover">
                                    <a href="teacher-details.html" class="hover:text-edpurple">Jane Cooper</a>
                                </div>

                                <!-- course rating -->
                                <div class="flex gap-[6px]">
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#808080]"><i class="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                        </div>

                        <!-- single course -->
                        <div
                            class="ed-2-single-course mix web-dev data-science border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <!-- course image  -->
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="/assets/img/course-2.jpg" alt="Course Image"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                                <span
                                    class="absolute bg-edyellow px-[10px] h-[33px] flex gap-[8px] items-center top-[16px] left-[16px] rounded-[6px]">
                                    <span class="icon"><img src="/assets/img/icon/clock.svg" alt="icon"></span>
                                    <span class="txt">8h 30m</span>
                                </span>
                            </div>

                            <!-- course infos -->
                            <div class="flex justify-between items-center mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Expert</span>
                                <span class="text-edpurple font-semibold text-[20px]">$59.00</span>
                            </div>

                            <!-- course title -->
                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="course-details.html"
                                    class="hover:text-edpurple">Financial Analyst Training & Investing Course</a></h5>

                            <!-- course stats -->
                            <div class="flex flex-wrap items-center gap-x-[30px] gap-y-[10px]">
                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/user-group.svg" alt="icon"></span>
                                    <span class="txt">169 Students</span>
                                </div>

                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/lesson.svg" alt="icon"></span>
                                    <span class="txt">12 Lesson</span>
                                </div>
                            </div>

                            <!-- course footer -->
                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <!-- course author -->
                                <div class="flex items-center gap-[8px]">
                                    <img src="/assets/img/user.png" alt="Course Author Image"
                                        class="w-[34px] aspect-square object-cover">
                                    <a href="teacher-details.html" class="hover:text-edpurple">Jane Cooper</a>
                                </div>

                                <!-- course rating -->
                                <div class="flex gap-[6px]">
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#808080]"><i class="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                        </div>

                        <!-- single course -->
                        <div
                            class="ed-2-single-course mix ui-ux-design border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <!-- course image  -->
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="/assets/img/course-3.jpg" alt="Course Image"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                                <span
                                    class="absolute bg-edyellow px-[10px] h-[33px] flex gap-[8px] items-center top-[16px] left-[16px] rounded-[6px]">
                                    <span class="icon"><img src="/assets/img/icon/clock.svg" alt="icon"></span>
                                    <span class="txt">8h 30m</span>
                                </span>
                            </div>

                            <!-- course infos -->
                            <div class="flex justify-between items-center mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Expert</span>
                                <span class="text-edpurple font-semibold text-[20px]">$59.00</span>
                            </div>

                            <!-- course title -->
                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="course-details.html"
                                    class="hover:text-edpurple">Financial Analyst Training & Investing Course</a></h5>

                            <!-- course stats -->
                            <div class="flex flex-wrap items-center gap-x-[30px] gap-y-[10px]">
                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/user-group.svg" alt="icon"></span>
                                    <span class="txt">169 Students</span>
                                </div>

                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/lesson.svg" alt="icon"></span>
                                    <span class="txt">12 Lesson</span>
                                </div>
                            </div>

                            <!-- course footer -->
                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <!-- course author -->
                                <div class="flex items-center gap-[8px]">
                                    <img src="/assets/img/user.png" alt="Course Author Image"
                                        class="w-[34px] aspect-square object-cover">
                                    <a href="teacher-details.html" class="hover:text-edpurple">Jane Cooper</a>
                                </div>

                                <!-- course rating -->
                                <div class="flex gap-[6px]">
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#808080]"><i class="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                        </div>

                        <!-- single course -->
                        <div
                            class="ed-2-single-course mix finance border border-[#e5e5e5] rounded-[10px] p-[20px] group">
                            <!-- course image  -->
                            <div class="relative overflow-hidden rounded-[10px] mb-[24px]">
                                <img src="/assets/img/course-4.jpg" alt="Course Image"
                                    class="aspect-[330/223] w-full object-cover group-hover:scale-110">
                                <span
                                    class="absolute bg-edyellow px-[10px] h-[33px] flex gap-[8px] items-center top-[16px] left-[16px] rounded-[6px]">
                                    <span class="icon"><img src="/assets/img/icon/clock.svg" alt="icon"></span>
                                    <span class="txt">8h 30m</span>
                                </span>
                            </div>

                            <!-- course infos -->
                            <div class="flex justify-between items-center mb-[16px]">
                                <span
                                    class="inline-flex items-center justify-center border border-[#e5e5e5] px-[10px] h-[33px] rounded-[6px] font-medium text-[#808080] text-[14px]">Expert</span>
                                <span class="text-edpurple font-semibold text-[20px]">$59.00</span>
                            </div>

                            <!-- course title -->
                            <h5 class="font-semibold text-[20px] text-edblue mb-[23px]"><a href="course-details.html"
                                    class="hover:text-edpurple">Financial Analyst Training & Investing Course</a></h5>

                            <!-- course stats -->
                            <div class="flex flex-wrap items-center gap-x-[30px] gap-y-[10px]">
                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/user-group.svg" alt="icon"></span>
                                    <span class="txt">169 Students</span>
                                </div>

                                <div class="flex items-center gap-[8px] text-[14px] text-edgray">
                                    <span class="icon"><img src="/assets/img/icon/lesson.svg" alt="icon"></span>
                                    <span class="txt">12 Lesson</span>
                                </div>
                            </div>

                            <!-- course footer -->
                            <div
                                class="flex flex-wrap gap-x-[20px] gap-y-[15px] justify-between items-center border-t border-[#E5E5E5] pt-[24px] mt-[24px]">
                                <!-- course author -->
                                <div class="flex items-center gap-[8px]">
                                    <img src="/assets/img/user.png" alt="Course Author Image"
                                        class="w-[34px] aspect-square object-cover">
                                    <a href="teacher-details.html" class="hover:text-edpurple">Jane Cooper</a>
                                </div>

                                <!-- course rating -->
                                <div class="flex gap-[6px]">
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#F8CB1E]"><i class="fa-solid fa-star"></i></span>
                                    <span class="text-[#808080]"><i class="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- COURSES SECTION END -->


            <!-- ABOUT SECTION START -->
            <section
                class="ed-2-about bg-edoffwhite py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-[url('../assets/img/about-us-bg.png')] before:opacity-[5%] before:bg-no-repeat before:bg-cover before:bg-center before:mix-blend-multiply">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-x-[75px] gap-y-[30px]">
                        <!-- left -->
                        <div class="max-w-[46%] md:max-w-full grow shrink-0">
                            <div class="relative flex items-end">
                                <img src="/assets/img/about-2-image-1.png" alt="About Image"
                                    class="border-[12px] border-white rounded-full">

                                <!-- video btn -->
                                <div
                                    class="relative shrink-0 -ml-[202px] lg:-ml-[262px] md:-ml-[202px] xs:-ml-[242px] -mb-[24px]">
                                    <img src="/assets/img/about-2-image-2.png" alt="About Image"
                                        class="border-[8px] border-white rounded-full w-[292px] xs:w-[252px] aspect-square">
                                    <a href="https://youtu.be/5ppDzM8m9lI?si=zml3HbV176DBsZlg" data-fslightbox="gallery"
                                        class="flex items-center justify-center w-[60px] aspect-square bg-white rounded-full text-edyellow absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] before:border before:absolute before:top-[50%] before:-translate-y-[50%] before:left-[50%] before:-translate-x-[50%] before:w-[calc(100%+15px)] before:h-[calc(100%+15px)] before:rounded-full before:transition before:duration-[400ms] hover:bg-edpurple hover:text-white hover:before:border-edpurple"><i
                                            class="fa-solid fa-play"></i></a>
                                </div>

                                <!-- vectors -->
                                <div>
                                    <img src="/assets/img/about-2-img-vector.svg" alt="vector"
                                        class="absolute pointer-events-none top-[60px] right-[65px] -z-[1]">
                                    <img src="/assets/img/about-2-img-vector-2.svg" alt="vector"
                                        class="absolute pointer-events-none -bottom-[30px] right-0 -z-[1] md:hidden">
                                </div>
                            </div>
                        </div>

                        <!-- right -->
                        <div class="max-w-[54%] md:max-w-full">
                            <h6 class="ed-section-sub-title">About us</h6>
                            <h2 class="ed-section-title mb-[6px]">Learn New <span
                                    class="inline-block font-bold relative before:absolute before:left-0 before:top-[calc(100%-6px)] before:w-[137px] before:h-[14px] before:bg-[url('../assets/img/banner-2-title-vector.svg')] before:bg-[length:100%_100%]">Skills</span>
                                To Go Ahead For Your Career</h2>
                            <p class="text-edgray mb-[34px]">Aonsectetur adipiscing elit Aenean scelerisque augue vitae
                                consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien
                                euismod quis sapien the.</p>
                            <ul
                                class="ed-about-list font-medium text-[18px] text-edblue grid grid-cols-2 xxs:grid-cols-1 gap-[20px] xxs:gap-[15px] mb-[52px] *:pl-[40px] *:relative *:before:absolute *:before:left-0 *:before:-top-[3px] *:before:w-[30px] *:before:aspect-square *:before:border *:before:border-edpurple *:before:rounded-full *:before:bg-[url(../assets/img/icon/checkmark.svg)] *:before:bg-no-repeat *:before:bg-[length:15px_13px] *:before:bg-center">
                                <li>Flexible Course Plan</li>
                                <li>Educator Support</li>
                                <li>Expert mentors</li>
                                <li>Lifetime Access</li>
                            </ul>
                            <a href="#" class="ed-btn">know more</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ABOUT SECTION END -->


            <!-- EVENTS SECTION START -->
            <section class="ed-2-events py-[120px] xl:py-[80px] md:py-[60px]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <!-- heading -->
                    <div
                        class="flex flex-wrap items-end justify-between gap-x-[30px] gap-y-[15px] border-b border-[#002147]/15 pb-[32px] xxs:pb-[22px] mb-[40px] xxs:mb-[30px]">
                        <div class="left">
                            <h6 class="ed-section-sub-title">upcoming events</h6>
                            <h2 class="ed-section-title">upcoming event</h2>
                        </div>
                        <!-- nav -->
                        <div
                            class="ed-2-events-slider-nav flex gap-[15px] *:w-[40px] *:h-[40px] *:rounded-full *:border *:border-[#808080]/20 *:text-black *:text-[18px]">
                            <button class="prev hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                    class="fa-solid fa-angle-left"></i></button>
                            <button class="next hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                    class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>

                    <!-- events slider -->
                    <div class="ed-2-events-slider swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-4.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Skills</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>

                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-2.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute w-max max-w-full bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon shrink-0"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Programming</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-3.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Skills</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>

                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-1.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute w-max max-w-full bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon shrink-0"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Programming</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide w-[50%]">
                                <div class="space-y-[30px]">
                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-4.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Skills</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>

                                    <!-- single event -->
                                    <div
                                        class="bg-edoffwhite rounded-[20px] p-[30px] sm:p-[20px] flex lg:flex-col sm:flex-row xs:flex-col items-center lg:items-start sm:items-center xs:items-start gap-[30px] sm:gap-[20px]">
                                        <!-- img -->
                                        <div class="relative">
                                            <img src="/assets/img/event-2.jpg" alt="event cover"
                                                class="max-w-[215px] aspect-[215/203] object-cover rounded-[10px]">
                                            <!-- category -->
                                            <span
                                                class="absolute w-max max-w-full bottom-0 left-[50%] -translate-x-[50%] inline-flex items-center gap-[8px] bg-edyellow px-[12px] h-[35px] text-edblue font-medium text-[14px] rounded-tr-[8px] rounded-tl-[8px]">
                                                <span class="icon shrink-0"><img src="/assets/img/icon/convoc-cap.svg"
                                                        alt="icon"></span>
                                                <span>Programming</span>
                                            </span>
                                        </div>
                                        <!-- text -->
                                        <div>
                                            <div
                                                class="flex items-center gap-[10px] font-medium text-[#808080] mb-[6px]">
                                                <span class="icon"><img src="/assets/img/icon/clock-fill-yellow.svg"
                                                        alt="icon"></span>
                                                <span>11:00 - 13:30</span>
                                            </div>
                                            <h5 class="font-semibold text-[20px] text-edblue mb-[4px]"><a
                                                    href="event-details.html" class="hover:text-edpurple">Learning
                                                    Communicate To Global</a></h5>
                                            <p class="text-edgray mb-[15px]">There are many variations of passages of
                                                Lorem Ipsum</p>
                                            <a href="#"
                                                class="font-medium text-edpurple flex items-center gap-[10px] hover:text-black">Read
                                                More <span class="icon"><i
                                                        class="fa-solid fa-arrow-right-long"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- EVENTS SECTION END -->


            <!-- CTA SECTION START -->
            <section
                class="ed-2-cta overflow-hidden bg-edpurple pt-[15px] md:pt-[40px] relative z-[1] before:absolute before:inset-0 before:bg-[url(../assets/img/cta-2-vector.png)] before:bg-center before:bg-no-repeat before:bg-cover before:-z-[1]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-y-[15px] items-center justify-between">
                        <!-- text -->
                        <div class="max-w-[600px] md:max-w-full shrink-0 relative">
                            <h3
                                class="font-semibold text-[36px] sm:text-[32px] xxs:text-[28px] text-white leading-[1.4] mb-[41px] xxs:mb-[31px]">
                                15% Offer For All Categories Courses</h3>
                            <a href="course-grid.html"
                                class="ed-btn !h-[56px] !bg-white !text-black gap-[10px] hover:!bg-edyellow hover:!text-edblue">Join
                                Courses <span class="icon"><i class="fa-solid fa-arrow-right-long"></i></span></a>

                            <!-- vector -->
                            <img src="/assets/img/cta-2-txt-vector.svg" alt="vector"
                                class="absolute bottom-[10px] left-[37%] xs:left-[75%]">
                        </div>

                        <!-- image -->
                        <div class="mr-[40px] lg:mr-0 relative z-[1] shrink-0">
                            <img src="/assets/img/cta-2-img.png" alt="image">
                            <!-- vector -->
                            <div
                                class="aspect-square w-[386px] border-[57px] border-edyellow rounded-full absolute bottom-0 right-[25%] translate-y-[50%] -z-[1]">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- CTA SECTION END -->


            <!-- FAQ SECTION START -->
            <section class="py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="grid grid-cols-2 md:grid-cols-1 gap-x-[60px] gap-y-[25px] items-center">
                        <!-- left -->
                        <div class="grow shrink-0">
                            <div class="relative flex items-end md:justify-center mb-[140px]">
                                <img src="/assets/img/faq-2-img-1.jpg" alt="About Image"
                                    class="border-[8px] border-white rounded-[8px] shrink-0">
                                <img src="/assets/img/faq-2-img-2.jpg" alt="About Image"
                                    class="border-[8px] border-white rounded-[8px] shrink-0 -ml-[202px] lg:-ml-[272px] -mb-[140px]">

                                <!-- vectors -->
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

                        <!-- text -->
                        <div>
                            <h6 class="ed-section-sub-title">FAQ</h6>
                            <h2 class="ed-section-title mb-[26px]">We Are Always Ensure Best Course For Your Learning
                            </h2>

                            <div class="ed-accordion space-y-[20px]">
                                <!-- single question -->
                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)] open">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            Organizes eLearning content in one location?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">Nullam faucibus eleifend mi eu
                                            varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis
                                            quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices
                                            euismod. Vivamus porta justo ex.</p>
                                    </div>
                                </div>

                                <!-- single question -->
                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            How to buy an event ticket?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">Nullam faucibus eleifend mi eu
                                            varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis
                                            quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices
                                            euismod. Vivamus porta justo ex.</p>
                                    </div>
                                </div>

                                <!-- single question -->
                                <div
                                    class="ed-single-accordion-item bg-white rounded-[6px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
                                    <div
                                        class="ed-single-accordion-item__header flex items-center justify-between cursor-pointer">
                                        <h3
                                            class="ed-single-accordion-item__title font-semibold text-[20px] text-etBlack">
                                            What type of company is measured?</h3>
                                        <span class="text-[15px]"><i class="fa-solid fa-angles-right"></i></span>
                                    </div>

                                    <div class="ed-single-accordion-item__body">
                                        <p class="font-light text-[16px] text-etGray">Nullam faucibus eleifend mi eu
                                            varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis
                                            quam. Nullam fringilla erat id ante commodo sodales. In maximus ultrices
                                            euismod. Vivamus porta justo ex.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- vector -->
                <img src="/assets/img/faq-2-vector.svg" alt="vector"
                    class="absolute -z-[1] pointer-events-none right-0 bottom-[255px]">
            </section>
            <!-- FAQ SECTION END -->


            <!-- INSTRUCTORS SECTION START -->
            <section class="bg-edoffwhite py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <!-- heading -->
                    <div class="text-center mb-[46px] lg:mb-[36px] md:mb-[26px]">
                        <h2 class="ed-section-sub-title">our INSTRUCTORS</h2>
                        <h6 class="ed-section-title">our expert instructors</h6>
                    </div>

                    <!-- instructor cards -->
                    <div
                        class="grid grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 gap-[30px] md:gap-[15px]">
                        <!-- single instructor -->
                        <div class="text-center group">
                            <!-- img -->
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="/assets/img/instructor-1.jpg" alt="instructor image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <!-- socials -->
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

                            <!-- txt -->
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a
                                        href="teacher-details.html" class="hover:text-edyellow">Brooklyn Simmons</a>
                                </h6>
                                <span class="text-edgray">Digital Expert</span>
                            </div>
                        </div>

                        <!-- single instructor -->
                        <div class="text-center group">
                            <!-- img -->
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="/assets/img/instructor-2.jpg" alt="instructor image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <!-- socials -->
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

                            <!-- txt -->
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a
                                        href="teacher-details.html" class="hover:text-edyellow">Leslie Alexander</a>
                                </h6>
                                <span class="text-edgray">UI/UX Designer</span>
                            </div>
                        </div>

                        <!-- single instructor -->
                        <div class="text-center group">
                            <!-- img -->
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="/assets/img/instructor-3.jpg" alt="instructor image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <!-- socials -->
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

                            <!-- txt -->
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a
                                        href="teacher-details.html" class="hover:text-edyellow">Ronald Richards</a></h6>
                                <span class="text-edgray">WordPress Expert</span>
                            </div>
                        </div>

                        <!-- single instructor -->
                        <div class="text-center group">
                            <!-- img -->
                            <div class="relative mb-[18px] overflow-hidden rounded-[12px]">
                                <img src="/assets/img/instructor-4.jpg" alt="instructor image"
                                    class="w-full aspect-[270/320] object-cover group-hover:scale-110">
                                <!-- socials -->
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

                            <!-- txt -->
                            <div>
                                <h6 class="font-semibold text-[18px] text-edblue mb-[12px]"><a
                                        href="teacher-details.html" class="hover:text-edyellow">Kristin Watson</a></h6>
                                <span class="text-edgray">UI Designer</span>
                            </div>
                        </div>
                    </div>

                    <!-- vectors -->
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
            <!-- INSTRUCTORS SECTION END -->


            <!-- TESTIMONIAL SECTION START -->
            <section class="py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] overflow-hidden">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-col gap-[30px]">
                        <!-- heading -->
                        <div class="max-w-[370px] md:max-w-full shrink-0">
                            <h6 class="ed-section-sub-title">Testimonials</h6>
                            <h2 class="ed-section-title mb-[36px] md:mb-[26px]">What Students Say About Us</h2>
                            <!-- slider nav -->
                            <div
                                class="ed-2-testimonial-slider-nav flex gap-[15px] *:w-[40px] *:h-[40px] *:rounded-full *:border *:border-[#808080]/20 *:text-edpurple *:text-[18px]">
                                <button class="prev hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                        class="fa-solid fa-angle-left"></i></button>
                                <button class="next hover:bg-edpurple hover:border-edpubg-edpurple hover:text-white"><i
                                        class="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>

                        <!-- slider container -->
                        <div>
                            <div class="ed-2-testimonial-slider swiper max-w-[1200px]">
                                <div class="swiper-wrapper">
                                    <!-- single testimony -->
                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <!-- single testimony heading -->
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="/assets/img/user-2.png" alt="reviewer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            Esther Howard</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">Nursing
                                                            Assistant</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">Donec ac lacus placerata
                                                dolor duis consequat placerat sit amet a elit. In volutpat, lacus in
                                                egestas finibus nisi orci tincidunt risus, a dapibus </p>

                                            <!-- rating stars -->
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

                                    <!-- single testimony -->
                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <!-- single testimony heading -->
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="/assets/img/user-2.png" alt="reviewer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            Esther Howard</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">Nursing
                                                            Assistant</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">Donec ac lacus placerata
                                                dolor duis consequat placerat sit amet a elit. In volutpat, lacus in
                                                egestas finibus nisi orci tincidunt risus, a dapibus </p>

                                            <!-- rating stars -->
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

                                    <!-- single testimony -->
                                    <div class="swiper-slide w-[570px] lg:w-[540px] xs:w-full">
                                        <div
                                            class="et-testimony bg-white p-[30px] xxs:p-[20px] border border-[#d9d9d9] rounded-[20px]">
                                            <!-- single testimony heading -->
                                            <div
                                                class="et-testimony__heading flex xxs:flex-col items-center gap-[22px] mb-[42px] xxs:mb-[22px]">
                                                <img src="/assets/img/user-2.png" alt="reviewer image"
                                                    class="w-[70px] aspect-square rounded-full shrink-0">

                                                <div class="flex items-center justify-between grow xxs:w-full">
                                                    <div class="left">
                                                        <h5 class="text-edblue font-semibold text-[20px] mb-[1px]">
                                                            Esther Howard</h5>
                                                        <h6 class="text-[16px] text-edpurple font-normal">Nursing
                                                            Assistant</h6>
                                                    </div>

                                                    <div class="right">
                                                        <img src="/assets/img/icon/quotation.svg" alt="quotation mark">
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-[#445375] font-normal mb-[21px]">Donec ac lacus placerata
                                                dolor duis consequat placerat sit amet a elit. In volutpat, lacus in
                                                egestas finibus nisi orci tincidunt risus, a dapibus </p>

                                            <!-- rating stars -->
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

                <!-- vector -->
                <img src="/assets/img/testimonial-2-vector.svg" alt="vector"
                    class="absolute -z-[1] pointer-events-none left-[44px] bottom-[60px]">
            </section>
            <!-- TESTIMONIAL SECTION END -->


            <!-- STATS SECTION START -->
            <section class="py-[80px] bg-edblue">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <div class="flex md:flex-wrap gap-[70px] lg:gap-[50px] *:flex-auto">
                        <!-- single stat -->
                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <img src="/assets/img/stat-1.png" alt="icon" class="w-max max-w-full mx-auto mb-[7px]">
                            <h3 class="font-bold text-[36px]">25+</h3>
                            <h6 class="font-medium">Year of experience</h6>
                        </div>

                        <!-- single stat -->
                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <img src="/assets/img/stat-2.png" alt="icon" class="w-max max-w-full mx-auto mb-[7px]">
                            <h3 class="font-bold text-[36px]">6,500+</h3>
                            <h6 class="font-medium">Class Completed</h6>
                        </div>

                        <!-- single stat -->
                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <img src="/assets/img/stat-3.png" alt="icon" class="w-max max-w-full mx-auto mb-[7px]">
                            <h3 class="font-bold text-[36px]">100+</h3>
                            <h6 class="font-medium">Experts Instructors</h6>
                        </div>

                        <!-- single stat -->
                        <div
                            class="text-white text-center md:w-[45%] shrink-0 pr-[80px] lg:pr-[60px] last:pr-0 border-r border-white/20 last:border-0 md:even:pr-0 md:even:border-r-0 xs:pr-0 xs:border-r-0">
                            <img src="/assets/img/stat-4.png" alt="icon" class="w-max max-w-full mx-auto mb-[7px]">
                            <h3 class="font-bold text-[36px]">6,561+</h3>
                            <h6 class="font-medium">Students Enrolled</h6>
                        </div>
                    </div>
                </div>
            </section>
            <!-- STATS SECTION END -->


            <!-- CTA 2 SECTION START -->
            <section class="mt-[120px] xl:mt-[80px] md:mt-[60px]">
                <div
                    class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px] bg-[url('../assets/img/cta-3-bg.jpg')] bg-no-repeat bg-cover bg-center rounded-[20px] overflow-hidden text-center py-[120px] xl:py-[80px] md:py-[60px] relative z-[1] before:absolute before:inset-0 before:bg-edpurple/80 before:-z-[1]">
                    <div class="max-w-[570px] mx-auto">
                        <h6 class="ed-section-sub-title ed-section-sub-title--white mr-[48px]">Online Class</h6>
                        <h2 class="ed-section-title !text-white mb-[18px]">Expert Instructor Live Classes Here!</h2>
                        <a href="course-grid.html"
                            class="ed-btn !h-[56px] !bg-white !text-black gap-[10px] hover:!bg-edyellow hover:!text-edblue">Join
                            Courses <span class="icon"><i class="fa-solid fa-arrow-right-long"></i></span></a>
                    </div>
                </div>
            </section>
            <!-- CTA 2 SECTION END -->


            <!-- NEWS SECTION START -->
            <section class="pt-[120px] xl:pt-[80px] md:pt-[60px]">
                <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                    <!-- heading -->
                    <div class="flex flex-wrap items-end justify-between mb-[60px] lg:mb-[40px] gap-[15px]">
                        <!-- left -->
                        <div class="max-w-[35%] md:max-w-[40%] sm:max-w-none">
                            <h6 class="ed-section-sub-title">latest news</h6>
                            <h2 class="ed-section-title">our latest news & blog </h2>
                        </div>

                        <!-- right -->
                        <a href="news-grid.html"
                            class="ed-btn !h-[56px] gap-[10px] border border-[#E5E5E5] !bg-transparent !text-edpurple hover:!bg-edpurple hover:!border-edpurple hover:!text-white">View
                            all blog <span><i class="fa-solid fa-arrow-right-long"></i></span></a>
                    </div>

                    <!-- news cards -->
                    <div class="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
                        <!-- news big card -->
                        <div class="rounded-[20px] bg-edoffwhite overflow-hidden">
                            <!-- img -->
                            <div class="relative">
                                <img src="/assets/img/blog-big.jpg" alt="blog cover" class="w-full aspect-[570/290]">
                                <!-- date -->
                                <div
                                    class="absolute top-[30px] left-[30px] bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                    <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                    <span class="px-[11px] py-[2px] block">June</span>
                                </div>
                            </div>

                            <!-- txt -->
                            <div class="px-[30px] xxs:px-[20px] py-[22px] pt-[27px]">
                                <!-- infos -->
                                <div class="flex items-center gap-[16px] mb-[9px]">
                                    <!-- single info -->
                                    <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"></span>
                                        <span>By Admin</span>
                                    </div>

                                    <!-- single info -->
                                    <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                        <span><img src="/assets/img/icon/comment.svg" alt="icon"></span>
                                        <span>2 Comments</span>
                                    </div>
                                </div>
                                <h5 class="font-medium text-[20px]"><a href="news-details.html"
                                        class="hover:text-edpurple">Collaboratively pontificate bleeding edge resources
                                        with inexpensive methodologies</a></h5>
                            </div>
                        </div>

                        <!-- right / news small cards -->
                        <div class="bg-edoffwhite rounded-[20px] p-[30px] xxs:p-[20px] space-y-[26px]">
                            <!-- single news -->
                            <div
                                class="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                                <!-- img -->
                                <div class="shrink-0 rounded-[10px] overflow-hidden">
                                    <img src="/assets/img/news-2-img-2.jpg" alt="blog cover"
                                        class="w-[142px] aspect-[142/153] object-cover">
                                </div>

                                <!-- txt -->
                                <div>
                                    <!-- infos -->
                                    <div class="flex items-center gap-[16px] mb-[9px]">
                                        <!-- single info -->
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"></span>
                                            <span>By Admin</span>
                                        </div>

                                        <!-- single info -->
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><img src="/assets/img/icon/comment.svg" alt="icon"></span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <h5 class="font-medium text-[20px] mb-[17px]"><a href="news-details.html"
                                            class="hover:text-edpurple">Collaboratively pontificate bleedi edge
                                            resources</a></h5>

                                    <!-- date -->
                                    <div
                                        class="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                        <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                        <span class="px-[11px] py-[2px] block">June</span>
                                    </div>
                                </div>
                            </div>

                            <!-- single news -->
                            <div
                                class="flex xxs:flex-col gap-x-[25px] gap-y-[15px] items-center xxs:items-start border-b last:border-0 pb-[26px] last:pb-0">
                                <!-- img -->
                                <div class="shrink-0 rounded-[10px] overflow-hidden">
                                    <img src="/assets/img/news-2-img-3.jpg" alt="blog cover"
                                        class="w-[142px] aspect-[142/153] object-cover">
                                </div>

                                <!-- txt -->
                                <div>
                                    <!-- infos -->
                                    <div class="flex items-center gap-[16px] mb-[9px]">
                                        <!-- single info -->
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><img src="/assets/img/icon/user-filled-purple.svg" alt="icon"></span>
                                            <span>By Admin</span>
                                        </div>

                                        <!-- single info -->
                                        <div class="flex items-center gap-[10px] font-medium text-[12px] text-edgray">
                                            <span><img src="/assets/img/icon/comment.svg" alt="icon"></span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <h5 class="font-medium text-[20px] mb-[17px]"><a href="news-details.html"
                                            class="hover:text-edpurple">Collaboratively pontificate bleedi edge
                                            resources</a></h5>

                                    <!-- date -->
                                    <div
                                        class="bg-[#ECF0F5] rounded-[10px] font-medium text-[14px] text-black inline-block uppercase overflow-hidden text-center">
                                        <span class="bg-edpurple text-white block py-[3px] rounded-[10px]">10</span>
                                        <span class="px-[11px] py-[2px] block">June</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- NEWS SECTION END -->

            <!-- partners -->
            <div class="mx-[19.7%] xxxl:mx-[14.7%] xxl:mx-[9.7%] xl:mx-[3.2%] md:mx-[15px]">
                <div class="ed-partners-slider swiper my-[100px] xl:my-[70px] md:my-[50px]">
                    <div class="swiper-wrapper">
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-1.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-2.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-3.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-4.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-5.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-6.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-1.png" alt="Partner Logo"></div>
                        <!-- single partner -->
                        <div class="swiper-slide"><img src="/assets/img/partner-2.png" alt="Partner Logo"></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
</style>