<template>
  <div class="posts">
    <h1>Edit data</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="name" v-model="title">
        </div>
        <div>
          <textarea placeholder="department" v-model="description"></textarea>
        </div>
        <div>
          <input type="text" name="name" placeholder="skills" v-model="skills">
        </div>
        <div>
          <button class="app_post_btn" @click="updatePost">Update</button>
          
        </div>
        <router-link  to="/Posts">
          <button class="app_post_btn" >Show Employers</button>
          </router-link>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
const axios = require('axios');
export default {
  name: 'editpost',
  data () {
    return {
      title: '',
      description: '',
      skills: '',
      id : this.$route.params.id
    }
  },


  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.name = response.data.title
      this.department = response.data.description
      this.skills = response.data.skills
    },

    
updatePost(){
			  	axios.put( `http://localhost:8081/posts/${this.id}` ,{
                
                name: this.title,
                department: this.description,
                skills: this.skills
        }) 
        
			    .then(function(response){
          console.log(response);
          				
				})
				.catch(function(error)
				{
          //console.log("here!");
					console.log(error.response);
        })
								
      },
      
    /*async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        name: this.title,
        department: this.description,
        skills: this.skills
      })
      this.$swal(
        'Great!',
        `Your post has been updated!`,
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

