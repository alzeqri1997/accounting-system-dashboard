<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/Sidebar.vue'
import Header from './components/Header.vue';
import { onMounted, onActivated } from 'vue';
import { useLanguageStore } from './store/languageStore'


const languageStore = useLanguageStore()
</script>

<template>
  <div :lang="languageStore.language || 'ahmed'" :dir=" languageStore.language === 'ar' ? 'rtl' : 'ltr' " class="flex  " >
    <SideBar/>
    <div class="grow" >
      <Header/>
      <RouterView />
    </div>
  </div>
</template>