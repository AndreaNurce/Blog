<template>
    <div>
        <div class="mainBarWrapper">
            <div class="mainBar">
                <a href="/blogHosted/"><img src="images/instagram.png"  alt="logo"></a>
                <ul>
                    <router-link to="/blogHosted/" active-class="active" tag="li" exact>Home</router-link>
                    <router-link to="/blogHosted/about" active-class="active" tag="li" >About Us</router-link>
                    <router-link to="/blogHosted/ContactUs" active-class="active" tag="li" >Contact Us</router-link>
                    
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
    transition:  0.3s all ease-in-out;


}
li:hover:hover{
    background-color:#888cbb;
    color: white;
}
.active { 
    background-color:#575A89;
    color: white;
    animation: active-in;
    transition:  0.3s all ease-in-out;


}
.active:hover{
    background-color:#888cbb;
}

</style>