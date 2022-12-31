<script setup>
//  import DocumentDownload from './icons/DocumentDownload.vue';
import DocumentDownloadIcon from './icons/DocumentDownloadIcon.vue';
import PrintIcon from './icons/PrintIcon.vue'
import CandleIcon from './icons/CandleIcon.vue';
</script>

<template>
  <div class="bg-modal-linear mt-[15px] mx-[14px] rounded-[10px] py-[18px] px-[25px]">
    <div class="flex justify-between items-center">
      <h1 class="h1"> الخدمات </h1>
      <div class="flex items-center">
        <button class="btn ml-[20px]">اضافة خدمة</button>
        <div class="divider1"></div>
        <div class="flex gap-[15px] px-[16px]">
          <button class="bg-icon2">
            <DocumentDownloadIcon />
          </button>
          <button class="bg-icon2">
            <PrintIcon />
          </button>
        </div>
        <div class="divider1"></div>

        <div
          class="flex center-flex ml-[16px] mr-[20px] gap-[4px] shadow1 bg-primary-dark px-[6px] py-[4px] rounded-[10px]">
          <span class="px-[15px]">عدد العناصر</span>
          <div class="w-[82px] h-[35px] center-flex bg-secondary font-[20px] rounded-[10px] ">
            10
          </div>
        </div>
        <button class="bg-icon2">
          <CandleIcon />
        </button>
      </div>

    </div>

    

  </div>
</template>
