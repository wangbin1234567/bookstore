import {getExam} from "@/api/examination.js"
const state={
    //试卷列表
    examList:[],
    start_time:null,
    end_time:null
}
const mutations={
    updateExames(state,payload){
        state.examList=payload
        // console.log(state.examList,"....examlist")
    },
    setStartTime(state){
        state.start_time=state.examList.map((item)=>{
            return new Date(parseInt(item.start_time,10)).toLocaleString()
        })
        // console.log(state.start_time,"....starttime")
    }
}
const actions= {
    async getExam({commit},payload){
        let res=await getExam(payload)
        // console.log(res,".....res")
        commit("updateExames",res.exam)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }