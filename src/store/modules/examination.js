import {getExam} from "@/api/examination.js"
const state = {
    data:{
        subject_id:"",
        exam_id:"",
        title:"",
        number:4,
        start_time:"",
        end_time:""
    },
    types: [{
        value: '选项1',
        label: '周考一'
      }, {
        value: '选项2',
        label: '周考二'
      }, {
        value: '选项3',
        label: '周考三'
      }, {
        value: '选项4',
        label: '月考'
      }],
      course:[{
        typevalue: '选项1',
        label: 'javaScript上'
    },
    {
        typevalue: '选项2',
        label: 'javaScript下'
    },
    {
        typevalue: '选项3',
        label: '模块化开发'
    },
    {
        typevalue: '选项4',
        label: '移动端开发'
    },
    {
        typevalue: '选项5',
        label: 'node基础'
    },
    {
        typevalue: '选项6',
        label: '组件式开发'
    },
    {
        typevalue: '选项7',
        label: '渐进式开发'
    },
    {
        typevalue: '选项8',
        label: '项目实战'
    },
    {
        typevalue: '选项9',
        label: 'javaScript高级'
    }]
}

const mutations = {
    updateExam(state,payload){
      state.data=payload
    },
    setSubject(state,payload){

    }
}

const actions = {
   async getExam({commit},payload){
       window.console.log(payload)
       let res = await getExam(payload)
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