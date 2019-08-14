 <template>
  <b-container id="sw_app" class="loginBox" style="max-width:500px">
    <!-- <b-row>
    <i class="fas fa-user"></i>
    </b-row>-->
    <b-row>
      <b-col>
        <h2>Log in</h2>
        <b-form>
          <p>Username</p>
          <input v-model="username" type="text" name required />
          <p>password</p>
          <input v-model="password" type="password" name required />
          <b-row>
            <b-col align="center">
              <input type="submit" v-on:click="move" name value="Log in " />
            </b-col>
            <b-col align="center">
              <router-link :to="{ name: 'Registration', params: { user : username } }">
                <input type="submit" name value="Registration" />
              </router-link>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ourApi from "../services/apiConnect";

const axios = require("axios");

export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    post: function() {
      axios
        .post(ourApi.apiUrl + "auth", {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          // console.log(response);
          localStorage.setItem("token", response.data);
          // ! axios.defaults.headers.common["Authorization"] = response.data;
          this.move();
        })
        .catch(function(error) {
          //console.log(error);
          alert(error);
        });
    },
    move: function() {
      this.$router.push("/Posts");
    }
  }
};
</script>

 <style>
body {
  /* background: #40403f; */

  /* background-size: cover; */
  font-family: sans-serif;
}

h2 {
  color: rgb(162, 200, 243);
  text-align: center;
}

.loginBox p {
  font-weight: bold;
  color: #fff;
}

.loginBox input {
  margin-bottom: 20px;
}

.loginBox input {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  width: 12rem;
  color: #fff;
  font-size: 16px;
  background: rgb(255, 38, 126);
  cursor: pointer;
  border-radius: 20px;
}

.loginBox input[type="submit"]:hover {
  background: #40d5ef;
  /* color: #262626; */
}
.loginBox a {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* .user {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: absolute;
  top: calc(-100px / 2);
  left: calc(50% - 50px);
  border-radius: 50%;
} */
/* * {
  border: 1px red solid;
} */
</style>

           