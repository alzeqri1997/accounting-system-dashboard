<script setup >
import { ref, onUpdated } from 'vue'

// Reactive Data

const labels = ref([
  { id: 1, label: 'نوع الاشتراك', name: 'subscriptionType', show: true },
  { id: 2, label: 'المتبقي', name: 'remaining', show: true },
  { id: 3, label: 'السعر', name: 'price', show: true },
  { id: 4, label: 'سعر البيع', name: 'seePrice', show: true },
  { id: 5, label: 'المدة', name: 'period', show: true },
])

onUpdated(() => {
  console.log(labels);
})


// Refs 
const cellsModal = ref(null);

// functions
function handleSubmit() {
  cellsModal.value.checked = false
}

</script>

<template>
  <input type="checkbox"
    id="cells-modal"
    class="modal-toggle"
    ref="cellsModal"
    />

  <label for="cells-modal"
    class="modal cursor-pointer">
    <label class="modal-box shadow3 bg-modal-linear px-[25px] py-[16px] w-[435px] relative"
      for="">
      <!-- header -->
      <div class="flex justify-between items-center">
        <span class="text-[20px] font-semibold">اضافة خدمة</span>
        <label for="cells-modal"
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
      <!-- Switchers -->
      <div class="mb-[138px]">
        <template v-for="label in labels" :key="label.id">
          <div @click="label.show = !label.show" class="shadow3 bg-secondary cursor-pointer px-[17px] py-[9px] rounded-[5px]  mb-[10px]">
            <div class="flex justify-between items-center">
              <span>{{label.label}}</span>
              <div class="w-[40px] h-[21px] bg-[#252526] px-[2.07px] py-[1.38px] rounded-[200px] flex">
                <span  :style="{'visibility' : label.show ? 'hidden' : 'visible' }" class="grow bg-secondary rounded-full shadow3  block w-[17.93px] h-full "> </span>
                <span :style="{'visibility' : label.show ? 'visible' : 'hidden' }" class="grow bg-primary rounded-full shadow3 block w-[17.93px] h-full "> </span>
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- divider -->
      <div class="h-[1px] w-full bg-secondary mt-[11px] mb-[20px]"> </div>
      <!-- button -->
      <button @click="handleSubmit()" class="btn !px-[17px] !py-[6px] ">
        حفض واضافة
      </button>
    </label>
  </label>
</template>