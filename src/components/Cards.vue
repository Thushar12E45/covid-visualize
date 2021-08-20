<template>
  <section class="flex m-2 justify-evenly gap-2">
    <div
      class="
        flex
        bg-white
        text-center
        p-3
        w-56
        border
        rounded-xl
        hover:border-gray-400
      "
    >
      <div class="w-16 h-16">
        <img src="images/infected.png" alt="" class="object-contain" />
      </div>
      <div class="pl-4 col text-gray-500 text-lg">
        Total Cases: <br />
        <strong class="text-2xl">
          {{ parseInt(cardDetails.activeCases).toLocaleString("en-IN") }} <br />
          <!-- 31,695,958 -->
        </strong>
      </div>
    </div>
    <div
      class="
        flex
        bg-white
        text-center
        p-3
                w-56

        border
        rounded-xl
        hover:border-gray-400
      "
    >
      <div class="w-16 h-16">
        <img src="images/cured.png" alt="" class="object-contain" />
      </div>
      <div class="pl-4 col text-gray-500 text-lg">
        Cured:<br />
        <strong class="text-2xl">
          {{ parseInt(cardDetails.cured).toLocaleString("en-IN") }}
          <br />
          <!-- 30,857,467 -->
        </strong>
      </div>
    </div>
    <div
      class="
        flex
        bg-white
        text-center
        p-3
                w-56

        border
        rounded-xl
        hover:border-gray-400
      "
    >
      <div class="w-16 h-16">
        <img src="images/death.png" alt="" class="object-contain" />
      </div>
      <div class="pl-4 col text-gray-500 text-lg">
        Total Death: <br />
        <strong class="text-2xl">
          {{ parseInt(cardDetails.noOfDeaths).toLocaleString("en-IN") }} <br />
          <!-- 4,24,773 -->
        </strong>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cards",

  data() {
    return {
      cardDetails: "",
    };
  },
  created() {
    this.emitter.on("populate-data", (data) => {
      this.cardDetails = data;
    });
  },
};
</script>

<style>
</style>