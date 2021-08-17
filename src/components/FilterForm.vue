<template>
 
  <section class="flex flex-row justify-center bg-white p-1">
    <span class="mt-2 mr-2 " > Select a Date Range: </span>

    <div class="flex mb-0">
      <litepie-datepicker
        ref="myRef"
        :formatter="formatter"
        v-model="dateValue"
        class="litepie-secondary"
      />
    </div>
    <div class="relative">
      <div
        class="bg-white mx-2 py-2 pb-2 border border-gray-300 rounded-lg w-60 focus:border-gray-700 "
        @click="isStateListVisible = !isStateListVisible"
      >
        Select states
        <fa icon="chevron-down" class="ml-2" />
      </div>
      <div
        class="p-2 pl-4 m-2 mt-0 bg-white absolute w-60 border"
        v-if="isStateListVisible"
      >
        <div v-for="state in stateList" :key="state" class="text-left text-sm">
          <input
            type="checkbox"
            :id="state"
            :value="state"
            v-model="singleState"
            class="mr-2"
          />
          <label :for="`${state}`">{{ state }}</label>
        </div>
      </div>
    </div>
    <button
      @click="handleSubmit"
      class="border bg-white py-2 px-3 rounded-lg border-gray-300"
    >
      Go
    </button>

   
  </section>

</template>


<script>
import vueMultiSelect from "vue-multi-select";
import "vue-multi-select/dist/lib/vue-multi-select.css";
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";
export default {
  name: "FilterForm",
  data() {
    return {
      singleState: [],
      isStateListVisible: false,
      dateValue: "",
    };
  },
  props: {
    stateList: Array,
    startDate: String,
    endDate: String,
  },
  components: {
    vueMultiSelect,
    LitepieDatepicker,
  },
  setup(dateValue) {
    const myRef = ref(null);
    dateValue = ref([]);
    const formatter = ref({
      date: "YYYY-MM-DD",
      // date: "DD-MM-YYYY",

      month: "MMM",
    });
    return {
      myRef,
      dateValue,
      formatter,
    };
  },
  methods: {
    handleSubmit() {
      const filterCondn = {
        stateObj: this.singleState,
        startDate: this.dateValue[0],
        endDate: this.dateValue[1],
      };
      this.$emit("filter-state", filterCondn);
    },
  },
};
</script>

<style scoped>
</style>