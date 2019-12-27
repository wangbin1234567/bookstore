import {delG2dts} from "@/api/examination.js"
const state={

}
const mutations={
    updateG2dts(state,payload){
        console.log(state,payload,"....state,payload")
    }
}
const actions={
    async delG2dts({commit},payload){
        window.console.log(payload,"...payload")
        let res=await delG2dts(payload)
        commit("updateG2dts",res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }