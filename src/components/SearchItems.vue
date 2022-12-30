
<script setup >
import { ref, onUpdated } from 'vue';
import InputField from './InputField.vue';
const searchItems = ref({
  name: "ahmed",
  price:'',
})

onUpdated(() => {
  // console.log(searchItems.value.name)
})
</script>

<template>
  <div class="bg-modal-linear tw-mx-[14px] tw-rounded-[10px] tw-py-[18px] tw-px-[25px]">
    <h1 class="h1 tw-font-semibold tw-mb-[11px]"> البحث في العناصر </h1>
    <div class="tw-flex tw-gap-[25px]">
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
      <InputField type="text"
        label="السعر"
        id="price"
        :value="searchItems.price"
        @input="(value)=> searchItems.price = value"
        />
        <InputField type="text"
        label="الاسم"
        id="name"
        :value="searchItems.name"
        @input="(value)=> searchItems.name = value"
        />
    </div>
  </div>
</template>