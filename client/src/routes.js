
import LogIn from './components/LogIn.vue'
import Registration from './components/Registration.vue'
import Posts from './components/Posts.vue'
import Tasks from './components/Tasks.vue'
import AddPost from './components/AddPost.vue'
import EditPost from './components/EditPost.vue'
import Home from './components/Home.vue'
import AddTask from './components/AddTask.vue'

export default [
    { path: '/', component: Home , name: "Home" },
    { path: '/login', component: LogIn, name: "LogIn", props: true },
    { path: '/Registration', component: Registration, name: 'Registration', props: true },
    { path: '/Posts', component: Posts, name: 'Posts', props: true},
    { path: '/AddPost', component: AddPost, name: 'addpost' },
    { path: '/EditPost', component: EditPost, name: 'EditPost' },
    { path: '/addtask', component: AddTask, name: 'AddTask' },
    { path: '/Tasks', component: Tasks, name: 'Task' }
]
