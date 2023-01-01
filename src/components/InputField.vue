<script setup>
defineEmits(['input'])
const input = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: '------'
  },
  id: {
    type: String,
  },
  classes: {
    type: String,
    default: ''
  },
  value:{}
})

</script>

<template>
  <div :class="classes" class="flex-grow" >
    <label class="block text-gray mb-[8px] "
      for="name"> {{ label }}
    </label>
    <input class=" w-full shadow1
       pt-[7px] pb-[11px] pr-[10px] bg-primary-dark 
       rounded-[5px] text-white outline-none border 
       border-[#363537] focus:border-primary "
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input',$event.target.value)"
      >
  </div>
</template>
