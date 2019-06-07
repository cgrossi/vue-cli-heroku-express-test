<template>
  <div id="app">
    <app-header></app-header>
    <Main :names="names"></Main>
    <Copyright></Copyright>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import Copyright from "./components/MyFooter.vue";
import Main from "./components/MyMain.vue";
export default {
  name: "app",
  components: {
    "app-header": MyHeader,
    Copyright,
    Main
  },
  data() {
    return {
      names: [
        { name: "Bill", age: 20, location: "Canada", show: false },
        { name: "Tom", age: 30, location: "France", show: false },
        { name: "Joe", age: 46, location: "Belgium", show: false },
        { name: "Frank", age: 60, location: "USA", show: false },
        { name: "Carmine", age: 30, location: "Canada", show: false },
        { name: "Emmy", age: 24, location: "UAE", show: false },
        { name: "Sara", age: 22, location: "Germany", show: false },
        { name: "Bob", age: 27, location: "New Zealand", show: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  padding: 8px 0;
}
</style>
