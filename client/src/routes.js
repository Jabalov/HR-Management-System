import VueRouter from "vue-router";
import Vue from "vue";

import LogIn from "./components/LogIn.vue";
import Registration from "./components/Registration.vue";
import Posts from "./components/Posts.vue";
import Tasks from "./components/Tasks.vue";
import AddPost from "./components/AddPost.vue";
import EditPost from "./components/EditPost.vue";
import Home from "./components/Home.vue";
import AddTask from "./components/AddTask.vue";

Vue.use(VueRouter);
export default new VueRouter({
  node: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/login", name: "LogIn", component: LogIn },
    {
      path: "/Registration",
      name: "Registration",
      component: Registration,
      props: true
    },
    { path: "/Posts", name: "Posts", component: Posts },
    { path: "/AddPost", name: "addpost", component: AddPost },
    {
      path: "/EditPost/:id",
      name: "EditPost",
      component: EditPost,
      props: true
    },
    { path: "/addtask", name: "AddTask", component: AddTask },
    { path: "/Tasks", name: "Task", component: Tasks }
  ]
});
