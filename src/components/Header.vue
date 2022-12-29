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
    class="bg-modal-linear tw-m-[14px] tw-px-[25px] tw-rounded-[10px] tw-h-[87px] tw-flex tw-items-center tw-justify-between ">
    <div class="tw-flex tw-items-center tw-gap-[11px]">
      <img class="tw-w-[56px] tw-h-[56px] tw-object-cover tw-rounded-full "
        src="../assets/ProfileImage.jpg"
        alt=""
        srcset="">
      <button class=" tw-w-[39px] tw-h-[39px] tw-bg-primary-dark tw-rounded-full center-flex ">
        <CalenderIcon />
      </button>
      <Switcher :icon="icons" />
    </div>
    <div>
      <Switcher :text="text" />
    </div>
  </header>
</template>