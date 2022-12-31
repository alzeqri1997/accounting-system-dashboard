<script setup>
import NavItems from './NavItems.vue'
import { RouterLink } from 'vue-router';
import LogoutIcon from './icons/LogoutIcon.vue'
</script>
<template>
  <div class="bg-modal-linear rounded-[10px] my-[14px] overflow-y-auto flex flex-col pt-[50px] max-w-[314px] h-[calc(100vh-28px)] w-full">
    <div class="flex-grow" >
      <div class="w-full mb-[80px]">
        <div
          class="bg-primary-dark mx-auto rounded-full w-[121px] h-[121px] flex justify-center items-center">
          <img class="block"
            src="../assets/logo.png"
            alt="">
        </div>
      </div>
      <NavItems/>
    </div>
    <RouterLink class="bg-primary-dark px-[30px] py-[20px] flex" to="/logout" >
      <LogoutIcon class="ml-[22px]"/>
      <span class="text-[20px]" >تسجيل خروج</span>
    </RouterLink>
  </div>
</template>

