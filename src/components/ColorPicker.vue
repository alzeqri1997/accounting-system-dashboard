<script setup >
import { ref } from 'vue';
// Props
const props = defineProps({
  color: {
    default: ''
  }
})

// Emits
const emit = defineEmits(['onChange'])


// Data
const colors = {
  secondary: { hex: '#434348', rgba: 'rgba(67, 67, 72, 0.2)' }, // secondary
  primary: { hex: '#6C6CFF', rgba: 'rgba(108, 108, 255, 0.2)' }, // primary
  fuchsia: { hex: '#EF5DA8', rgba: 'rgba(239, 93, 168, 0.2)' }, // Fuchsia
  orange: { hex: '#F2994A', rgba: 'rgba(242, 153, 74, 0.2)' }, // Orange
  green: { hex: '#27AE60', rgba: 'rgba(39, 174, 96, 0.2)' }, // Green
  purple: { hex: '#9B51E0', rgba: 'rgba(155, 81, 224, 0.2)' }, // Purple
}

// Reactive Data
const selectedColor = ref(props.color);

// Functions

function handleColor(color) {
  selectedColor.value = color.hex
  emit('onChange', color.hex);
}
</script>

<template>
  <div class="mt-[35px] mb-[29px] flex items-center">
    <label class="text-gray mb-[8px] ml-[22px]"> اللون </label>
    <div class="flex gap-[13px]">
      <button @click="handleColor(color)"
        v-for="color in colors"
        :key="color.hex"
        class="block w-[25px] center-flex h-[25px] border-[1px] outline outline-[5px] outline-[#363537] rounded-full border-[#363537]"
        :style="{ 'outline-color': selectedColor === color.hex ? color.rgba : '', 'background-color': color.hex }">
        <svg v-if="selectedColor === color.hex"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.94001 0.721874C10.004 0.656592 10.0804 0.604731 10.1646 0.569327C10.2489 0.533922 10.3394 0.515686 10.4308 0.515686C10.5222 0.515686 10.6127 0.533922 10.697 0.569327C10.7812 0.604731 10.8576 0.656592 10.9216 0.721874C11.1897 0.992812 11.1934 1.43062 10.9309 1.70625L5.38751 8.25937C5.32457 8.32849 5.2482 8.38403 5.16305 8.42261C5.07791 8.4612 4.98579 8.482 4.89233 8.48376C4.79887 8.48551 4.70604 8.46818 4.6195 8.43282C4.53297 8.39747 4.45456 8.34483 4.38907 8.27812L1.01595 4.86C0.885859 4.72733 0.812988 4.54893 0.812988 4.36312C0.812988 4.17732 0.885859 3.99892 1.01595 3.86625C1.07993 3.80097 1.15629 3.74911 1.24056 3.7137C1.32484 3.6783 1.41532 3.66006 1.50673 3.66006C1.59814 3.66006 1.68863 3.6783 1.7729 3.7137C1.85717 3.74911 1.93353 3.80097 1.99751 3.86625L4.85876 6.76594L9.92126 0.742499C9.92709 0.735254 9.93335 0.728366 9.94001 0.721874Z"
            fill="white" />
        </svg>

      </button>
    </div>
  </div>
</template>