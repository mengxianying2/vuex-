<template>
  <div class="shop">
    <div v-if="this.goodList.length>0">
      购物车
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="checkAll" @change="allCheck" />
            </th>
            <th>图片</th>
            <th>商品</th>
            <th>品牌</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in goodList" :key="index">
            <td>
              <input
                type="checkbox"
                v-model="check"
                :checked="item.checked"
                :value="item"
               @click="dx(index)"
              />
            </td>
            <td>
              <img :src="item.img" />
            </td>
            <td>{{item.name}}</td>
            <td>{{item.info}}</td>
            <td>{{item.price}}元</td>
            <td>
              <button @click="jian(index)">—</button>
              <input type="text" v-model="item.num" />
              <button @click="add(index)">+</button>
            </td>
            <td @click="del(index)">删除</td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>结算：{{total}}</p>
      </div>
    </div>
    <div v-else class="ys">购物车空空如也</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "shop",
  data() {
    return {
      num: 1,
      checkAll: false,
      check: []
    };
  },
  methods: {
    del(i) {
      this.goodList.splice(i, 1);
    },
    jian(i) {
      if (this.goodList[i].num <= 0) {
        this.goodList.splice(i, 1);
      } else {
        this.goodList[i].num--;
      }
    },
    add(i) {
      this.goodList[i].num++;
    },
    allCheck() {
      let checkAll = this.checkAll;
      if (checkAll) {
        this.check = this.arr1;
        this.arr1.map(item => {
          return (item.checked = true);
        });
      } else {
        this.check = [];
        this.arr1.map(item => {
          return (item.checked = false);
        });
      }
    },
   dx(data){
        let num = 0
        this.goodList[data].checked=!this.goodList[data].checked
        this.goodList.map((item,index)=>{
            item.checked==true ? num++ : num
        })
        num==this.goodList.length?this.checkAll=true:this.checkAll= false
    }  
   },
    
  computed: {
    ...mapState(["goodList"]),
    ...mapGetters(["total"]),
    arr1() {
      return this.goodList.map(item => {
        return item;
      });
    }
  }
};
</script>
<style scoped>
.ys {
  font-size: 15px;
  color: red;
  text-align: center;
}
table,
th,
td {
  border: 1px solid black;
  text-align: center;
  border-collapse: collapse;
}
table input {
  width: 15px;
}
</style>