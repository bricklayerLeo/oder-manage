<template>
 <header>
     <nav class="navbar navbar-expand-lg navbar-light bg-light" >
         <a class="tubiao" href=""><img style="width:30px;height:30px;" src="https://nightwatchjs.org/images/symbol-nightwatch.svg" alt=""></a>
    
     <a href="/"  class="navbar-brand">Pizza点餐系统</a>
     <ul  class="navbar-nav "  >
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

