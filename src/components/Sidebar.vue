<script setup>
import NavItems from './NavItems.vue'
import { RouterLink } from 'vue-router';
import LogoutIcon from './icons/LogoutIcon.vue'
</script>
<template>
  <div class="bg-modal-linear tw-overflow-y-auto tw-flex tw-flex-col tw-pt-[50px] tw-max-w-[314px] tw-h-screen tw-w-full">
    <div class="tw-flex-grow" >
      <div class="tw-w-full tw-mb-[80px]">
        <div
          class="tw-bg-primary-dark tw-mx-auto tw-rounded-full tw-w-[121px] tw-h-[121px] tw-flex tw-justify-center tw-items-center">
          <img class="tw-block"
            src="../assets/logo.png"
            alt="">
        </div>
      </div>
      <NavItems/>
    </div>
    <RouterLink class="tw-bg-primary-dark tw-px-[30px] tw-py-[20px] tw-flex" to="/" >
      <LogoutIcon class="tw-ml-[22px]"/>
      <span>تسجيل خروج</span>
    </RouterLink>
  </div>
</template>

