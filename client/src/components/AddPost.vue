<template>
  <div class="posts">
    <h1>Add Employer</h1>
      <div class="form">
        <div>
          
          <input type="text" name="title" placeholder='name' v-model="title">
        </div>
        <div>
          <input placeholder="department" v-model="description">
        </div>
        <div>
          <textarea placeholder="skills" v-model="skills"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require('axios');
export default {
  
  name: 'addpost',
  data () {
    return {
      title: '',
      description: '',
      skills: ''
    }
  },
  methods: {
    addPost(){
      
      axios.post( 'http://localhost:8081/posts/add_post/',{ 
      name: this.title,
      department: this.description,
      skills: this.skills,
      },
      {
      headers: {
        token: localStorage.getItem('token')
      }
      }
      )
      .then(function(response){
        window.location.href = 'http://localhost:8080/?#/Posts';
        
      
      })
      .catch(function(error)
      {
        console.log(error.response);
        alert(error.response.data);
      })
									

    },
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.posts  {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

