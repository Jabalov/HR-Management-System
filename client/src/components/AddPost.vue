<template>
  <div class="posts">
    <h1>Add Employer</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="name" v-model="name">
        </div>
        <div>
          <input type="text" name="name" placeholder="skills" v-model="skills">
        </div>
        <div>
          <input type="text" name="name" placeholder="dept" v-model="dept">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="running Tasks" v-model="runningTasks"></textarea>
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
      name: '',
      skills: '',
      dept: '',
      runningTasks: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        name: this.name,
        skills: this.skills,
        dept: this.dept,
        runningTasks: this.runningTasks
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

