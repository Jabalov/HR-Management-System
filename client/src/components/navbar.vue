<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">HR Manager</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!loggedin">
            <router-link to="/login">login</router-link>
          </b-nav-item>
          <b-nav-item v-on:click="hhh" v-if="loggedin">
            <router-link to="/Posts">Employees</router-link>
          </b-nav-item>
          <b-nav-item v-if="loggedin">
            <router-link to="/Tasks">Tasks</router-link>
          </b-nav-item>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="/">Home</b-dropdown-item>
            <b-dropdown-item v-on:click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { truncate } from "fs";
import { constants } from "crypto";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    hhh: function() {
      // this.$router.push('Posts')
    },
    signOut: function() {
      localStorage.removeItem("token");
    }
  },
  computed: {
    loggedin() {
      if (localStorage.getItem("token")) {
        //console.log(true);
        return true;
      } else return false;
    }
  }
};
</script>
<style scoped>
/* .nav-item{
  background-color: aquamarine;
} */
.nav-item .router-link-exact-active {
  border-bottom: 6px solid blueviolet;
  border-spacing: 2px;
  margin: 2px;
}
.router-link-exact-active {
}
</style>