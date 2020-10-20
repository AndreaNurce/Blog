<template>
<div id="ContactUs">
  <div style="position:absolute;height:900px;width:25%;background-color:#3f3d56;z-index :1;right : 0;" >
  </div>
  <div class="ContactUsWrapper">
    <div class="formWrapper"></div>
    <div class="contactWrapper" ></div>
  </div>

</div>
  
</template>

<script>

export default {
}
</script>
<style scoped>
#ContactUs{
  background-color: white;
  height: 900px;

}
.formWrapper{
  width : 50%;
  height: 500px;
  background-color: white;
}
.contactWrapper{
  width : 50%;
  height: 500px;
  background-color: black;
}
.ContactUsWrapper{
  display: flex;
  z-index: 2;
  position: relative;
  padding: 200px 0;
}
</style>