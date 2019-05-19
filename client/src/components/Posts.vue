<template>
  <div class="posts container">
    <h1 style="color:black;">Employers</h1>
    <div class="row">
      <div class="col-2">
        <b-nav vertical class="w-25">
          <b-nav-item>
            <img
              class="rounded-circle img-fluid m-2"
              src="http://www.toraseyat.com/wp-content/uploads/2018/09/4D72305E00000578-5865427-image-a-132_1529501574562.jpg"
            >
          </b-nav-item>
          <b-nav-item disabled class="text-primary mt-5 center">
            <h5 class="text-primary">Nashaat</h5>
          </b-nav-item>
        </b-nav>
      </div>

      <div v-if="posts.length > 0" class="table-wrap col-10">
        <!-- <b-table  striped hover :items="posts" :fields="fields"></b-table> -->
        <table>
          <tr>
            <td width="250">Name</td>
            <td width="150">Department</td>
            <td width="300">Skills</td>
            <td width="250" align="center">Action</td>
          </tr>
          <tr v-for="post in posts">
            <td>{{ post.name }}</td>
            <td>{{ post.department }}</td>
            <td>{{ post.skills }}</td>
            <td align="center">
              <router-link class="btn-info btn m-1" :employee_id="post._id" to="/EditPost">Edit</router-link>
              <a href="#" class="btn btn-danger" @click="deletePost(post._id)">Delete</a>
            </td>
          </tr>
        </table>
        <div class="add-emp-btn">
          <router-link v-bind:to="{ name: 'addpost' }" class="btn btn-primary">Add Employers</router-link>
          <router-link to="/addtask" class="btn btn-primary m-1">Add Task</router-link>
          <button @click="getPosts" class="m-1 btn btn-success">refresh</button>
        </div>
      </div>

      <div v-else class="table-wrap m-2" style="color:black;">
        There are no Employers.. Lets add one now
        <br>
        <br>
        <router-link
          v-bind:to="{ name: 'addpost' }"
          class="add_post_link"
          style="color:black;"
        >Add Employeer</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
import { async } from "q";
const axios = require("axios");
export default {
  name: "posts",

  data() {
    return {
      fields: [
        {
          key: "name",
          sortable: true
        },
        {
          key: "department",
          sortable: false
        },
        {
          key: "skills",
          label: "Person age",
          sortable: true
        }
      ],
      posts: []
    };
  },
      props: {
        user: String,
    },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: async function() {
      await axios
        .get("http://localhost:8081/posts/", {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(response => {
          // Here is the problem, the posts can't be updated
          this.posts = response.data.allPosts;

          // console.log(this.posts);
        })
        .catch(function(error) {
          alert(error);
        });
    },
    async deletePost(id) {
      // const $this = this;
      // $this
      //   .$swal({
      //     title: "Are you sure?",
      //     text: "You won't be able to revert this!",
      //     type: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#3085d6",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "Yes, delete it!"
      //   })
      //   .then(
      await axios.delete("http://localhost:8081/posts/" + id, {
        headers: {
          token: localStorage.getItem("token")
        }
      });

      $this.$router.go({
        path: "/posts"
      });
    }
  }
};
</script>
<style type="text/css">
/* *{
  border: 1px solid red;
} */
/* body{
  display : flex ;
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
table tr:nth-child(1) {
  background: #4d7ef7;
  color: aliceblue;
}
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
