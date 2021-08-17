<template>
  <Header />

  <div class="w-screen flex">
    <section>
      <SideBar :isSideBarVisible="isSidebarVisible" />
    </section>
    <section class="flex-1">
      <div
        class="flex flex-row justify-between mb-2 p-2 pb bg-white sub-header"
      >
        <fa
          icon="bars"
          size="lg"
          @click="isSidebarVisible = !isSidebarVisible"
        />
        <fa
          icon="filter"
          size="lg"
          @click="isFilterVisible = !isFilterVisible"
          class="mr-3"
        />
      </div>
      <!-- <div class="flex">
        <litepie-datepicker
          ref="myRef"
          :formatter="formatter"
          v-model="dateValue"
          class="litepie-secondary"
        />
      </div> -->
      <!-- <button @click="checkingDateFn(dateValue)">Checking</button> -->
      <div>
        <div v-if="isFilterVisible">
          <!-- <div class="flex mb-0">
            <litepie-datepicker
              ref="myRef"
              :formatter="formatter"
              v-model="dateValue"
              class="litepie-secondary"
            />
          </div> -->
          <FilterForm
            :stateList="stateList"
            :startDate="startDate"
            :endDate="endDate"
            @filter-state="filterState"
          />
        </div>
        <div class="flex w-full">
          <ActiveCasesByStates :stateWiseCovidData="stateWiseCovidData" />
          <OverallTrend :overAllTrendData="overAllTrendData" />
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
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";
export default {
  name: "App",
  components: {
    SideBar,
    Header,
    ActiveCasesByStates,
    OverallTrend,
    FilterForm,
    LitepieDatepicker,
  },
  setup(dateValue) {
    const myRef = ref(null);
    dateValue = ref([]);
    const formatter = ref({
      date: "DD-MM-YYYY",
      month: "MMM",
    });
    return {
      myRef,
      dateValue,
      formatter,
    };
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
      individualState: "",
      overAllTrendData: "",
    };
  },
  created() {
    this.covidData = covidData;
    this.stateList = stateList;
    this.stateWiseCovidData = this.covidData.filter((data) => {
      return (
        data["Date"] >= `${this.startDate}` && data["Date"] <= `${this.endDate}`
      );
    });
    this.overAllTrendData = this.stateWiseCovidData;
    console.table(this.stateWiseCovidData);
    console.table(this.covidData);
  },
  methods: {
    handleDateFilter(startDate, endDate) {
      return this.covidData.filter((data) => {
        return data["Date"] >= `${startDate}` && data["Date"] <= `${endDate}`;
      });
    },
    filterState(filterCondn) {
      const stateArr = Object.values(filterCondn.stateObj);

      const dateFilteredData = this.handleDateFilter(
        filterCondn.startDate,
        filterCondn.endDate
      );

      if (stateArr.length > 0) {
        this.stateWiseCovidData 
        const stateListFilteredData = dateFilteredData.filter((data) => {
          return stateArr.includes(data["State/UnionTerritory"]);
        });
        this.stateWiseCovidData = stateListFilteredData;
        this.overAllTrendData = stateListFilteredData;
      } else {
        this.stateWiseCovidData = dateFilteredData;
        this.overAllTrendData = dateFilteredData;
      }
    },
    /*   checkingDateFn(date) {
      console.log("-------------------------");
      console.log(date.split(" ~ "));
      console.log("-------------------------");
    }, */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f7f6f6;
  height: 140vh;
}
/* .sub-header{
width: 88vw;
} */
/* * { 
  outline: 1px solid red;
  outline-offset: -1px;
} */
</style>
