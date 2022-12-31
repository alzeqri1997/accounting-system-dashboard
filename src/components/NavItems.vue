<script setup>
import { RouterLink } from 'vue-router';
import HomeIcon from './icons/HomeIcon.vue'
import HomeWiFiIcon from './icons/HomeWiFiIcon.vue';
import UserSquare from './icons/UserSquareIcon.vue';
import DocumentIcon from './icons/DocumentIcon.vue';

const navItems = [
  { name: 'الرئيسية', icon: HomeIcon, link: '/' },
  {name: 'الخدمات', icon: HomeWiFiIcon, link: '/services'},
  {name: 'الملفات الشخصية', icon: UserSquare, link: '/profile'},
  {name: 'الفواتير', icon: DocumentIcon, link: '/invoice'},
  {name: '', icon: null, link: null},
  {name: '', icon: null, link: null},
  {name: '', icon: null, link: null},
]
</script>

<template>
  <ul>
    <template v-for=" {name, icon, link} in navItems " :key="name" >
      <RouterLink v-if="name" class="block mx-[10px]" :to="link" >
        <li class="flex rounded-[4px] p-[8px] mb-[12px] mx-[8px] items-center px-[12px] ">
          <span class="bg-icon2 ml-[12px] ">
            <component :is="icon"></component>
          </span>
          <span class="text-white text-[20px]" >{{ name }}</span>
        </li>
      </RouterLink>
      <li v-else class="flex rounded-[4px] p-[8px] mb-[12px] mx-[18px] items-center px-[12px] ">
        <span class="w-[44px] h-[44px] ml-[12px] bg-primary-dark rounded-full flex justify-center items-center"></span>
        <div class=" h-[24px] grow block max-w-[148px] bg-primary-dark rounded-[5px] " ></div>
      </li>
    </template>
  </ul>
</template>