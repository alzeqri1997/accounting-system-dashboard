<script setup >
import { ref } from 'vue';
import { useLanguageStore } from '../store/languageStore';
const languageStore = useLanguageStore()

const props = defineProps(['icon', 'text'])
const dark = ref(1);

const handleDarkModClick = (el) => {
  dark.value = el === 1 ? 1 : 2
}
const handleLanguageClick = (el) => {
  languageStore.changeLanguage(el)
}
</script>

<template>
  <div v-if="icon" class="flex shadow rounded-[200px] shad bg-primary-dark h-fit p-[5px]" >
    <button @click="handleDarkModClick(1)" :class="{'bg-primary': dark === 1 }" class="w-[62px] h-[30px] rounded-[22px]  center-flex">
      <component :is="icon.dark" />
    </button>
    <button @click="handleDarkModClick(2)" :class="{'bg-primary': dark === 2 }" class=" w-[62px] h-[30px] rounded-[22px] center-flex">
      <component :is="icon.light" />
    </button>
  </div>
  <div v-else class="flex rounded-[200px] bg-primary-dark h-fit p-[5px]" >
    <button @click="handleLanguageClick('ar')" :class="{'bg-primary': languageStore.language === 'ar' }" class=" uppercase w-[62px] h-[30px] rounded-[22px] center-flex">
      {{text.ar}}
    </button>
    <button @click="handleLanguageClick('en')" :class="{'bg-primary': languageStore.language === 'en' }" class=" uppercase w-[62px] h-[30px] rounded-[22px] center-flex">
      {{text.en}}
    </button>
  </div>
</template>