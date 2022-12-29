<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
</script>

<template>
  <div lang="ar" dir="rtl" class="tw-flex " >
    <SideBar/>
    <div>
      <header>
        <!-- <div class="tw-h-[100px] tw-bg-primary-dark ">t</div> -->
      </header>
      <RouterView />
    </div>
  </div>
</template>