
import LogIn from './components/LogIn.vue'
import Registration from './components/Registration.vue'
import Posts from './components/Posts.vue'
import AddPost from './components/AddPost.vue'
import EditPost from './components/EditPost.vue'
export default[
{path:'/',component:LogIn, name:"LogIn"},
{path:'/Registration',component:Registration, name :'Registration'},
{path:'/Posts',component:Posts, name :'Posts'},
{path:'/AddPost',component:AddPost, name :'addpost'},
{path:'/EditPost',component:EditPost, name :'EditPost'}
]
