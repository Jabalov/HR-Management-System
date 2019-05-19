 <template>
 <div>
	 <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">HR Managemnet system</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/login">login</router-link>
          <router-link class="nav-item nav-link" to="/Registration">Register</router-link>
        </div>
      </div>
    </nav>
  <div id="sw_app" class="loginBox">
	  
    <img src="./user.png" class="user">
    <h2>Sign Up</h2>
    <form>
      <p>Name</p>
      <input v-model="name" type="text" name required>
      <p>Username</p>
      <input v-model="username" type="text" name required>
      <p>Password</p>
      <input v-model="password" type="password" name required>
      <div class="row" >
        <p class="col">Are you HR</p>
      <input class="col m-2" v-model="hr" type="checkbox" name required>
      
      </div>
      <input type="submit" v-on:click="post" name value="Sign up ">

      <router-link to="/login">
        <input type="submit" name value="Log in">
      </router-link>
    </form>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
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
        .post("http://localhost:8081/users/", {
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
          console.log(error.response);
          alert(error.response.data);
        });
    }
  }
};
</script>

 <style>
body {
  background: #40403f;
  margin: 0;
  padding: 0;
  background-size: cover;
  font-family: sans-serif;
}

.loginBox {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  padding: 80px 40px;
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
  right: 1;
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

           