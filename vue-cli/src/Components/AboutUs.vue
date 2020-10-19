<template>
  <div id="AboutUs">
    <div class="headWrapper">
      <h2 class="" >We create brands that the world loves </h2>
      <h1>About Us</h1>
      <p style="" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repudiandae et? Eius doloribus atque libero assumenda deleniti fugiat quia facilis officiis natus! Dolores voluptates illo molestiae consequatur laboriosam. Sit, itaque!</p>
      <h3 class="AboutUsButon" >Find Out More</h3>
    </div>
    <div class="containerWrapper">

      <div v-bind:key = index v-for="(item,index) in items" >
        <div class="container">
          <img v-bind:src="item.image" alt="">
          <h2>{{item.header}}</h2>
          <p>{{item.paragraph}}</p>

        </div>
      </div>


    </div>
 </div>
</template>
<script>


export default {

  data(){
  return{
    items: [{
      image: '/src/images/1.png',
      header: 'Lorem ipsum ',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea eaque quasi molestiae voluptatem iure ipsam voluptate ipsa, voluptas sed sapiente. Deserunt doloremque, sunt adipisci eos consequatur ea illo explicabo!'
    },
    {
      image: '/src/images/2.png',
      header: 'Lorem ipsum ',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea eaque quasi molestiae voluptatem iure ipsam voluptate ipsa, voluptas sed sapiente. Deserunt doloremque, sunt adipisci eos consequatur ea illo explicabo!'
    },
    {
      image: '/src/images/3.png',
      header: 'Lorem ipsum ',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea eaque quasi molestiae voluptatem iure ipsam voluptate ipsa, voluptas sed sapiente. Deserunt doloremque, sunt adipisci eos consequatur ea illo explicabo!'
    },
    {
      image: '/src/images/4.png',
      header: 'Lorem ipsum ',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ea eaque quasi molestiae voluptatem iure ipsam voluptate ipsa, voluptas sed sapiente. Deserunt doloremque, sunt adipisci eos consequatur ea illo explicabo!'
    }
    ]
  }
}
  
}
</script>
<style scoped>
.containerWrapper{
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 40px;
  row-gap: 40px;
  justify-content: center;
  padding-bottom : 140px ;
}
.containerWrapper > :first-child {
  margin-top : 60px;
}
.containerWrapper > :last-child{
  margin-top : -60px;
}
.container{
  width:400px;
  height:300px;
  background-color: white;
  border-radius: 10px;
  box-shadow:0  12px 6px rgba(0,0,0,0.2);
  z-index: 2;
  position: relative;
}
.container > p {
  color : gray;
  padding : 20px 15px 
}
.container > h2 {
  color : black;
  padding :  15px ;
}
.container > img{
  height : 60px;
  padding : 15px;
}
.headWrapper{
  display: felx;
  padding-top:200px;
  text-align: center;
  width : 650px;
  margin-left: auto;
  margin-right : auto;
  padding-bottom: 200px;
}
.headWrapper > p {
  padding: 60px;
}
.headWrapper > h2{
  font-size:150%;
  padding-bottom: 20px;
  font-family:  monospace;
  letter-spacing: 4pt;
}
.headWrapper > h1{
  padding-top: 20px;
  font-weight: 900;
  font-size:4rem;
  
}
.headWrapper > h3{
  padding : 20px  26px;
  background-color: #575A89;
  display: inline;
  border-radius: 50px;
  cursor: pointer;
}

</style>


