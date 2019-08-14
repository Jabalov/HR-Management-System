<template>
  <b-container fluid>
    <b-row id="home" style="background-color:wheat;">
      <b-container>
        <h2 class>Welcome</h2>
        <p class="text-center m-2">
          This software is design to Manage a human resouce system,This app is bulit with Node JS at its backend
          and Vue JS at its frontend ,this app is built for software engineering course at Tanta university
        </p>
      </b-container>
    </b-row>
    <b-row style="background-color:#FFFFFF;">
      <b-container>
        <b-row>
          <b-col>
            <img class="img-fluid" style="width:12rem ; margin-top:40px" src="../assets/login.png" />
          </b-col>
          <b-col style="padding:10%; font-size:1rem">
            <p>adding new employee can only done by HR, and system will not authorize any other actions</p>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row style="background-color:#FFF7E5;">
      <b-container>
        <b-row>
          <b-col style="padding:10%; font-size:1rem">
            <p>adding new employee can only done by HR, and system will not authorize any other actions</p>
          </b-col>
          <b-col>
            <img class="img-fluid" style="width:12rem ; margin-top:40px" src="../assets/login.png" />
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>

  <!-- <div class="container">
    <div id="home" class="row">
      <div class="mx-auto">
        <h2 class="mx-auto" style="color:black">Welcome</h2>
      </div>
    </div>
    <div id="service" class="row p-2 align-items-center">
      <img class="img-fliud col-3 offset-2" style="height:40%" src="../assets/add.png" />
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
      <img class="img-fliud col-3" style="height:50%" src="../assets/login.png" />
    </div>

    <div id="footer" class="row footer m-2 align-items-center">
      <p class="text-center offset-5 row">Tanta Engineering 2019</p>
  </div>-->
  <!-- </div> -->
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
  /*background-image:/* url("../assets/background.jpg");*/
  background-image: linear-gradient(
    90deg,
    rgb(54, 181, 183) 0%,
    rgb(19, 126, 105) 100%
  );
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
