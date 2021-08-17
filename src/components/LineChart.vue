<template>
  <div>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "LineChart",
  props: {
    noOfDeaths: Object,
    cured: Object,
    activeCases: Object,
  },
  data() {
    return {
      lineChart: "",
    };
  },
  methods: {
    createLineChart(ctx) {
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label: "No of Deaths",
              data: this.noOfDeaths,
              backgroundColor: "#ee69a7",
              borderColor: "#ee69a7",
              pointRadius: 2,
              borderWidth: 1,
              parsing: {
                yAxisKey: `death`,
              },
            },
            {
              label: "No of cured",
              data: this.cured,
              backgroundColor: "#3bc79a",
              borderWidth: 1,
              pointBorderWidth: 0.001,
              borderColor: "#3bc79a",
              pointRadius: 2,

              parsing: {
                yAxisKey: "cured",
              },
            },
            {
              label: "Confirmed Cases",
              data: this.activeCases,
              backgroundColor: "rgba(255, 205, 86)",
              borderColor: "rgba(255, 205, 86)",
              borderWidth: 1,
              pointRadius: 2,

              parsing: {
                yAxisKey: "confirm",
              },
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
          parsing: {
            xAxisKey: "date",
          },
          tooltips: {
            mode: "label",
          },
        },
      });
      return chart;
    },
  },
  updated() {
    console.log("destroyed");
    this.lineChart.destroy();
    const ctx = document.getElementById("line-chart");
    this.lineChart = this.createLineChart(ctx);
  },
  mounted() {
    const ctx = document.getElementById("line-chart");

    this.lineChart = this.createLineChart(ctx);
  },
};
</script>

<style scoped>
/* div {
  width: 30vw;
  padding: 1em;
  background-color: white;
} */
</style>