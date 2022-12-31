<script setup >
import CalenderIcon from './icons/CalenderIcon.vue';
import Switcher from './Switcher.vue'
import DarkIcon from './icons/DarkIcon.vue';
import LightIcon from './icons/LightIcon.vue';
const icons = {
  dark: DarkIcon,
  light: LightIcon
}
const text = {
  ar: 'ar',
  en: 'en'
}
</script>

<template>
  <header
    class="bg-modal-linear m-[14px] px-[25px] rounded-[10px] h-[87px] flex items-center justify-between ">
    <div class="flex items-center gap-[11px]">
      <img class="w-[56px] h-[56px] object-cover rounded-full "
        src="../assets/ProfileImage.jpg"
        alt=""
        srcset="">
      <button class=" bg-icon ">
        <CalenderIcon />
      </button>
      <Switcher :icon="icons" />
    </div>
    <div>
      <Switcher :text="text" />
    </div>
  </header>
</template>