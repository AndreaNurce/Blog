<template>
  <div id="AboutUs">
    <div class="headWrapper">
      <h2 class="" >We create brands that the world loves </h2>
      <h1>About Us</h1>
      <p>lor sit amet, consectetur adipisicing elit. Magnam, repudiandae et? Eius doloribus atque libero assumenda deleniti fugiat quia facilis officiis natus! Dolores voluptates illo molestiae consequatur laboriosam. Sit, itaque!</p>
      <h3 >Find Out More</h3>
    </div>
    <div class="containerWrapper">
      <div v-bind:key = index v-for="(item,index) in items" >
        <div class="container">
          <img v-bind:src="item" alt="">
          <h2>{{dumbHeader}}</h2>
          <p>{{dumbText}}</p>
        </div>
      </div>
    </div>
 </div>
</template>
<script>


export default {

  data(){
  return{
    dumbHeader : "Lorem Ipsum",
    dumbText : "dolor sit amet consectetur adipisicing elit. Ab, ea eaque quasi molestiae voluptatem iure ipsam voluptate ipsa, voluptas sed sapiente. Deserunt doloremque, sunt adipisci eos consequatur ea illo explicabo!",
    items: ['/src/images/1.png','/src/images/2.png','/src/images/3.png','/src/images/4.png']
  }
}
  
}
</script>
<style scoped>

.containerWrapper{
  display:grid;
  grid-template-columns: auto auto ;
  grid-template-rows: auto auto;
  column-gap: 40px;
  row-gap: 40px;
  justify-content: center;
  padding-bottom : 100px ;
}
.containerWrapper > :first-child {
  margin-top : 60px;
}
.containerWrapper > :last-child{
  margin-top : -60px;
}
.container{
  width:370px;
  height:300px;
  background-color: white;
  border-radius: 10px;
  box-shadow:0  12px 6px rgba(0,0,0,0.2);
  z-index: 2;
  position: relative;
}
.container > p {
  color : gray;
  padding : 20px 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  color: white;
  transition:  0.3s all ease-in-out;

}
.headWrapper > h3:hover{
    background-color:#888cbb;
  }

      @media  (max-width:780px) {

   .containerWrapper{
  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  column-gap: 40px;
  row-gap: 40px;

}
.containerWrapper > :last-child{
  margin-top : 0px;
}
  }

</style>
