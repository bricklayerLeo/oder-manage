<template>
   <div class="card mt-2">
  <div class="card-header ">
    联系我们
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>联系我们</p>
      <footer class="blockquote-footer"> <cite title="Source Title">873634131@qq.com</cite></footer>
    </blockquote>
    <router-link :to="{name:'/phone'}">电话</router-link>
     <router-link :to="{name:'/person'}">人物</router-link>
  <router-view></router-view>
  </div>
</div>
</template>
