 <template>
  <b-container id="sw_app" class="loginBox" style="max-width:500px">
    <b-row align="center" class="mb-5" style="margin-button:50px;">
      <b-col>
        <img src="./user.png" class="fluid" height="100" />
      </b-col>
    </b-row>
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
              <button @click="post" type="submit" class="button">Login</button>
            </b-col>
            <b-col align="center">
              <router-link :to="{ name: 'Registration', params: { user : username } }">
                <button type="button" class="button">Registration</button>
              </router-link>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-alert
        v-model="myError"
        v-if="myError"
        variant="danger"
        class="animated rubberBand"
        dismissible
      >{{myError}}</b-alert>
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
      password: "",
      myError: null
    };
  },
  methods: {
    post: async function() {
      await axios
        .post(ourApi.apiUrl + "auth/", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("token", response.data);
          // ! axios.defaults.headers.common["Authorization"] = response.data;
          this.move();
        })
        .catch(error => {
          //console.log(error);
          this.$data.myError = error.response.data;
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

.loginBox input,
button {
  margin-bottom: 20px;
}

.loginBox input,
button {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginBox .button {
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

.loginBox .button:hover {
  background: #40d5ef;
  color: #262626;
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
* {
  border: 1px red solid;
}
</style>

           