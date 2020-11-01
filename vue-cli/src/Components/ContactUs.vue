<template>
<div id="ContactUs">
  <div class="backDiv"  >
  </div>
  <div class="ContactUsWrapper">
    <div class="formWrapper">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iste dolore perferendis.
           Numquam iste dolore 
        </p>
        <form>
          <input type="text" placeholder="Enter your name here"><br>
          <input type="email" placeholder="Enter a valid email" name="email" id=""><br>
          <textarea  placeholder="Write your message here" name="mesage"></textarea>
        </form>

        <h2>
          Let's talk
        </h2>
    </div>
    <div class="contactWrapper" >
      <div :key='index' v-for="(content , index) in contents" style="color:white;text-align:center;" >
        <img :src="content.image" alt="">
        <p>{{ content.text }}</p>
      </div>
    </div>
  </div>

</div>
  
</template>

<script>

export default {
  data(){
    return {
      contents : [
        {
          text : '123-456-789',
          image : '/src/images/mobile-phone.png',
        },
        {
          text : '222-444-8888',
          image : '/src/images/old-typical-phone.png',
        },
        {
          text : 'example@example.com',
          image : '/src/images/email.png',
        }
      ]
    }
  },mounted () {
    window.addEventListener('scroll', this.handleScroll);
  
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    
  },
  methods: {
    handleScroll (event) {
      this.offset = window.pageYOffset;
      if (window.pageYOffset >= 2000){
       document.querySelector('.formWrapper').style.opacity = 1;
       document.querySelector('.formWrapper').style.transitionDelay =".0s";


      }else{

       document.querySelector('.formWrapper').style.opacity = 0;
       document.querySelector('.formWrapper').style.transitionDelay =".35s";

       
      }if (window.pageYOffset >= 2000){
       document.querySelector('.contactWrapper').style.transitionDelay =".35s";
       document.querySelector('.contactWrapper').style.opacity = 1;

      }else{

       document.querySelector('.contactWrapper').style.opacity = 0;
       document.querySelector('.contactWrapper').style.transitionDelay =".0s";

      }
    }
  }
}
</script>
<style scoped>
.contactWrapper > div > img {
  height : 60px;
}
.contactWrapper > div > *{
  padding : 10px;
}
.contactWrapper > div{
  padding : 20px;
}
.backDiv{
  position:absolute;
  height:900px;
  width:27.5%;
  background-color:#3f3d56;
  z-index :1;
  right : 0;
}
#ContactUs{
  background-color: white;
  height: 900px;
}
.formWrapper{
  width : 50%;
  background-color: white;
  transition: all .6s ease-in-out;
}
.formWrapper  > h2{
  font-size: 20px;
  padding : 16px 24px;
  margin: 20px;
  background-color: #3f3d56;
  display: inline;
  color : white;
  cursor: pointer;
  transition:  0.3s all ease-in-out;
}
.formWrapper  > h2:hover {
  background-color:#524e75;
}
.formWrapper  > h1{
  font-size: 80px;
  padding : 15px;
  color: #3f3d56;


}
.formWrapper  > p{
  font-size: 18px;
  padding : 18px;
  color:gray;
}
.formWrapper > form > input {
  border-right: none;
  border-top: none;
  border-left: none;
  margin : 20px 20px;
  width:90%;
  height: 30px;
  font-size: 20px;
}
.formWrapper > form > textarea {
  resize: none; 
  width:90%;
  height : 70px;
  margin : 20px ;
  border-right: none;
  border-top: none;
  border-left: none;

}
.formWrapper > form > *:focus {
    outline-style: none;
}
.contactWrapper{
  width : 50%;
  background-color: black;
  transition: all .6s ease-in-out;

}
.ContactUsWrapper{
  display: flex;
  z-index: 2;
  position: relative;
  padding: 200px 0;
  width : 90%;
  margin-left : auto;
  margin-right : auto;
}
</style>