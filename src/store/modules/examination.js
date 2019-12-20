import {getExam} from "@/api/examination.js"
const state = {
    questions_type_id:"",
    questions_stem:"",
    subject_id:"",//课程的id
    exam_id:"",//类型id
    user_id:"",//批卷人id
    questions_answer:"",
    title:"",//课程
        // subject_id:"",//试卷名称
        // exam_exam_id:"",//试卷类型
        // title:"",//课程
        // number:4,//题量 初始为4
        // start_time:"",//开始时间
        // end_time:"",//结束时间
}

const mutations = {
    updateExam(state,payload){
     window.console.log(state)
     window.console.log(payload)
    },
    //修改试卷名称
    // setSubject(state,payload){
    //     state.subject_id=payload.subject_id
    // },
    //修改试卷类型
    // setExam(state,payload){
    //     state.exam_exam_id=payload.exam_exam_id
    // },
    //修改课程
    // setTitle(state,payload){
    //     state.title=payload.title
    // },
    //修改题量
    // setNumber(state,payload){
    //     state.number=payload.number
    // },
    //修改开始时间
    // setStartTime(state,payload){
    //     state.start_time=payload.start_time
    // },
    //修改结束时间
    // setEndTime(state,payload){
    //     state.end_time=payload.end_time
    // }
}

const actions = {
   async getExam({commit},payload){
       window.console.log(payload)
       window.console.log("-----------------")
       let res = await getExam(payload)
       window.console.log("-----------------")
       window.console.log(res)
       commit("updateExam",res.data)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }