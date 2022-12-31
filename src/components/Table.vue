<script setup >
import { ref, onMounted } from 'vue';
import Arrow3 from './icons/Arrow3.vue'
// Reactive Data
const TrDisplay = ref('auto')
const tableContainer = ref();
// Data
const labels = [
  { id: 0, name: '#' },
  { id: 1, name: 'نوع الاشتراك' },
  { id: 2, name: 'المتبقي' },
  { id: 3, name: 'السعر' },
  { id: 4, name: 'سعر البيع' },
  { id: 5, name: 'المدة' },
  { id: 6, name: 'الاجراءات' },
]

const data = [
  {
    id: 1,
    subscriptionType: { color: '#ffde00', name: 'ggc' },
    remaining: '200',
    price: '6.3',
    sellPrice: '16', // سعر البيع
    period: '30'
  },
  {
    id: 2,
    subscriptionType: { color: '#6C6CFF', name: 'ggc' },
    remaining: '200',
    price: '6.3',
    sellPrice: '16', // سعر البيع
    period: '30'
  },
  {
    id: 3,
    subscriptionType: { color: '#F178B6', name: 'ggc' },
    remaining: '200',
    price: '6.3',
    sellPrice: '16', // سعر البيع
    period: '30'
  },
  {
    id: 4,
    subscriptionType: { color: '#fff', name: 'ggc' },
    remaining: '200',
    price: '6.3',
    sellPrice: '16', // سعر البيع
    period: '30'
  },
]

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
    <div ref="tableContainer" className="overflow-x-auto h-full">
      <table className="table w-full h-full bg-primary-dark ">
        <!-- head -->
        <thead>
          <tr>
            <th v-for="(label, index) in labels"
              :key="index">
              <div class="flex justify-between items-center" >
                <span class="text-[20px] font-semibold ">{{ label.name }}</span>
                <button>
                  <Arrow3 />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(item, index) in data"
            :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>
              <div class="flex items-center " >
                <span class="w-[19px] h-[19px] rounded-[5px] " :class="'bg-[' + item.subscriptionType.color + ']'" > </span>
                <span>{{ item.subscriptionType.name }}</span>
              </div>
            </td>
            <td>{{ item.remaining }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.sellPrice }}</td>
            <td>{{ item.period }}</td>
            <td>
              <div>
                <span>ahmed</span>
                <span>mohammed</span>
              </div>
            </td>
          </tr>
          <tr :style="{height: '100%', 'display': TrDisplay}" >
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
  </div>
</template>

<style lang="scss">
/* rtl:begin:ignore */
.table {

  @apply rounded-[10px] ;
  th {
    @apply bg-primary-dark border-t-0 border border-secondary px-[26px] py-[24px] #{!important};

    &:first-child {
      @apply border-r-0 #{!important};
    }

    &:last-child {
      @apply border-l-0 #{!important};
    }
  }

  tr {
    td {
      @apply bg-primary-dark border-b-0 border border-secondary px-[26px] py-[24px] #{!important};

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