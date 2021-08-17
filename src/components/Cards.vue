<template>
  <section class="flex m-2 justify-evenly gap-2">
    <div class="flex bg-white text-center p-3 border  rounded-xl hover:border-gray-400">
      <div class="w-24 h-24">
        <img src="images/infected.png" alt="" class="object-contain" />
      </div>
      <div class="p-3 pt-6 pl-8 col text-gray-500 text-lg">
        Total Cases: <br />
        <strong class="text-2xl"> 31,695,958</strong>
      </div>
    </div>
    <div class="flex bg-white text-center p-3 border  rounded-xl hover:border-gray-400">
      <div class="w-24 h-24">
        <img src="images/cured.png" alt="" class="object-contain" />
      </div>
      <div class="p-3 pt-6 pl-8 col text-gray-500 text-lg">
        Cured: <br />
        <strong class="text-2xl"> 30,857,467</strong>
      </div>
    </div>
    <div class="flex bg-white text-center p-3 border  rounded-xl hover:border-gray-400">
      <div class="w-24 h-24">
        <img src="images/death.png" alt="" class="object-contain" />
      </div>
      <div class="p-3 pt-6 pl-8 col text-gray-500 text-lg">
        Total Death: <br />
        <strong class="text-2xl">  4,24,773</strong>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style>
</style>