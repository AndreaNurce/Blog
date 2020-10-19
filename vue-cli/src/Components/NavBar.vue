<template>
    <div>
        <div class="mainBarWrapper">
            <div class="mainBar">
                <a href="/"><img src="/src/images/instagram.png"  alt="logo"></a>
                <ul>
                    <router-link to="/" active-class="active" tag="li" exact>Home</router-link>
                    <router-link to="/about" active-class="active" tag="li" >About Us</router-link>
                    <router-link to="/ContactUs" active-class="active" tag="li" >Contact Us</router-link>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}

</script>
<style scoped>
.mainBarWrapper{
    width: 100%;
    display: inline-flex;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 1px 10px #999;
    position: fixed;
    z-index:3   ; 
    top:0; 


}
.mainBar {
    width: 1200px;
    display: inline-flex;
    justify-content: space-between;
    align-content: center;
    background-color: white;

}
img,a{
    height: 40px;
    margin: auto 0;
    padding-left: 5px;
}
li{
    text-decoration-style: none;
    display: inline-block;
    color: black;
    font-weight: bolder;
    cursor: pointer ;
    padding: 1rem;

}
.active { 
    background-color:#575A89;
    color: white;
    animation: active-in;

}

</style>