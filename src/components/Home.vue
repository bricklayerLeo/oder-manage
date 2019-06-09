<template>
   <div class="home">
      <div class="tupian">
           <div class="zhong"> 
             <button  @click="getmenu" class="btn btn-success">Let's order</button>
               </div> 
               </div>

               
   </div>
</template>

<script>
export default {
    methods:{
        getmenu(){
            this.$router.push('/menu')
        }
    }
}
</script>


<style>
.tupian{
    width: 100%;
    height:80vh;
    background:url('../assets/home.jpg')no-repeat top/100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.zhong{
    position: absolute;
    top: 290px;
    width: 40%;
    height: 20%;
    border-radius: 20px;
    opacity: .8;
    background-color: white;
     display: flex;
    justify-content: center;
    align-items: center;
}

</style>
