<template>
  <div id="line-chart"></div>
</template>

<script>
import ApexCharts from "apexcharts";
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
      var options = {
        chart: {
          type: "line",
          height: "385px",
        },
        series: [
          {
            name: "Active Cases",
            data: this.activeCases,
          },
          {
            name: "Cured",
            data: this.cured,
          },
          {
            name: "Death",
            data: this.noOfDeaths,
          },
        ],
        yaxis: {
          labels: {
            formatter: function (val, index) {
              if (val < 999) {
                return val;
              } else if (val < 500000) {
                return val / 1000 + "" + "K";
              }
              return (val / 1000000).toFixed(1) + "" + "M";
            },
          },
        },
        tooltip: {
          enabled: true,
          y: {
            formatter(val) {
              val = parseInt(val).toLocaleString("en-IN");
              return val;
            },
          },
        },
        stroke: {
          width: 3,
          curve: "straight",
        },
      };
      const chart = new ApexCharts(ctx, options);
      return chart;
    },
  },
  updated() {
    this.lineChart.updateSeries([
      {
        name: "Active Cases",
        data: this.activeCases,
      },
      {
        name: "Cured",
        data: this.cured,
      },
      {
        name: "Death",
        data: this.noOfDeaths,
      },
    ]);
  },
  mounted() {
    const ctx = document.getElementById("line-chart");
    this.lineChart = this.createLineChart(ctx);
    this.lineChart.render();
  },
};
</script>
