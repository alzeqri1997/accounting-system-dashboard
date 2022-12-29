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
      <RouterLink v-if="name" class="tw-block tw-mx-[10px]" :to="link" >
        <li class="tw-flex tw-rounded-[4px] tw-p-[8px] tw-mb-[12px] tw-mx-[8px] tw-items-center tw-px-[12px] ">
          <span class="tw-w-[44px] tw-h-[44px] tw-ml-[12px] tw-bg-primary-dark tw-rounded-full tw-flex tw-justify-center tw-items-center">
            <component :is="icon"></component>
          </span>
          <span class="tw-text-white tw-text-[20px]" >{{ name }}</span>
        </li>
      </RouterLink>
      <li v-else class="tw-flex tw-rounded-[4px] tw-p-[8px] tw-mb-[12px] tw-mx-[8px] tw-items-center tw-px-[12px] ">
        <span class="tw-w-[44px] tw-h-[44px] tw-ml-[12px] tw-bg-primary-dark tw-rounded-full tw-flex tw-justify-center tw-items-center"></span>
        <div class=" tw-h-[24px] tw-grow tw-block tw-max-w-[148px] tw-bg-primary-dark tw-rounded-[5px] " ></div>
      </li>
    </template>
  </ul>
</template>