<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavItems from './components/NavItems.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="tw-flex " >
    <div>
      <header>
        <div class="tw-w-[1565px] tw-h-[100px] tw-bg-primary-dark ">t</div>
      </header>
      <RouterView />
    </div>
    <div class="bg-modal-linear tw-h-screen tw-w-full">
      <div class="tw-w-full tw-py-[50px]" >
        <div class="tw-bg-primary-dark tw-mx-auto tw-rounded-full tw-w-[121px] tw-h-[121px] tw-flex tw-justify-center tw-items-center" >
          <img class="tw-block" src="../src/assets/logo.png" alt="">
        </div>
        <nav-items/>
      </div>
    </div>
  </div>
</template>