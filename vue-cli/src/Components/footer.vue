<template>
    <div id="Footer">
        <div class="footerWrapper">
            <div class="container"  :key="index" v-for="(objectContent,index) in contect.contentObjects">
                <h1> {{objectContent.tittle}} </h1>  
                <br>
                <p :key="index" v-for="(text,index) in objectContent.texts">{{text.theText}}</p>
                <br>
            </div>
        </div>
        <div style="width:70%;margin-left: auto;margin-right: auto;text-align:center;">
        <hr>
        <br><br>
        <h3>Copy Right @2020 | Designed by Andrea &copy;</h3>
        <br><br>
        <app-social></app-social>
        <br><br>
        </div>
    </div>
</template>
<script>
 
    import Social from "./SocialLinks.vue"
export default {
    components : {
        'app-social' : Social,

    },
    data(){
    return {
      contect: {
      contentObjects : [{
          tittle : 'Find Us',
          texts : [{ theText : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem modi hic repudiandae odio repellat quae. Aperiam, accusantium ipsa deleniti eaque fugiat aliquam facere quidem inventore nobis? Repellendus laborum iusto f' },]
        },
        {
          tittle : 'Quick Links',
          texts : [
            { theText : 'Lorem' },
            { theText : 'Ipsum dolor' },
            { theText : 'Sit amet' },
            { theText : 'Ebay & Amazon' },
            { theText : 'Adipisicing elit' },
            { theText : 'Elit' },
          ]
        },
        { 
          tittle : 'Quick Links 2',
          texts : [
            { theText : 'Autem modi hic ' },
            { theText : 'Repudiandae odio' },
            { theText : 'Repellat quae' },
            { theText : 'Aperiam' },
            { theText : 'Accusantium' },
            { theText : 'Ipsa del-eniti eaque' },
          ]
        }
      ]
    }
    }
  }
}
</script>

<style scoped>
#Footer{
    position:relative;
    color : white;
    background-color:#363636;
    margin-left: auto;
    margin-right: auto;
    font-family: sans-serif;
}
.footerWrapper{
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    padding:60px 0;
    display: flex;
}.container{
    width: 300px;
    min-width: 200px;
    padding :  0 7%;
} 
.container > p {
    padding : 3px 0;
    cursor: pointer;
    color : #aca5a5;
}.container > p:hover {
    text-decoration: underline;
}
  @media screen and (max-width:1040px) {

  .container{
    width: 200px;
    min-width: 100px;
    padding :  0 3%;
    transition : all 0.5s ease-in-out;
} 
    
  }


</style>