<template>
  <Header />

  <div class="w-screen flex">
    <section>
      <SideBar :isSideBarVisible="isSidebarVisible" />
    </section>
    <section class="flex-1">
      <div
        class="flex flex-row justify-between mb-1 p-2 pb bg-white sub-header"
      >
        <fa
          icon="bars"
          size="lg"
          @click="isSidebarVisible = !isSidebarVisible"
        />
        <fa
          icon="filter"
          size="lg"
          class="mr-3"
          @click="isFilterVisible = !isFilterVisible"
        />
      </div>

      <div>
        <div v-show="isFilterVisible">
          <FilterForm
            :stateList="stateList"
            :startDate="startDate"
            :endDate="endDate"
            @filter-state="filterState"
          />
        </div>
        <div>
          <Cards />
        </div>
        <div class="flex ">
          <ActiveCasesByStates
            :stateWiseCovidData="stateWiseCovidData"
            :endDate="endDate"
            @filter-state="filterStateFromChart"
          />
          <OverallTrend
            :overAllTrendData="overAllTrendData"
            :stateName="stateName"
          />
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import covidData from "../public/covidData";

import stateList from "./stateList";
import Header from "./components/Header.vue";
import ActiveCasesByStates from "./components/ActiveCasesByStates.vue";
import OverallTrend from "./components/OverallTrend.vue";

import FilterForm from "./components/FilterForm.vue";
import SideBar from "./components/SideBar.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Header,
    ActiveCasesByStates,
    OverallTrend,
    FilterForm,
    Cards,
  },

  data() {
    return {
      isSidebarVisible: true,
      isFilterVisible: true,
      covidData: [],
      staetList: [],
      stateWiseCovidData: [],
      startDate: "2020-03-23",
      endDate: "2020-04-24",
      stateName: "",
      overAllTrendData: "",
      dateFilteredData: "",
      stateWiseFilteredData: "",
    };
  },
  created() {
    this.covidData = covidData;
    this.stateList = stateList;
    this.dateFilteredData = this.covidData.filter((data) => {
      return (
        data["Date"] >= `${this.startDate}` && data["Date"] <= `${this.endDate}`
      );
    });

    this.stateWiseCovidData = this.dateFilteredData;
    this.stateWiseFilteredData = this.dateFilteredData;
    this.overAllTrendData = this.dateFilteredData;
  },
  methods: {
    handleDateFilter() {
      return this.covidData.filter((data) => {
        return (
          data["Date"] >= `${this.startDate}` &&
          data["Date"] <= `${this.endDate}`
        );
      });
    },
    filterStateFromChart(state) {
      this.stateName = state;
      if (state) {
        const filterIndividualState = this.dateFilteredData.filter((data) => {
          return data["State/UnionTerritory"] === state;
        });
        this.overAllTrendData = filterIndividualState;
      } else {
        this.overAllTrendData = this.stateWiseFilteredData;
      }
    },
    filterState(filterCondn) {
      const stateArr = Object.values(filterCondn.stateObj);
      if (filterCondn.startDate) {
        this.startDate = filterCondn.startDate;
        this.endDate = filterCondn.endDate;
      }
      this.dateFilteredData = this.handleDateFilter();

      if (stateArr.length > 0) {
        this.stateWiseFilteredData = this.dateFilteredData.filter((data) => {
          return stateArr.includes(data["State/UnionTerritory"]);
        });
        this.stateWiseCovidData = this.stateWiseFilteredData;
        this.overAllTrendData = this.stateWiseFilteredData;
      } else {
        this.stateWiseFilteredData = this.dateFilteredData;
        this.stateWiseCovidData = this.dateFilteredData;
        this.overAllTrendData = this.dateFilteredData;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f9f9f9;
  height: 140vh;
  width: 100.5vw;
}
</style>
