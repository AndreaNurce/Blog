<template>
    <div id="Footer">
        <div class="footerWrapper">
            <div  :key="index" v-for="(objectContent,index) in contect.contentObjects">
                <h1> {{objectContent.tittle}} </h1>
                <p :key="index" v-for="(text,index) in objectContent.texts"><img style="float:left;height:10px" :src="text.image" alt="">{{text.theText}}</p>
                

            </div>
        </div>
    </div>
</template>
<script>
 
export default {
    data(){
    return {
      contect: {
      contentObjects : [{
          tittle : 'Find Us',
          texts : [{ theText : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem modi hic repudiandae odio repellat quae. Aperiam, accusantium ipsa deleniti eaque fugiat aliquam facere quidem inventore nobis? Repellendus laborum iusto f' },
                    { image : '/src/images/mobile-phone.png'},
                    { theText : '123-456-789'},
                    { image : '/src/images/old-typical-phone.png'},
                    { theText : '222-444-8888'},
                    { image : '/src/images/email.png'},
                    { theText : 'example@example.com'},]
        },
        {
          tittle : 'Quick Links',
          texts : [
            { theText : 'Lorem' },
            { theText : 'ipsum dolor' },
            { theText : 'sit amet' },
            { theText : 'Ebay & Amazon' },
            { theText : 'adipisicing elit' },
            { theText : 'elit' },
          ]
        },
        { 
          tittle : 'Quick Links 2',
          texts : [
            { theText : 'Autem modi hic ' },
            { theText : 'repudiandae odio' },
            { theText : 'repellat quae' },
            { theText : 'Aperiam' },
            { theText : 'accusantium' },
            { theText : ' ipsa del-eniti eaque' },
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
    color : white;
    background-color:#363636;
    display: flex;
    justify-content: center;
    
}
.footerWrapper{
    width: 75%;
    padding:60px 0;
    display: flex;
}


</style>