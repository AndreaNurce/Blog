import AboutUs from './Components/AboutUs.vue'
import ContactUs from './Components/ContactUs.vue'
import Home from './Components/Home.vue'


export const routes = [
    { 'path': '/', component: Home },
    { 'path': '/blogHosted/' , component : Home},
    { 'path': '/blogHosted/about', component: AboutUs },
    { 'path': '/blogHosted/ContactUs', component: ContactUs }

];