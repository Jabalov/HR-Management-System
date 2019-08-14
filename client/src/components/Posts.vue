<template>
  <b-container>
    <b-row>
      <b-col lg="3" class="m-1" v-for="(post,index) in posts" :key="post.id">
        <b-card class="fadeInLeftBig animated" :style="myStyle(index)">
          <div v-on:click="ShowButton(post._id)">
            <h5 style="color:blue;">{{post.name}}</h5>
            <em>{{post.department}}</em>
            <p>{{post.skills}}</p>
          </div>
          <b-row v-if="post._id === selectedItem" class="m-1 animated fadeInDown">
            <b-button class="m-1">Edit</b-button>
            <b-button class="m-1" variant="danger">Delete</b-button>
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
export default {
  name: "posts",
  data() {
    return {
      posts: [],
      selectedItem: null
    };
  },
  props: {
    user: String
  },
  mounted() {
    this.getPosts();
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
      //console.log(index);
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
          // Here is the problem, the posts can't be updated
          this.posts = response.data.allPosts;
          // console.log(this.posts);
        })
        .catch(function(error) {
          console.log(error);
          alert(error.errmsg);
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
      await axios.delete(
        "https://frozen-cove-53963.herokuapp.com/posts/" + id,
        {
          headers: {
            token: localStorage.getItem("token")
          }
        }
      );
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
