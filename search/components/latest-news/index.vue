<template>
    <div class="xs:w-full" style="max-width:1180px">

        <div class="xs:px-6 lg:px-0"> 
            <h1 class="font-serif font-black text-ipl-color text-48 xs:text-center ipad:text-left"> 
                LATEST NEWS
            </h1>
        </div>

        <div class="mt-16 mb-16 xs:px-6 lg:px-0">
            <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3">

                <div class="my-3 px-3 overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-1/2 ipadPro:w-1/3 lg:my-3 lg:px-3"
                    v-for="(content,i) in news"
                    :key="i">
                
                    <!-- START-->
                    <a class="outline-none w-full no-underline"
                        :href="content.link"
                        target="_blank">
                        <div
                            class="w-full z-10 rounded-10 cursor-pointer bg-yellow text-black hover:shadow-card overflow-hidden">
                            <img
                                :src="content.img"
                                class="w-full rounded-t-10 object-cover"
                            />
                            <div class="p-4 flex justify-between items-center rounded-b-10 h-24">
                                <p class="font-medium text-16 leading-150 tracking-normal antialiased">
                                {{ content.heading }}
                                </p>
                            </div>
                        </div>
                    </a>
                    <!-- END-->
                    
                </div>

            </div>
        </div>
            
    </div>
</template>

<script src="./index.js" async defer>
    
</script>