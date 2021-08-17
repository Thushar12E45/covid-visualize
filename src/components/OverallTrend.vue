<template >
  <div class="flex-1 m-2 ml-0 border rounded-sm bg-white hover:border-gray-400">
    <h1>Overall Trend</h1>
    <LineChart
      :noOfDeaths="noOfDeaths"
      :cured="cured"
      :activeCases="activeCases"
    />
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";

export default {
  name: "overallTrend",
  props: {
    overAllTrendData: Array,
  },
  data() {
    return {
      noOfDeaths: "",
      cured: "",
      activeCases: "",
    };
  },
  components: {
    LineChart,
  },
  created() {
    console.log("created");
    this.noOfDeaths = this.filterDeathData();
    this.cured = this.filterCuredData();
    this.activeCases = this.filterConfirmData();
  },
  
  watch: {
    overAllTrendData(newData, oldData) {
      console.log("watcher ec");
      this.noOfDeaths = this.filterDeathData();
      this.cured = this.filterCuredData();
      this.activeCases = this.filterConfirmData();
    },
  },
  methods: {
    filterDeathData() {
      let deathData = {};
      for (const day of this.overAllTrendData) {
        const date = day.Date;
        if (deathData[date]) {
          deathData[date]["death"] += parseInt(day.Deaths);
        } else {
          deathData[date] = {};
          deathData[date]["date"] = date;
          deathData[date]["death"] = parseInt(day.Deaths);
        }
      }
      deathData = Object.values(deathData);
      return deathData;
    },
    filterCuredData() {
      let curedData = {};
      for (const day of this.overAllTrendData) {
        const date = day.Date;
        if (curedData[date]) {
          curedData[date]["cured"] += parseInt(day.Cured);
        } else {
          curedData[date] = {};
          curedData[date]["date"] = date;
          curedData[date]["cured"] = parseInt(day.Cured);
        }
      }
      curedData = Object.values(curedData);
      return curedData;
    },
    filterConfirmData() {
      let confirmData = {};
      for (const day of this.overAllTrendData) {
        const date = day.Date;
        if (confirmData[date]) {
          confirmData[date]["confirm"] += parseInt(day.Confirmed);
        } else {
          confirmData[date] = {};
          confirmData[date]["date"] = date;
          confirmData[date]["confirm"] = parseInt(day.Confirmed);
        }
      }
      confirmData = Object.values(confirmData);
      return confirmData;
    },
  },
};
</script>
<style scoped>
/* div{
  width:40vw;
} */
</style>
