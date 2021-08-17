<template>
  <div class="sidebar" :class="{sidebarWidth:isSideBarVisible}" >
    
    <a @click="selected = 1" :class="{ highlight: selected === 1 }">
      <i> <fa icon="cube" /> </i>
      <span v-show="isSideBarVisible"> Dashboard</span>
    </a>
    <a>
      <i> <fa icon="file" /> </i>
      <span v-show="isSideBarVisible"> Document</span>
    </a>
    <a>
      <i> <fa icon="paper-plane" /> </i>
      <span v-show="isSideBarVisible"> Guide</span> </a
    ><a>
      <i> <fa icon="file" /> </i>
      <span v-show="isSideBarVisible"> Permission</span> </a
    ><a>
      <i> <fa icon="file" /> </i>
      <span v-show="isSideBarVisible"> Icons</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      selected: "",
    };
  },
  props: { isSideBarVisible: Boolean },
  methods: {},
};
</script>

<style scoped>
.sidebar {
  background-color: rgb(48, 65, 86, 1);
  height: 133.8vh;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.sidebarWidth{
  width: 140px;
}

i {
  margin-right: 9px;
}
a {
  display: block;
  color: white;
  padding: 1em;
}
a:hover {
  background-color: rgb(25, 35, 46);
}
.highlight {
  color: rgb(0, 145, 255);
}
</style>