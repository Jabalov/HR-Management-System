<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <router-link to="/Posts" class="btn btn-info mb-2">Back</router-link>
        </b-col>
      </b-row>
      <!-- <b-row style="width=200px; height:200px">
        <b-col >
        <img class="fluid col3" src="../assets/search.png" /></b-col>
      </b-row>-->
      <b-row>
        <b-col>
          <b-form >
            <b-form-group id="input-group-1" label="Employee name :" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="employee.name"
                type="text"
                required
                placeholder="change name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Employee department:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="employee.department"
                required
                placeholder="change department "
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Employee skills:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="employee.skills"
                required
                placeholder="change skill "
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" @click="updatePost" class="m-1" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import PostsService from "@/services/PostsService";
const axios = require("axios"); // dont forget to import it right way
import ourApi from "../services/apiConnect";

export default {
  name: "editpost",
  data() {
    return {
      employee: {
        name: "",
        department: "",
        skills: ""
      },
      id: this.$route.params.id
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      axios
        .get(`${ourApi.apiUrl}posts/${this.$route.params.id}`, {
          headers: {
            token: localStorage.getItem("token")
          }
        })
        .then(res => {
          this.employee = res.data;
        })
        .catch(err => {
          console.log(err);
        });

      // console.log(this.props);
      // const response = await PostsService.getPost({
      //   id: this.$route.params.employee_id
      // });
      // this.name = response.data.title;
      // this.department = response.data.description;
      // this.skills = response.data.skills;
    },
    async updatePost() {
      await axios
        .put(`${ourApi.apiUrl}posts/${this.$route.params.id}`, this.employee, {
          headers: {
            token: localStorage.getItem("token")
            // },
            // body : {
            //   name: this.employee.name,
            //   skills: this.employee.skills,
            //   department: this.employee.department
          }
        })
        .then(res => {
          console.log(res);
          this.$swal("Great!", `Your post has been updated!`, "success");
          this.$router.push({
            path: "/posts"
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
<style type="text/css">
/* .form input,
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
} */
</style>

