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
  value:{}
})

</script>

<template>
  <div class="tw-flex-grow" >
    <label class="tw-block tw-text-gray tw-mb-[8px] "
      for="name"> {{ label }}
    </label>
    <input class=" tw-w-full shadow1
       tw-pt-[7px] tw-pb-[11px] tw-pr-[10px] tw-bg-primary-dark 
       tw-rounded-[5px] tw-text-white tw-outline-none tw-border 
       tw-border-[#363537] focus:tw-border-primary "
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input',$event.target.value)"
      >
  </div>
</template>
