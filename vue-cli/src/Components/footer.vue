<template>
    <div id="Footer">
        <div class="footerWrapper">
            <div  :key="index" v-for="(objectContent,index) in contect.contentObjects">
                <h1> {{objectContent.tittle}} </h1>
                <p :key="index" v-for="(text,index) in objectContent.texts">{{text.theText}}</p>
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
          texts : [{ theText : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem modi hic repudiandae odio repellat quae. Aperiam, accusantium ipsa deleniti eaque fugiat aliquam facere quidem inventore nobis? Repellendus laborum iusto f' },]
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
            { theText : ' ipsa deleniti eaque' },
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