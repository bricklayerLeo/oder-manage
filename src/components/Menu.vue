<template>
   <div class="container">
<div class="row">
<div class="col-sm-12 col-md-8">
 <table class="table">
     <thead class="thead-default">
         <tr>
             <th>披萨名称</th>
             <th>尺寸</th>
             <th>价格</th>
             <th>加入</th>
         </tr>
     </thead>
     <tbody class="tbody" v-for="item in getMenuItems" :key="item.index">
         <tr v-for="option in item.options" :key="option.index">
            <td>{{item.name}}</td>
             <td >{{option.size}}</td>
              <td>{{option.price}}</td>
              <td>
              <button @click="addtomenu(item,option)" class="btn btn-sm btn-outline-success">+</button>
              </td>
         </tr>

       
     </tbody>
 </table>

</div>


<div class="col-sm-12  col-md-4">
    <div v-if="tobuycar.length>0" >
 <table class="table">
    <thead class="thead-default">
       <tr>
        <th>数量</th>
        <th>品种</th>
        <th>尺寸</th>
        <th>价格</th>
       </tr>
    </thead>
    <tbody>
        <tr v-for="item in tobuycar" :key="item.index">
           <td>  
            <button @click="jianjian(item)" class="btn btn-sm btn-light">-</button>
            <span>{{item.quantity}}</span> 
            <button @click="jiajia(item)" class="btn btn-sm btn-light">+</button> 
            </td>
           <td>{{item.name}}</td>
           <td>{{item.size}}</td>
           <td>{{item.price*item.quantity}}</td>
        </tr>
      </tbody>
      </table>
      <p>总价:{{this.total}}RMB</p>
      <button class="btn btn-success btn-block"
      >提交</button>
   </div>
   <div v-else><p>购物车没有任何商品</p></div>
   </div>
</div>


</div>
</template>
<script>

export default {
    data(){
        return{
    totalCost:'',
    tobuycar:[],
    getMenuItems:{}
        }
    },
    computed:{
      total(){ 
        let totalCost = 0

        for(let index in this.tobuycar){
          let individualItem = this.tobuycar[index]
          totalCost += individualItem.quantity * individualItem.price
        }

        return totalCost
      }
    },
    created(){
      this.getData()
         
    },
    methods:{
       addtomenu(item,option){
          let basket = {
                name:item.name,
                price:option.price,
                size:option.size,
                quantity:1
            }
           if(this.tobuycar.length>0){

               let result = this.tobuycar.filter((basket)=>{
                   return (basket.name == item.name && basket.price == option.price)
               })
             if(result !=null && result.length>0){
               result[0].quantity++
               }else{
              this.tobuycar.push(basket)
           }
           
           }else{
              this.tobuycar.push(basket)}

            
        },
        jianjian(item){
            item.quantity--
            if(item.quantity<=0){
                this.removeFromBasket(item)
            }
        },
        jiajia(item){
            item.quantity++
        },
        removeFromBasket(item){
            this.tobuycar.splice(this.tobuycar.indexOf(item),1)
        },
        getData(){
            fetch("https://wd6476367811srrfgf.wilddogio.com/menu.json")
           .then(res => {
             return res.json()
           })
           .then(data => {
             this.getMenuItems = data
           })
         
           
        }
       
    }

}
</script>
