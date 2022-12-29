<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
import Header from './components/Header.vue';
</script>

<template>
  <div lang="ar" dir="rtl" class="tw-flex  " >
    <SideBar/>
    <div class="tw-grow" >
      <Header/>
      <RouterView />
    </div>
  </div>
</template>