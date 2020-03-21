import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodList:[]
  },
  mutations: {
    addcar(state,cardata){
      let nums=1;
      state.goodList.map(item=>{
        if(item._id==cardata._id){
          nums++
          item.num++
        }
      })
      if(nums==1){
          Vue.set(cardata,'num',1)
          Vue.set(cardata,"checked",false)
        this.state.goodList.push(cardata)
      }
    },
  },
  actions: {
    add_car({commit},cardata){
      commit('addcar',cardata)
    }
  },
  getters:{
     total(state){
       let sum=0;
       state.goodList.map(item=>{
           if(item.checked==true){
            sum+=Number(item.num)*Number(item.price)
           }

       })
       return sum;
     }

  },
  modules: {
  }
})
