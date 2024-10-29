<script setup lang="ts">
const links = [
  {
    label: 'Descubrir',
    href: '/descubrir',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Aprender',
    href: '/asesoramiento',
  },
]
</script>

<template>
  <div class="px-3 xl:px-0 fixed w-full top-0 z-1 print:hidden z-40">
    <header class="backdrop-blur-sm z-1 container lg:mx-auto max-w-6xl flex justify-between py-3 bg-gray-100 mt-8 rounded-full pl-8 pr-3 items-center">
      <h2 class="text-black text-3xl font-bold underline decoration-[#ecdd7b]">
        Linkin*
      </h2>
      
       <nav class="md:block hidden">
        <ul class="gap-x-4 flex">
          <li v-for="link in links" :key="link.href">
            <NuxtLink :to="link.href" class="text-[16px] buttons px-2 font-medium text-customgray">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex gap-2">
        <a
          class="text-[16px] font-bold bg-rhino-700 hover:saturate-150 transition text-white rounded-full px-[26px] py-[18px]"
          href=""
        >
          Crea tu cuenta
        </a>
      </div>
    </header>
  </div>
</template>
