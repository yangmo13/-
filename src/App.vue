<template>
  <div  id="home">
      <router-view></router-view>
  </div>
</template>

<script>
import nav from "@/components/header.vue"
  export default {
      components:{
        'v-header':nav
      }
  }
</script>

<style >
  #app,html,body{
    margin:0;
    padding:0;
           width: 100%;
    height: 100%;  
  }

  #home{
    width: 100%;
    height: 100%;
  }
 
body{
  --index:#707005;
  --gray:#B3B3B3;
  --black:#333;
  --back:#e6e4dd;
}
</style>