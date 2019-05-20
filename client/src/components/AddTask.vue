<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">HR Managemnet system</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
        </div>
      </div>
    </nav>
  <div class="posts">
    <h1 style="color:black">Add Task</h1>
    <div class="form">
      <div>
        <span style="color:black;">Name</span>
        <br>
        <input type="text" name="title" placeholder="name" v-model="name_">
      </div>
      <div>
        <span style="color:black;">Department</span>
        <br>
        <input placeholder="department" v-model="department_">
      </div>
      <div>
        <span style="color:black;">Number of employee working on task</span>
        <br>
        <input placeholder="skills" v-model="by_"><br>
        <span style="color:black;">Task ends at</span>
        <br>
        <input placeholder="skills" v-model="endsAt_">
      </div>
      <div>
        <button class="app_post_btn" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  name: "addpost",
  data() {
    return {
      name_: "",
      department_: "",
      endsAt_: "",
      by_: ""
    };
  },
  methods: {
    addPost() {
      axios
        .post("http://localhost:8081/task/add_post", {
          name: this.name_,
          department: this.department_,
          endsAt: this.endsAt_,
          by: this.by_
        },
        {
      headers: {
        token: localStorage.getItem('token')
      }
      })
        .then(function(response) {
          window.location.href = "http://localhost:8080/?#/Tasks";
        })
        .catch(function(error) {
          console.log(error.response);
          alert(error.response.data);
        });
    }
  }
};
</script>
<style type="text/css">
.posts{
  color: black;
}
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.posts {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  text-align: center;
  margin-top: 60px;
}

.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

