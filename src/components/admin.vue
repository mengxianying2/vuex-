<template>
    <div class="admin">
        <div>
            <router-view></router-view>
        </div>
        <div class="header">
            <router-link v-for="(item,index) in routerLink" :key="index" :to='item.to'>{{item.name}}</router-link>
        </div> 
    </div>
</template>
<script>
export default {
    name:'admin',
    data(){
        return{
           routerLink:[
               {name:'首页',to:'/index'},
               {name:'购物车',to:'/shop'}
           ] 
        }
    }
}
</script>
<style scoped>
.header{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:slateblue;
    color: black;
    font-weight: bold;
    
}
.header a{
     text-decoration: none;
}
.router-link-exact-active.router-link-active{
    color: red;
}
</style>
