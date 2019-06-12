<template>
 <header>
  
   
      
     <nav class="navbar navbar-expand-lg navbar-light bg-light" >
     <a href="/"  class="navbar-brand"><a class="" href="#"><img style="width:30px;height:30px;" src="https://nightwatchjs.org/images/symbol-nightwatch.svg" alt=""></a>Pizza点餐系统</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul  class="navbar-nav mr-auto"  >
         <li> <router-link  :to="homelink1" class="nav-link">主页</router-link> </li>
           <li > <router-link :to="{name:'menu'}" class="nav-link">菜单</router-link> </li>
             <li > <router-link to="/admin" class="nav-link">管理</router-link> </li>
               <li > <router-link to="/about" class="nav-link">关于我们</router-link> </li>

     </ul>
 
       <ul  class="navbar-nav  ml-auto"  >
         <li > <router-link to="/login" v-show="!isLogin" class="nav-link" ml-left>登录</router-link> </li>
        <li class="nav-link">
          {{this.$store.state.currentUser}}
          </li>   
         <li > <router-link to="/login" v-show="isLogin"  class="nav-link">
        [退出]
         </router-link> </li>
         <li > <router-link to="/register" v-show="!isLogin"  class="nav-link">注册</router-link> </li>
             

     </ul>
       </div>
     </nav>
  
    
    
 </header>
</template>

 
<script>
export default {
    name:'header1',
    data(){
        return{
       homelink1:'/'
        }
    },
    computed:{
     // currentUser(){
     //   return this.$store.getters.currentUser
     //   console.log(this.$store.getters.currentUser)
     // },
      isLogin(){
       return this.$store.getters.isLogin
    }
    }
}
</script>

<style>

</style>

