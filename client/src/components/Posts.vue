<template>
  <div class="posts">
    <h1>Employers</h1>
           

    <div v-if="posts.length > 0" class="table-wrap">

      <table>
        <tr>
          <td width = "150">name</td>
          <td width="150">Department</td>
          <td width="300">Skills</td>
          <td width="150" align="center">Action</td>
        </tr>
        
        <tr v-for="post in posts">
          <td>{{ post.name }}</td>
          <td>{{ post.department }}</td>
          <td>{{ post.skills }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'editpost', params: { id: post._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
            <div class="add-emp-btn">
        <router-link v-bind:to="{ name: 'addpost' }" class="btn" >Add Employers</router-link>
      </div>
    </div>
    <div v-else>
      There are no Employers.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Add Employeer</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PostsService from '@/services/PostsService'
import { async } from 'q';
const axios = require('axios');
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },

  methods: {
    getPosts: function(){
      axios.get( 'http://localhost:8081/posts/',
      {
        headers: {
          token: localStorage.getItem('token')
      }
      }
      )
      .then( (response) => {
              
        this.posts = response.data.allPosts;
        

      })
      .catch(function(error)
      {
        alert(error);
      })
    },
    async deletePost (id) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function () {
        PostsService.deletePost(id)
        $this.$router.go({
          path: '/'
        })
      })
    }
  }
}
</script>
<style type="text/css">
.add-emp-btn{
  margin-top: 5px;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
