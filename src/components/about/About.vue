<template>
   <div>
       <div class="row mb-5">
       <div class="col-4 ">
           <div class="list-group mb-5">
               <router-link :to="{name: 'history'}" tag="li" class="nav-link" >
                    <a class="list-group-item  list-group-item-action"> 历史订单</a>
                    </router-link>

                     <router-link :to="{name:'contact'}" tag="li" class="nav-link" >
                    <a class="list-group-item  list-group-item-action"> 联系我们</a>
                    </router-link>
                     <router-link :to="{name:'orderguide'}" tag="li" class="nav-link" >
                    <a class="list-group-item  list-group-item-action"> 点餐系统</a>
                    </router-link>
                     <router-link :to="{name:'delivery'}" tag="li" class="nav-link" >
                    <a class="list-group-item  list-group-item-action"> 快递信息</a>
                    </router-link>
              
          </div>
       </div>
        <div class="col-8">
             <router-view />
        </div>
       </div>
   </div>
</template>
