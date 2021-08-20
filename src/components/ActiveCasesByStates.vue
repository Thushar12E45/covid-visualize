<template>
  <div class="flex-1 m-2 w-96 border rounded-sm mr-2  bg-white hover:border-gray-400 mb-4">
    <h1>State Wise Active Covid Cases</h1>
    <BarChart :covidData="covidData"
     />
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
export default {
  name: "ActiveCasesByStates",
  data() {
    return {
      covidData: [],
    };
  },
  props: {
    stateWiseCovidData: Array,
    endDate: {
      type: String,
      default: "2021-08-02",
    },
  },
  components: {
    BarChart,
  },
  created() {
    this.covidData = this.filterColumnsFn();
  },
  watch: {
    stateWiseCovidData(newData, oldData) {
      this.covidData = this.filterColumnsFn();
    },
  },
  methods: {
    filterColumnsFn() {
      const filterColumns = [];

      for (const data of this.stateWiseCovidData) {
        if (data.Date === this.endDate) {
          filterColumns.push({
            x: data["State/UnionTerritory"],
            y: data["Confirmed"],
          });
        }
      }
      return filterColumns;
    },
  },
};
</script>



