<template>
  <div id="bar-chart"></div>
</template>

<script>
import ApexCharts from "apexcharts";
export default {
  name: "BarChart",
  props: {
    covidData: Object,
  },
  data() {
    return {
      barChart: "",
      prevStateName: "",
      isClicked: true,
    };
  },
  methods: {
    handleClick(e, chartContext, config) {
      const dp = config.dataPointIndex;
      let stateName = chartContext.data.twoDSeriesX[dp];
      if (stateName !== this.prevStateName) {
        this.prevStateName = stateName;
        this.$parent.$emit("filter-state", stateName);
      } else {
        this.prevStateName = "";
        this.$parent.$emit("filter-state");
      }
    },
    createBarChart(ctx) {
      var options = {
        chart: {
          type: "bar",
          height: "400px",

          events: {
            dataPointSelection: this.handleClick,
          },
        },
        series: [
          {
            name: "Active Cases",
            data: this.covidData,
          },
        ],
        dataLabels: {
          enabled: false,
        },
        theme: {
          mode: "light",
          palette: "palette4",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
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
        plotOptions: {
          bar: {
            columnWidth: "30px",
          },
        },
      };
      const chart = new ApexCharts(ctx, options);
      return chart;
    },
  },
  updated() {
    this.barChart.updateSeries([
      {
        name: "Active Cases",
        data: this.covidData,
      },
    ]);
  },
  mounted() {
    const ctx = document.getElementById("bar-chart");
    this.barChart = this.createBarChart(ctx);
    this.barChart.render();
  },
};
</script>

