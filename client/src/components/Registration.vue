 <template>
  <b-container>
    <b-row align="center" class="loginBox">
      <b-col class="text-left">
        <div id="sw_app" style="max-width:500px">
          <!-- <img src="./user.png" class="user" /> -->
          <h2>Sign Up</h2>
          <p class="m-2" style="color:#FEAF92;">Please dont user username with an UpperCaser letter or our DataBase will explode</p>
          <form>
            <p>Name</p>
            <b-row>
              <input v-model="name" type="text" name required />
            </b-row>
            <p>Username</p>
            <b-row>
              <input v-model="username" type="text" name required />
            </b-row>
            <p>Password</p>
            <b-row>
              <input v-model="password" type="password" name required />
            </b-row>
            <b-row style="margin-bottom:20px">
              <b-col style="padding-top : 20px">
                <input v-model="hr" type="checkbox" name required />
              </b-col>
              <b-col>
                <p>Are you HR</p>
              </b-col>
            </b-row>
            <input type="submit" v-on:click="post" name value="Sign up " />

            <router-link to="/login">
              <input type="submit" name value="Log in" />
            </router-link>
          </form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
import ourApi from "../services/apiConnect";
export default {
  name: "Registration",

  data() {
    return {
      name: "",
      password: "",
      username: "",
      hr: false
    };
  },
  methods: {
    post() {
      axios
        .post(ourApi.apiUrl + "users/", {
          username: this.username,
          password: this.password,
          name: this.name,
          hr: this.hr
        })
        .then(function(response) {
          console.log(response);
          alert("Sign up completed!");
        })
        .catch(function(error) {
          console.log(error);
          alert(error);
        });
    }
  }
};
</script>

 <style>
body {
  background: #40403f;
  /* margin: 0;
  padding: 0; */
  background-size: cover;
  font-family: sans-serif;
}

.loginBox {
  /* position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px; */
  padding: 20px 40px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
}

h2 {
  margin: 0;
  padding: 0 0 20px;
  color: rgb(162, 200, 243);
  text-align: center;
}

.loginBox p {
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: #fff;
}

.loginBox input {
  width: 100%;
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
  color: #fff;
  font-size: 16px;
  background: #ff267df5;
  cursor: pointer;
  border-radius: 20px;
}

.loginBox input[type="submit"]:hover {
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

.user {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: absolute;
  top: calc(-100px / 2);
  left: calc(50% - 50px);
  border-radius: 50%;
}

.loginBox input[type="checkbox"] {
  border: none;
  outline: none;
  transform: translate(-40%, -100%);
  height: 20px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
}

/* .checkbox {
  color: #fff;
  font-weight: bold;
  display: block;
  position: relative;
  padding-left: 5px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} */

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.check {
  position: absolute;
  top: 0;
  transform: translate(30%, -10%);
  height: 22px;
  width: 22px;
  background-color: #eee;
  border: 1px solid #ccc;
}

.checkbox:hover input ~ .check {
  border: 2px solid #ff267df5;
}

.checkbox input:checked ~ .check {
  background-color: #40d5ef;
  border: none;
}

.check:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .check:after {
  display: block;
}

.checkbox .check:after {
  left: 8px;
  top: 4px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

           