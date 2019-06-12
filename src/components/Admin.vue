<template> 
<div class="container">
 <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <newpizza />
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
import newpizza from './newpizza';
export default {
    data(){
        return{
             getMenuItems:[]
        }
    },
    components:{newpizza},
    methods:{
      deleteData(item) {
      fetch(
        "https://wd6476367811srrfgf.wilddogio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data =>  this.$router.push('/menu'))
        //.then(data => {
        //  this.$store.commit("removeMenuItems", item);
        //})
        .catch(err => console.log(err));
    }

    },
    created(){
        fetch("https://wd6476367811srrfgf.wilddogio.com/menu.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        let menuArray = [];
        for (let key in data) {
          // console.log(key) 
          // console.log(data[key])
          data[key].id = key;
          menuArray.push(data[key]);
        }
        // 数据同步
        //this.$store.commit("setMenuItems", menuArray);
         this.getMenuItems = menuArray
      });
    }
}
</script>

