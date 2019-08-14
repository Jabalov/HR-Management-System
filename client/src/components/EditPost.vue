<template>
  <div>
    <div class="posts">
      <h1 style="color:black;">Edit data</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="name" v-model="post" />
        </div>
        <div>
          <input placeholder="department" v-model="description" />
        </div>
        <div>
          <input type="text" name="name" placeholder="skills" v-model="skills" />
        </div>
        <div>
          <button class="app_post_btn" @click="updatePost()">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
export default {
  props: ["employee_id"],
  name: "editpost",
  data() {
    return {
      title: "",
      description: "",
      skills: ""
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      console.log(this.props);
      const response = await PostsService.getPost({
        id: this.$route.params.id
      });
      this.name = response.data.title;
      this.department = response.data.description;
      this.skills = response.data.skills;
    },
    async updatePost() {
      await axios.put(ourApi.apiUrl + "/posts/" + id, {
        headers: {
          token: localStorage.getItem("token")
        }
      });
      console.log("this.title :", this.title);
      await PostsService.updatePost({
        id: this.$route.params.id,
        name: this.title,
        department: this.description,
        skills: this.skills
      });
      this.$swal("Great!", `Your post has been updated!`, "success");
      $this.$router.go({
        path: "/posts"
      });
    }
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
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

