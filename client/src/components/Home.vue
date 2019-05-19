<template>
  <div class="container-fliud">
    <!-- <b-navbar type="light" variant="dark" class="row">
      <b-navbar-nav>
        <b-nav-item class="text-primary red col-6">HR Managemnet System</b-nav-item>
        <b-nav-item href="#" class="col">Home</b-nav-item>
        <b-nav-item class="col-2">
          <router-link to="/LogIn">log in</router-link>
        </b-nav-item>
        <b-nav-item class="col-4">
          <router-link to="/Registration">create account</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>-->
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

    <div class="container-fliud">
      <div id="home" class="row">
        <div class="mx-auto">
          <h2 class="mx-auto" style="color:black">Welcome</h2>
          <p class="col-8 offset-2 text-center">
            This software is design to Manage a human resouce system,This app is bulit with Node JS at its backend
            and Vue JS at its frontend ,this app is built for software engineering course at Tanta university
          </p>
        </div>
      </div>
      <div id="service" class="row p-2 align-items-center">
        <img class="img-fliud col-3 offset-2" style="height:40%" src="../assets/add.png">
        <div class="col-6 row">
          <h4 class="row">You can add new employees</h4>
          <p
            class="row"
          >adding new employee can only done by HR, and system will not authorize any other actions</p>
        </div>
      </div>

      <div id="deleting" class="row align-items-center bg-white">
        <div class="col-5 offset-2">
          <h4>Task Manager</h4>
          <p>
            any user on our system can add task,task properties are task name , which
            department related to , how many employee working on and when the task ends
          </p>
        </div>
        <img class="img-fliud col-3" style="height:50%" src="../assets/login.png">
      </div>

      <div id="footer" class="row footer m-2 align-items-center">
        <p class="text-center offset-5 row">Tanta Engineering 2019</p>
      </div>
    </div>
  </div>
</template>

<style  type="text/css">
body {
  background-color: whitesmoke;
}
#home {
  padding-top: 10%;
  padding: 10%;
}
#home {
  background-image: url("../assets/background.jpg");
}
/* .row{
  border : red solid 1px ;
} */
/* img {
  display: block ;
  width: 100vmax;
  height: 100vmax;
  height: 50%;
}  */
</style>
