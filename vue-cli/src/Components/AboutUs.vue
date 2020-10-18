<template>
  <div id="AboutUs">
    <div class="headWrapper">
      <h2 class="" >We create brands that the world loves </h2>
      <h1>About Us</h1>
      <p style="" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, repudiandae et? Eius doloribus atque libero assumenda deleniti fugiat quia facilis officiis natus! Dolores voluptates illo molestiae consequatur laboriosam. Sit, itaque!</p>
      <h3 class="AboutUsButon" >Find Out More</h3>
    </div>
    <div class="backDiv"></div>
    <div class="containerWrapper">


      <div >
        <div>
          <img :src="datats.image" alt="">
          <h2>datats.header</h2>
          <p>datats.paragraph</p>

        </div>
      </div>


    </div>
 </div>
</template>
<script>


export default {
  data(){
    items : [ {
      image : 'img1.png',
      header : 'the header',
      paragraph : 'paragraph'
    },
    {
      image : 'img2.png',
      header : 'the header',
      paragraph : 'paragraph'
    },
    {
      image : 'img3.png',
      header : 'the header',
      paragraph : 'paragraph'
    },
    {
      image : 'img4.png',
      header : 'the header',
      paragraph : 'paragraph'
    }
    ]
  }
  
}
</script>
<style scoped>
.containerWrapper{
  height: 1000px;
  display: flex;

}
.backDiv {
  height : 500px;
  position: absolute;
  width : 100%;
  background-color:  #575A89 ;
  display: none;

}
.headWrapper{
  display: felx;
  padding-top:100px;
  text-align: center;
  width : 650px;
  margin-left: auto;
  margin-right : auto;
  padding-bottom: 100px;
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


