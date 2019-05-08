 <template>
 
  
    <div id ="sw_app" class="loginBox"> 
        
            <img src="./user.png" class="user">
            <h2>Log in</h2>
            <form>
                <p>Name</p>
                <input v-model="name" type="text" name = "" required>
                <p>password</p>
                <input v-model="password" type="password" name = "" required>
                <input  type="submit" v-on:click="post" name = "" value="Log in " >

                <router-link  to="/Registration">
                <input type="submit" name = "" value="Registration">
                </router-link>
                
            </form>
        </div>

  

</template>

<script>
 /* eslint-disable */
 import router from '../routes'
 const axios = require('axios');
export default {
  name: 'LogIn',
  data(){
	  return{
		  name:'',
			password:'',
		}
	},
  methods:{
		
	  post(){
                
			  	axios.post( 'http://localhost:8081/auth/',{ 
					userName: this.name,
					password: this.password, })
			    .then(function(response){
					console.log(response);
					router.push('Registration');
					//router.go({
          //path: '/Posts'})
					//window.location = './Registration' 
				})
				.catch(function(error)
				{
					console.log(error.response);
					alert(error.response.data);
				})
									

			},

          }
  }

</script>

 <style>

body  
{
	background: #40403f;
	margin:0;
	padding:0;
	background-size:cover;
  font-family: sans-serif; 
}





.loginBox
{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	width:500px;
	height:600px;
	padding:80px 40px;
	box-sizing: border-box;
	background:rgba(0, 0, 0, 0.5) ;
	
}



h2
{
	margin:0;
	padding:0 0 20px;
	color:rgb(162, 200, 243);
	text-align:center;
} 



.loginBox p
{
	padding:0;
	margin:0;
	font-weight:bold;
	color:#fff;
	
} 


.loginBox input
{
	width:100%;
	margin-bottom: 20px; 
}

.loginBox input
{
	border: none;
	border-bottom: 1px solid #fff;
	background: transparent;
	outline:none;
	height:40px;
	color:#fff;
	font-size: 16px;
	
	
}


.loginBox input[type="submit"]
{
	border:none;
	outline:none;
	height: 40px;
	color:#fff;
	font-size:16px;
	background: rgb(255,38,126);
	cursor:pointer;
	border-radius:20px;
}


.loginBox input[type="submit"]:hover
{
	background: #40d5ef;
	color: #262626;
}
.loginBox a
{
	color: #fff;
	font-size:14px;
	font-weight:bold;
} 


::placeholder
{
	color:rgba(255,255,255,0.5); 
}


.user
{
	width:100px;
	height:100px; 
	overflow:hidden;
	position:absolute;
	top:calc(-100px/2);
	left:calc(50% - 50px);
	border-radius:50%;
}
 


 
</style>

           