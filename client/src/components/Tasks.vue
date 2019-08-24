<template>
  <b-container>
    <b-row class="add-emp-btn" style="margin-bottom:20px">
      <b-col>There are {{posts.length}} Tasks in this table</b-col>
      <b-col>
        <router-link to="/addtask" class="btn btn-primary m-1">Add Task</router-link>
      </b-col>
    </b-row>
    <b-row>
    <b-table striped sticky-header responsive bordered hover :items="posts" :busy="!posts" :fields="fields">
      <b-button
        variant="danger"
        @click="deletePost(data.value)"
        slot="[_id]"
        slot-scope="data"
        v-html="'Del'"
      ></b-button>
      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </b-table>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
import ourApi from "../services/apiConnect";
import { async } from "q";
const axios = require("axios");
export default {
  name: "Tasks",

  data() {
    return {
      fields: [
        {
          key: "name",
          sortable: false
        },
        {
          key: "department",
          sortable: true
        },
        {
          key: "by",
          label: "No. employees",
          sortable: true
        },
        {
          key: "endsAt",
          label: "Deadline",
          sortable: true
        },
        {
          key: "_id",
          label: "Delete"
        }
      ],
      posts: []
    };
  },
  props: {
    user: String
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: async function() {
      await axios
        .get(ourApi.apiUrl + "task/", {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(response => {
          // Here is the problem, the posts can't be updated
          let myPosts = response.data.allPosts;
          // myPosts.map( t => {
          //   t._id = `<b-button @click="deletePost(${t._id})" >del</b-button>`;
          // })
          this.posts = myPosts;

          // console.log(this.posts);
        })
        .catch(function(error) {
          alert(error);
        });
    },

    async deletePost(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          axios
            .delete(ourApi.apiUrl + "task/" + id, {
              headers: {
                token: localStorage.getItem("token")
              }
            })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          this.getPosts();
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
