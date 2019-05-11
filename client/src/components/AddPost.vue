<template>
  <div class="posts">
    <h1>Add Employer</h1>
      <div class="form">
        <div>
          
          <input placeholder='name' type="text" name="title" v-model="title" required>
        </div>
        <div>
          <input placeholder="department" v-model="description" required>
        </div>
        <div>
          <textarea placeholder="skills" v-model="skills"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
        <div>
          <router-link  to="/Posts">
          <button class="app_post_btn" >Show Employers</button>
          </router-link>
        </div>
        
      </div>
  </div>
</template>

<script>
 import router from '../router'
//import PostsService from '@/services/PostsService'
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
   
   addPost () {
      axios.post( 'http://localhost:8081/posts/add_post',{ 
          name: this.title,
          department: this.description,
          skills: this.skills
        }) 
        
			  .then(function(response){
          console.log(response);
          alert("Great! Your post has been added!")
          				
				})
				.catch(function(error)
				{
					console.log(error.response);
        })
								
      },

    /*async addPost () {
      await PostsService.addPost({
        name: this.title,
        department: this.description,
        skills: this.skills
      })
      this.$swal(
        'Great!',
        `Your post has been added!`,
        'success'
      )
      this.$router.push({ name: 'Posts' })
    }*/
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
::placeholder {
    color:rgb(136, 130, 130);
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

