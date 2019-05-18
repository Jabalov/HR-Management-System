<template>
  <div id="app">
    <router-view></router-view>
    <!-- <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <a href="#" v-on:click=" component='Add'">Add</a>
    <button type="button" v-on:click=" component='Add'">Add</button>
    <button type="button" v-on:click=" component='Get'">Get</button>
    <button type="button" v-on:click=" component='LogIn'">LogIn</button>
    <button type="button" v-on:click=" component='search'">LogIn</button>-->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      component: "",
      name: ""
    };
  },
  methods: {
    plapla() {}
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;

  font-family: Arial, Helvetica, sans-serif ;
}
</style>
