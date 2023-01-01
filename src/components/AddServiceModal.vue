<script setup >
import { onUpdated, ref, onMounted } from 'vue';
import InputField from './InputField.vue'
import ColorPicker from './ColorPicker.vue';
// data
const newService = ref({
  subscriptionType: '',
  color: '',
  price: '',
  sellPrice: '',
})

// Refs 

const addServiceModalRef = ref(null);

// functions
function handleSubmit() {
  newService.value = {
    subscriptionType: '',
    color: '',
    price: '',
    sellPrice: '',
  }
  addServiceModalRef.value.checked = false
}

onMounted(() => {

})
</script>

<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox"
    ref="addServiceModalRef"
    id="add-service"
    class="modal-toggle" />
  <label for="add-service"
    class="modal cursor-pointer">
    <label class="modal-box shadow3 bg-modal-linear px-[25px] py-[16px] w-[435px] relative"
      for="">
      <!-- header -->
      <div class="flex justify-between items-center">
        <span class="text-[20px] font-semibold">اضافة خدمة</span>
        <label for="add-service"
          class="bg-icon2 cursor-pointer">
          <svg width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.9687 12.5L18.4479 8.03126C18.644 7.83511 18.7542 7.56907 18.7542 7.29167C18.7542 7.01427 18.644 6.74824 18.4479 6.55209C18.2517 6.35594 17.9857 6.24574 17.7083 6.24574C17.4309 6.24574 17.1648 6.35594 16.9687 6.55209L12.4999 11.0313L8.03119 6.55209C7.83504 6.35594 7.569 6.24574 7.2916 6.24574C7.01421 6.24574 6.74817 6.35594 6.55202 6.55209C6.35587 6.74824 6.24567 7.01427 6.24567 7.29167C6.24567 7.56907 6.35587 7.83511 6.55202 8.03126L11.0312 12.5L6.55202 16.9688C6.45439 17.0656 6.37689 17.1808 6.32401 17.3077C6.27112 17.4347 6.2439 17.5708 6.2439 17.7083C6.2439 17.8458 6.27112 17.982 6.32401 18.1089C6.37689 18.2359 6.45439 18.3511 6.55202 18.4479C6.64886 18.5456 6.76407 18.623 6.891 18.6759C7.01794 18.7288 7.15409 18.756 7.2916 18.756C7.42912 18.756 7.56527 18.7288 7.6922 18.6759C7.81914 18.623 7.93435 18.5456 8.03119 18.4479L12.4999 13.9688L16.9687 18.4479C17.0655 18.5456 17.1807 18.623 17.3077 18.6759C17.4346 18.7288 17.5708 18.756 17.7083 18.756C17.8458 18.756 17.9819 18.7288 18.1089 18.6759C18.2358 18.623 18.351 18.5456 18.4479 18.4479C18.5455 18.3511 18.623 18.2359 18.6759 18.1089C18.7288 17.982 18.756 17.8458 18.756 17.7083C18.756 17.5708 18.7288 17.4347 18.6759 17.3077C18.623 17.1808 18.5455 17.0656 18.4479 16.9688L13.9687 12.5Z"
              fill="white" />
          </svg>
        </label>
      </div>
      <!-- divider -->
      <div class="h-[1px] w-full bg-secondary mt-[11px] mb-[20px]"> </div>
      <!-- form -->
      <InputField label="نوع الاشتراك"
        :value="newService.subscriptionType"
        @input="(newValue) => newService.subscriptionType = newValue" />
      <ColorPicker :color="newService.color" @onChange="(newValue) => newService.color = newValue" />
      <InputField label="السعر"
        :value="newService.price"
        @input="(newValue) => newService.price = newValue" />
      <InputField classes="mt-[24px] mb-[63px]"
        label="سعر البيع"
        :value="newService.sellPrice"
        @input="(newValue) => newService.sellPrice = newValue" />
      <!-- divider -->
      <div class="h-[1px] w-full bg-secondary mt-[11px] mb-[20px]"> </div>
      <!-- button -->
      <button @click="handleSubmit()"
        class="btn !px-[17px] !py-[6px] ">
        حفض واضافة
      </button>
    </label>
  </label>
</template>