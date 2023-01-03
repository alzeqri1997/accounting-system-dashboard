
<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
import Header from './components/Header.vue';
import { useLanguageStore } from './store/languageStore'


const languageStore = useLanguageStore()
</script>

<template>
  <div :lang="languageStore.language || 'ar'" :dir=" languageStore.language === 'ar' ? 'rtl' : 'ltr' " class="flex  " >
    <SideBar/>
    <div class="grow flex flex-col" >
      <Header/>
      <RouterView />
    </div>
  </div>
</template>