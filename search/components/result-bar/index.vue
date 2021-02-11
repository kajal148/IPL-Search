<template>
    <div class="xs:w-full">
        <div class="xs:w-full bg-ipl-color text-white">
            <div class="xs:px-6 ipadPro:px-0 w-full flex xs:flex-col ipad:flex-row items-center justify-center">
                <div class="xs:w-full ipad:w-1/2 py-5">
                    <form 
                        class="w-full flex flex-row overflow-hidden items-center justify-center"
                        method="POST"
                        @submit.prevent="searchPage"
                        >

                        <div class="xs:w-3/4 ipad:w-2/4">
                            <input class="border border-solid border-white px-2 rounded-10 h-14 w-full font-medium text-18 text-black leading-150 tracking-normal antialiased outline-none focus:outline-none" 
                                type="text"
                                name="sheroku loginearchText" 
                                v-model="searchValue"
                                required
                                placeholder="Search..." />
                        </div>
                        <div class="ml-4">
                            <button 
                                class="w-24 h-14 bg-yellow rounded-10 font-mono font-medium text-black leading-150 tracking-normal antialiased" 
                                type="submit" 
                                style="outline:none;">
                                <p class="xs:text-14 ipadPro:text-16">
                                    Search
                                </p>
                            </button>
                        </div>

                    </form>
                </div>

                <div class="xs:w-full ipad:w-1/2">
                    <div class="w-4/5 py-5 text-left">
                        <div       
                            class="w-full flex justify-between items-center" 
                                @click.stop="showDrop = !showDrop"
                            >
                            <div class="py-4 w-full relative text-16  text-black bg-white cursor-pointer outline-none rounded-10 ">       
                                <span 
                                    class="font-normal text-16 text-grey-700 cursor-pointer leading-150 tracking-normal antialiased transition-all duration-150 ease-in-out" 
                                    v-if="!Filters.selectedType">
                                        Account Type
                                </span>
                                <span class="pl-2 text-16 leading-150 bgwhite font-medium" v-else-if="Filters.selectedType">
                                    {{Filters.selectedType}}
                                </span>
                                <div class="p-4 absolute left-0 top-23 bg-white text-14  z-20 w-full border border-slate-gray font-normal leading-150 rounded-10 shadow-custom" v-if="showDrop" >
                                    <div @click.stop="clickOption(item)" 
                                    v-for="(item,key) in Filters.options" 
                                    :key="key" 
                                    class="w-full pl-025 py-025 hover:bg-grey-lightest mb-2">
                                        {{ item }}
                                    </div>
                                </div>
                            </div> 
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" fill="none" class="mr-2" viewBox="0 0 9 5">
                                <path stroke="#767676" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l3.539 3L8 1"/>
                            </svg> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-20" style="max-width:1180px">
            <h1 class="text-left text-32 text-grey-darkest">
                Showing results for: <span class="text-ipl-color"> {{ search }} </span>
            </h1>

            <div class="xs:px-6 lg:px-0 mt-16">
                
                <!-- <div class="h-64 flex flex-wrap items-center">
                    <div
                        class="h-full xs:w-full nexus:w-1/3 ipadPro:w-1/4"
                        v-for="(data,i) in dataset"
                        :key="i">

                        <div class="m-2 overflow-hidden rounded-10"
                            :class="i%2==0 ? 'bg-yellow' : 'border-04 border-slate-gray'"> 

                            <div class="p-2">
                                <div class="overflow-hidden hover:shadow-custom">
                                    <img class="w-full rounded-t-10 object-cover" 
                                        :src="data.img" 
                                    />
                                </div>
                                <div class="h-20 mt-1 font-normal text-16 antialiased tracking-normal leading-normal">
                                    <p class="font-bold">
                                        {{ data.name }}
                                    </p>
                                    <p class="font-medium text-ipl-color">
                                        {{ data.team }}
                                    </p>
                                    <p>
                                        {{ data.type }}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div> -->

                <div class="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3">

                <div class="my-3 px-3 overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-3 md:px-3 md:w-1/2 ipadPro:w-1/3 lg:my-3 lg:px-3"
                    v-for="(data,i) in dataset"
                    :key="i">
                
                    <!-- START-->
                    <a class="outline-none w-full no-underline"
                        :href="data.img"
                        target="_blank">
                        <div
                            class="w-full z-10 rounded-10 cursor-pointer border-04 border-slate-gray text-black hover:shadow-card overflow-hidden">
                            <img
                                :src="data.img"
                                class="w-full rounded-t-10 object-cover"
                            />
                            <div class="h-20 py-4 flex flex-col justify-between text-16 items-center rounded-b-1 leading-none tracking-normal antialiased">
                                <p class="font-bold">
                                    {{ data.name }}
                                </p>
                                <p class="font-medium text-ipl-color">
                                    {{ data.team }}
                                </p>
                            </div>
                        </div>
                    </a>
                    <!-- END-->
                    
                </div>

            </div>

            </div>
        </div>
    </div>
</template>

<script src="./index.js">
</script>