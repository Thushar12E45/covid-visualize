<template >
  <div class="w-1/2 m-2 border rounded-sm mr-2 bg-white hover:border-gray-400">
    <h1>Overall Trend 
      <span v-if="stateName" > of {{stateName}} </span>
       </h1>
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
    stateName: String
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
    this.noOfDeaths = this.filterDeathData();
    this.cured = this.filterCuredData();
    this.activeCases = this.filterConfirmData();
    this.sendDataToCards();
  },

  watch: {
    overAllTrendData() {
      this.noOfDeaths = this.filterDeathData();
      this.cured = this.filterCuredData();
      this.activeCases = this.filterConfirmData();
      this.sendDataToCards();
    },
  },
  methods: {
    filterDeathData() {
      let deathData = {};
      for (const day of this.overAllTrendData) {
        const date = day.Date;
        if (deathData[date]) {
          deathData[date]["y"] += parseInt(day.Deaths);
        } else {
          deathData[date] = {};
          deathData[date]["x"] = date;
          deathData[date]["y"] = parseInt(day.Deaths);
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
          curedData[date]["y"] += parseInt(day.Cured);
        } else {
          curedData[date] = {};
          curedData[date]["x"] = date;
          curedData[date]["y"] = parseInt(day.Cured);
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
          confirmData[date]["y"] += parseInt(day.Confirmed);
        } else {
          confirmData[date] = {};
          confirmData[date]["x"] = date;
          confirmData[date]["y"] = parseInt(day.Confirmed);
        }
      }
      confirmData = Object.values(confirmData);
      return confirmData;
    },
    sendDataToCards() {
      const cardData = {
        noOfDeaths: this.noOfDeaths.slice(-1)[0].y,
        cured: this.cured.slice(-1)[0].y,
        activeCases: this.activeCases.slice(-1)[0].y,
      };
      this.emitter.emit("populate-data", cardData);
    },
  },
};
</script>
<style scoped>
/* div{
  width:40vw;
} */
</style>
