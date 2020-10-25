<template>
  <div id="app">
      <app-nav></app-nav>
      <transition name="fade" mode="out-in" appear>
      <router-view> </router-view>
    </transition>
    <app-footer ></app-footer>
  </div>
</template>

<script>
import About from './Components/AboutUs.vue'
import Contact from './Components/ContactUs.vue'
import NavBar from './Components/NavBar.vue'
import Home from './Components/Home.vue'
import footer from './Components/footer.vue'

export default {
  components :{
    'app-about' : About,
    'app-navigat' : Contact,
    'app-nav' : NavBar,
    'app-home' : Home,  
    'app-footer' : footer, 
  }
}
</script>

<style >
#id{
  font-family:" San Francisco', Helvetica, Arial, san-serif";
}
 .fade-enter{
   opacity: 0;
  }
    .fade-enter-active {
      transition  : opacity .3s ;
    }

    .fade-leave-active {
      opacity: 0 ;
      transition : opacity .3s;
    }

  </style>
