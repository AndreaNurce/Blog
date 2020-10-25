<template>
    <div id="Footer">
    <div class="footerWrapper">
                            <div  :key="index" v-for="(folder,index) in priv.folders">
                        {{folder.tittle}}
                            <p :key="index" v-for="(text,index) in folder.texts">
                                {{text.theText}}
                            </p>
                        </div>
      </div>
    </div>
</template>
<script>
 
export default {
    data(){
    return {
      priv: {
      folders : [{
          tittle : 'Find Us',
          texts : [{ theText : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem modi hic repudiandae odio repellat quae. Aperiam, accusantium ipsa deleniti eaque fugiat aliquam facere quidem inventore nobis? Repellendus laborum iusto f' },
            { theText : 'check1.1' },   
            { theText : 'check1.2' }
          ]
        },
        {
          tittle : 'folder2',
          texts : [
            { theText : 'check2.1' },
            { theText : 'check2.2' }
          ]
        },
        {
          tittle : 'folder3',
          texts : [
            { theText : 'check2.1' },
            { theText : 'check2.2' }
          ]
        },
        {
          tittle : 'folder4',
          texts : [
            { theText : 'check2.1' },
            { theText : 'check2.2' }
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