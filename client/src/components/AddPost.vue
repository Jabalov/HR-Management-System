<template>
  <div class="posts">
    <h1>Add Employer</h1>
      <div class="form">
        <div>
<<<<<<< HEAD
          
          <input type="text" name="title" placeholder='name' v-model="title">
=======
          <input type="text" name="title" placeholder="name" v-model="title">
>>>>>>> master
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
import PostsService from '@/services/PostsService'
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
    async addPost () {
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
    }
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
<<<<<<< HEAD
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

=======
.form div {
  margin: 20px;
>>>>>>> master
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

