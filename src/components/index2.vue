<template>
  <div id="comA">
    <div class="comA">
      <table>
        <tr v-for="(item,index) in arr" :key="index">
          <td>
            <img :src="item.img" alt>
          </td>
              <td>{{item.name}}</td>
          <td>{{item.info}}</td>
          <td>￥{{item.price}}</td>
          <td>
            <button @click="add_car(item)">+</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {mapActions} from 'vuex'
export default {
  name: "comA",
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "http://localhost:3000/add"
    }).then(res => {
       for(let i=0;i<res.data.length;i++){
         if(res.data[i].se=='3'){
           this.arr.push(res.data[i])
         }
       }
    });
  },
  methods: {
    ...mapActions(['add_car'])
  }
};
</script>
<style>
.comA {
    width: 100%;
    }
     table{
      width: 100%;
    }
    button{
        width: 20px;
        height: 20px;
    }
    button:hover{
        background-color: steelblue;
        border: none;
    }

   td img{
       height: 25px;
       width: 25px;
   } 
</style>