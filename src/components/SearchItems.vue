
<script setup >
import { ref, onUpdated } from 'vue';
import ADatepicker from './ADatepicker.vue'
import InputField from './InputField.vue';
const searchItems = ref({
  name: '',
  price: '',
  startDate: '',
  endDate: ''
})

onUpdated(() => {
  console.log(searchItems.value.startDate)
  console.log(searchItems.value.endDate)
})
</script>

<template>
  <div class="bg-modal-linear mx-[14px] rounded-[10px] py-[18px] px-[25px]">
    <h1 class="h1 font-semibold mb-[11px]"> البحث في العناصر </h1>
    <div class="flex gap-[25px]">
      <InputField type="text"
        label="الاسم"
        id="name"
        :value="searchItems.name"
        @input="(value)=> searchItems.name = value"
        />
      <InputField type="text"
        label="السعر"
        id="price"
        :value="searchItems.price"
        @input="(value)=> searchItems.price = value"
        />
        <ADatepicker
        :value="searchItems.startDate"
        @input="(value)=> searchItems.startDate = value"
         label="من تاريخ" />
        <ADatepicker
         label=" الى تاريخ"
         :value="searchItems.EndDate"
        @input="(value)=> searchItems.EndDate = value"
         />
    </div>
  </div>
</template>