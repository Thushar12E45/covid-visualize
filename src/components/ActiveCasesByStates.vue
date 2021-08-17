<template>
  <div class=" flex-1 m-2 border rounded-sm mr-2 bg-white hover:border-gray-400" >
    <h1>State Wise Active Covid Cases</h1>
    <BarChart :stateWiseCovidData="stateWiseCovidData" />
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
export default {
  name: "ActiveCasesByStates",
  props: {
    stateWiseCovidData: Array,
  },
  components: {
    BarChart,
  },
};
</script>

<style scoped>
/* div{
  width:40vw;
} */
</style>

