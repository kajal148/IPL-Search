<template>
    <div class="xs:x-full" style="max-width:1180px">
        
        <div class="xs:w-80p ipad:w-3/5 xs:px-6 ipad:px-0">
            <form 
                class="w-full flex flex-col bg-white overflow-hidden items-center justify-center"
                method="POST"
                @submit.prevent="searchPage"
                >

                <div class="w-3/4 ">
                    <input class="border border-solid border-ipl-color px-2 rounded-10 h-16 w-full font-normal text-18 text-slate-gray leading-150 tracking-normal antialiased outline-none focus:outline-none" 
                        type="text"
                        name="searchText" 
                        v-model="searchValue"
                        required
                        placeholder="Search..." />
                </div>
                <div class="mt-2">
                    <button 
                        class="w-32 h-16 bg-yellow rounded-10 font-mono font-medium text-black leading-150 tracking-normal antialiased" 
                        type="submit" 
                        style="outline:none;">
                        <p class="xs:text-14 ipadPro:text-16">
                            Search
                        </p>
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script src="./index.js">
</script>