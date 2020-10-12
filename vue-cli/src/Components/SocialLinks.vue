<template>
        <div>
    <section class="socialNav">
            <!-- Add font awesome icons -->
    <a href="https://facebook.com" target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com" target="_blank" class="fa fa-twitter"></a>
    <a href="https://github.com" target="_blank" class="fa fa-github"></a>
    <a href="https://linkedin.com" target="_blank" class="fa fa-linkedin"></a>
    </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.socialNav{
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
   /* Style all font awesome icons */
.fa {
  margin: 8px;
  padding: 14px;
  font-size: 20px;
  width: 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  transition: transform .4s ease; 
  -moz-transition: transform .4s ease;

}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
  transform: scale(1.1);
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}

/* Twitter */
.fa-twitter {
  background: #55ACEE;
  color: white;
} 
.fa-github {
  background: #232b31;
  color: white;
}
.fa-linkedin {
  background: #6ec0ff;
  color: white;
}
</style>