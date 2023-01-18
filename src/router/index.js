import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import About from "../views/About.vue";
import Clients from "../views/Clients.vue";
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contactus",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/aboutus",
    name: "About",
    component: About,
  },
  {
    path: "/Clients",
    name: 'Client',
    component: Clients
  },
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },
  {
    path: '/404',
    name: 'fail',
    component: SubmissionFail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
