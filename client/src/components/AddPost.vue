<template>
  <b-container>
    <b-row align="center">
      <b-col>
        <router-link to="/Posts" class="btn btn-dark">Back</router-link>
        <div class="posts">
          <h5 style="color:black;">Add Employer</h5>
          <div class="form text-left">
            <div>
              <span style="color:black;">Name</span>
              <br />
              <input type="text" name="title" placeholder="name" v-model="title" />
            </div>
            <div>
              <span style="color:black;">Department</span>
              <br />
              <input placeholder="department" v-model="description" />
            </div>
            <div>
              <span style="color:black;">Skills</span>
              <br />
              <textarea placeholder="skills" v-model="skills"></textarea>
            </div>
            <div>
              <button class="app_post_btn" @click="alertPost">Add</button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
import ourApi from "../services/apiConnect";
import routes from "../routes";
export default {
  name: "addpost",
  data() {
    return {
      title: "",
      description: "",
      skills: ""
    };
  },
  methods: {
    addPost() {
      axios
        .post(
          ourApi.apiUrl + "posts/add_post/",
          {
            name: this.title,
            department: this.description,
            skills: this.skills
          },
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(response => {
          this.$router.push("/Posts");
        })
        .catch(error => {
          console.log(error);
        });
    },
    alertPost() {
      this.$swal({
        title: "Are you sure?",
        text: `this employee will be added \n name:${this.title}\n department:${this.department}\n name:${this.title}`,
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Add it!",
        cancelButtonText: "No, cancel it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          console.log(result);
          this.addPost();
        } else {
          this.$router.push("/Posts");
        }
      });
    }
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
  width: calc(80vw );
  max-width: 500px
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
  /* padding: 10px 80px; */
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
    width: calc(80vw );
    max-width: 500px;
  border: none;
  cursor: pointer;
}
</style>

