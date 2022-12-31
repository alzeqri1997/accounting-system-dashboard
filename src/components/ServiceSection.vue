<script setup>
//  import DocumentDownload from './icons/DocumentDownload.vue';
import DocumentDownloadIcon from './icons/DocumentDownloadIcon.vue';
import PrintIcon from './icons/PrintIcon.vue'
import CandleIcon from './icons/CandleIcon.vue';
</script>

<template>
  <div class="bg-modal-linear tw-mt-[15px] tw-mx-[14px] tw-rounded-[10px] tw-py-[18px] tw-px-[25px]">
    <div class="tw-flex tw-justify-between tw-items-center">
      <h1 class="h1"> الخدمات </h1>
      <div class="tw-flex">
        <button class="btn tw-ml-[20px]">اضافة خدمة</button>
        <div class="divider"></div>
        <div class="tw-flex tw-gap-[15px] tw-px-[16px]">
          <button class="bg-icon2">
            <DocumentDownloadIcon />
          </button>
          <button class="bg-icon2">
            <PrintIcon />
          </button>
        </div>
        <div class="divider"></div>

        <div
          class="tw-flex center-flex tw-ml-[16px] tw-mr-[20px] tw-gap-[4px] shadow1 tw-bg-primary-dark tw-px-[6px] tw-py-[4px] tw-rounded-[10px]">
          <span class="tw-px-[15px]">عدد العناصر</span>
          <div class="tw-w-[82px] tw-h-[35px] center-flex tw-bg-secondary tw-font-[20px] tw-rounded-[10px] ">
            10
          </div>
        </div>
        <button class="bg-icon2">
          <CandleIcon />
        </button>
      </div>

    </div>

    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
