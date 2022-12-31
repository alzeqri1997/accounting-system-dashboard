<script setup >
import { ref, onMounted, onUpdated } from 'vue';
import Arrow3 from './icons/Arrow3.vue'
import TrashIcon from './icons/TrashIcon.vue'
import EditIcon from './icons/EditIcon.vue'
import Pagination from './Pagination.vue'
// Reactive Data
const TrDisplay = ref('auto')
const tableContainer = ref();
// Data
const labels = [
  { id: 0, label: '#', name:'' },
  { id: 1, label: 'نوع الاشتراك', name: 'subscriptionType' },
  { id: 2, label: 'المتبقي', name: 'remaining' },
  { id: 3, label: 'السعر', name: 'price'},
  { id: 4, label: 'سعر البيع', name: 'seePrice' },
  { id: 5, label: 'المدة', name: 'period' },
  { id: 6, label: 'الاجراءات', name: ""},
]

const data = [
  {
    id: 1,
    subscriptionType: { color: '#ffde00', name: 'aaa' },
    remaining: 200,
    price: 6.3,
    sellPrice: 16, // سعر البيع
    period: 30
  },
  {
    id: 2,
    subscriptionType: { color: '#6C6CFF', name: 'bbb' },
    remaining: 50,
    price: 7,
    sellPrice: 17, // سعر البيع
    period: 3
  },
  {
    id: 3,
    subscriptionType: { color: '#F178B6', name: 'ccc' },
    remaining: -20,
    price: 7.3,
    sellPrice: 18, // سعر البيع
    period: 50
  },
  {
    id: 4,
    subscriptionType: { color: '#fff', name: 'ddd' },
    remaining: -50,
    price: 8,
    sellPrice: 19, // سعر البيع
    period: 10
  },
]

// Reactive Data
const reactiveData = ref(data)
const sortDirection = ref(1);



// Functions 
function sortBy(columnName) {
  console.log(columnName);
  sortDirection.value = -1 * sortDirection.value;

  if (sortDirection.value === 1) {
    reactiveData.value.sort((a,b)=>  a[columnName] > b[columnName] ? 1 : -1 )
  } else {
    reactiveData.value.sort( (a,b)=> a[columnName] < b[columnName] ? 1 : -1 )
  }
}

function deleteItem(item) {
  reactiveData.value = reactiveData.value.filter( (el) => el.id !== item.id )
}

// lifeCycles
onMounted(() => {
  if(data.length > 6) TrDisplay.value = 'none'
})
</script>

<template>
  <div class=" grow bg-modal-linear my-[15px] mx-[14px] rounded-[10px] py-[18px] px-[25px]">
    <div class="flex flex-col gap-[25px] h-full">
      <div ref="tableContainer"
        className="overflow-x-auto h-full">
        <table className="table w-full h-full bg-primary-dark">
          <!-- head -->
          <thead>
            <tr>
              <th v-for="(label, index) in labels"
                :key="index">
                <div class="flex justify-between items-center">
                  <span class="text-[20px] font-semibold ">{{ label.label }}</span>
                  <button @click="sortBy(label.name)" class="sort">
                    <Arrow3 />
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- rows -->
            <tr v-for="item in reactiveData"
              :key="item.id">
              <td>{{ item.id }}</td>
              <td>
                <div class="flex items-end ">
                  <span :style="{ 'background-color': item.subscriptionType.color }"
                    class="w-[19px] h-[19px] rounded-[5px] "> </span>
                  <span class="pr-[11px]">{{ item.subscriptionType.name }}</span>
                </div>
              </td>
              <td>
                <div :class="{ 'bg-success': item.remaining >= 0, 'bg-error': item.remaining < 0 }"
                  class="max-w-[133px] h-[40px] rounded-full center-flex">
                  {{ item.remaining }}
                </div>
              </td>
              <td>{{ item.price }}</td>
              <td>{{ item.sellPrice }}</td>
              <td>{{ item.period }}</td>
              <td>
                <div class="flex gap-[10px]">
                  <button class="bg-icon3">
                    <EditIcon />
                  </button>
                  <button @click="deleteItem(item)" class="bg-icon3">
                    <TrashIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr :style="{ height: '100%', 'display': TrDisplay }">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  </div>
</template>

<style lang="scss">
/* rtl:begin:ignore */
.table {

  @apply rounded-[10px];

  th {
    @apply bg-primary-dark border-t-0 border border-secondary px-[26px] py-[24px] #{!important};

    &:first-child {
      @apply border-r-0 #{!important};

      .sort {
        display: none;
      }
    }

    &:last-child {
      @apply border-l-0 #{!important};

      .sort {
        display: none
      }
    }
  }

  tr {
    td {
      @apply bg-primary-dark border-b-0 border border-secondary px-[26px] py-[17px] #{!important};

      &:first-child {
        @apply border-r-0 #{!important};
      }

      &:last-child {
        @apply border-l-0 #{!important};
      }
    }

    // last child of td tag
    &:last-child {
      @apply border-b-0 #{!important};
    }

  }
}
</style>