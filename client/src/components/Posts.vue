<template>
  <b-container>
    <b-row align="center" class="mb-3">
      <b-col>
        <b-form-select v-model="selectedDepartment" :options="departments"></b-form-select>
      </b-col>
      <b-col>
        <b-button variant="primary" class="m-1">
          <router-link to="AddPost" style="color:white;">Add Employee</router-link>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="3"
        class="m-1"
        v-for="(post,index) in (selectedDepartment ? filtered : posts)"
        :key="post.id"
      >
        <b-card class="fadeInLeftBig animated" :style="myStyle(index)">
          <div v-on:click="ShowButton(post._id)">
            <h5 style="color:blue;">{{post.name}}</h5>
            <em>{{post.department}}</em>
            <p>{{post.skills}}</p>
          </div>
          <b-row v-if="post._id === selectedItem" class="m-1 animated fadeInDown">
            <b-button :to="`/editPost/${post._id}`" class="m-1">Edit</b-button>
            <b-button class="m-1" variant="danger" v-on:click="deletePost(post._id)">Delete</b-button>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
import { async } from "q";
import ourApi from "../services/apiConnect";
const axios = require("axios");
const _ = require("lodash");

export default {
  name: "posts",
  data() {
    return {
      posts: [],
      selectedItem: null,
      selectedDepartment: null
    };
  },
  props: {
    user: String
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    departments: function() {
      let depa = this.posts.map(post => {
        return { text: post.department, value: post.department };
      });
      depa = _.uniqBy(depa, "value");
      depa = [{ text: "All Departments", value: null }, ...depa];
      return depa;
    },
    filtered: function() {
      return this.posts.filter(post => {
        return post.department === this.selectedDepartment;
      });
    }
  },

  methods: {
    ShowButton(id) {
      if (this.selectedItem === id) {
        this.selectedItem = null;
      } else {
        this.selectedItem = id;
      }
    },

    myStyle: function(index) {
      return "animation-delay : " + index * 500 + "ms";
    },

    getPosts: async function() {
      await axios
        .get(ourApi.apiUrl + "posts/", {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(response => {
          this.posts = response.data.allPosts;
        })
        .catch(function(error) {
          alert(error.response.data);
        });
    },

    async deletePost(id) {
      // const $this = this;
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );

          axios.delete(ourApi.apiUrl + "posts/" + id, {
            headers: {
              token: localStorage.getItem("token")
            }
          });

          this.getPosts();
        } else {
          this.$swal("Cancelled", "Your Employee is saved", "info");
        }
      });
    }
  }
};
</script>
<style type="text/css">
/* *{
  border: 1px solid red;
} */

.add-emp-btn {
  margin-top: 5px;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

table th,
table tr {
  text-align: left;
}
/* table thead {
  background: #f2f2f2;
} */

table tr {
  padding: 5px;
  color: #091229;
}
/* table tr:nth-child(odd) {
  background: #f2f2f2;
} */
/* table tr:nth-child(1) {
  background: #4d7ef7;
  color: aliceblue;
} */
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;

  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
