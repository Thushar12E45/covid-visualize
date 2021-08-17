<template>
  <form @submit="onSubmit">
    <label> Start date <input type="date" v-model="startDate" /> </label>
    <label> End date <input type="date" v-model="endDate" /> </label>
    <input type="submit" value="Go" />
  </form>
</template>


<script>
export default {
  name: "DateFilterForm",
};
</script>