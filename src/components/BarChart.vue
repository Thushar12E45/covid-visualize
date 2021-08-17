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
  },
  data() {
    return {
      barChart: "",
    };
  },
  methods: {
    createBarChart(ctx) {
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: "Active Cases by states",
              data: this.stateWiseCovidData,
              backgroundColor: "rgba(255, 205, 86)",
              borderColor: "rgb(255, 205, 86)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          resposive: true,
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
          parsing: {
            xAxisKey: "State/UnionTerritory",
            yAxisKey: "Confirmed",
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month ->",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
              },
            ],
          },
        },
      });
      return chart;
    },
  },
  updated() {
    this.barChart.destroy();
    const ctx = document.getElementById("bar-chart");
    this.barChart = this.createBarChart(ctx);
  },
  mounted() {
    const ctx = document.getElementById("bar-chart");
    this.barChart = this.createBarChart(ctx);
  },
};
</script>
<style scoped >
/* div {
  width: 50%;
  padding: 1em;
  background-color: white;
} */
</style>