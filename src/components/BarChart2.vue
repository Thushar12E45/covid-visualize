<template>
  <div>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "BarChart",
  props: {
    stateWiseCovidData: Array,
    startDate: String,
  },
  date() {
    return {
      chart: "",
    };
  },
  updated() {
    this.chart.destroy();
    const ctx = document.getElementById("bar-chart");
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Active Cases by states",
            data: this.stateWiseCovidData,
            backgroundColor: "yellow",
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        parsing: {
          xAxisKey: "State/UnionTerritory",
          yAxisKey: "Confirmed",
        },
      },
    });
  },
  mounted() {
  
    const ctx = document.getElementById("bar-chart");
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Active Cases by states",
            data: this.stateWiseCovidData,
            backgroundColor: "yellow",
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        parsing: {
          xAxisKey: "State/UnionTerritory",
          yAxisKey: "Confirmed",
        },
      },
    });
  },
};
</script>
<style scoped >
div {
  width: 50vw;
  border: 1px solid black;
  border-radius: 0.5em;
  background-color: white;
  box-shadow: 0 0 6px #888888;
}
</style>