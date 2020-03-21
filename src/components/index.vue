<template>
    <div class="admin">
        <div class="header">
            <router-link v-for="(item,index) in link" :key="index" :to='item.to'>
                {{item.name}}
            </router-link>
        </div>
    <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'admin',
    data(){
        return{
        link:[
              {name:'冰箱',to:'/index/index0',se:'1'},
              {name:'电脑',to:'/index/index1',se:'2'},
              {name:'手机',to:'/index/index2',se:'3'},
          ]  
        }
    },
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
</style>
<style scoped>

.admin{
    width: 100%;
    height: 100%;
}
.header{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:sandybrown;   
    font-weight: bold;
    
}
.header a{
     text-decoration: none;
     color: black;
}
.router-link-exact-active.router-link-active{
    color:steelblue;
}
</style>