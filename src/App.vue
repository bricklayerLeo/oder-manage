<template>
  <div id="app">
      <header1 />
    <router-view />
 
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4">
      <router-view  name="orderguide"></router-view>
    </div>
       <div class="col-sm-12 col-md-4">
     <router-view name="history"></router-view>
    </div>
       <div class="col-sm-12 col-md-4">
           <router-view  name="delivery"></router-view>
      
    </div>
  </div>
</div>


  </div>
</template>

<script>
import header1 from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    header1
  }
}
</script>

<style>
#app{
 width: 60%;
 margin: 0 auto;
}


</style>

