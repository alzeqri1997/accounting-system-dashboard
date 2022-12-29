<script setup >
import { ref } from 'vue';

const props = defineProps(['icon', 'text'])
const dark = ref(1);
const language = ref(1);

const handleDarkModClick = (el) => {
  dark.value = el === 1 ? 1 : 2
}
const handleLanguageClick = (el) => {
  language.value = el === 1 ? 1 : 2
}
</script>

<template>
  <div v-if="icon" class="tw-flex shadow tw-rounded-[200px] tw-shad tw-bg-primary-dark tw-h-fit tw-p-[5px]" >
    <button @click="handleDarkModClick(1)" :class="{'tw-bg-primary': dark === 1 }" class="tw-w-[62px] tw-h-[30px] tw-rounded-[22px]  center-flex">
      <component :is="icon.dark" />
    </button>
    <button @click="handleDarkModClick(2)" :class="{'tw-bg-primary': dark === 2 }" class=" tw-w-[62px] tw-h-[30px] tw-rounded-[22px] center-flex">
      <component :is="icon.light" />
    </button>
  </div>
  <div v-else class="tw-flex tw-rounded-[200px] tw-bg-primary-dark tw-h-fit tw-p-[5px]" >
    <button @click="handleLanguageClick(1)" :class="{'tw-bg-primary': language === 1 }" class=" tw-uppercase tw-w-[62px] tw-h-[30px] tw-rounded-[22px] center-flex">
      {{text.ar}}
    </button>
    <button @click="handleLanguageClick(2)" :class="{'tw-bg-primary': language === 2 }" class=" tw-uppercase tw-w-[62px] tw-h-[30px] tw-rounded-[22px] center-flex">
      {{text.en}}
    </button>
  </div>
</template>