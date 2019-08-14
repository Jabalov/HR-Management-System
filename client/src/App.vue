<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: beige;
  font-family: Arial, Helvetica, sans-serif;
}
/* *{
  border: 1px solid red ;
} */
</style>
