import { getStudent } from '@/api/student'
import es from 'element-ui/lib/locale/lang/es'

const state = {
    studentList: [],
    roomList: [],
    gradeList: [],
    arr: []
  }
  function formatroomList(data){
    let str=[]
    data.map(item=>{
      str.push(item.room_text)
    }) 
    return [...new Set(str)]    
  }
  function formatgradeList(data){
    let str=[]
    data.map(item=>{
      str.push(item.grade_name)
    }) 
    return [...new Set(str)]    
  }
  function formatstudentList(state,data){
    console.log(data)
    let str=[]
    console.log(state.studentList)
    state.studentList=state.studentList.length>0?state.studentList:state.arr
       if(data.student_name&&data.room_text===""&&data.grade_name===""){
         str=state.studentList.filter(item=>
          item.student_name===data.student_name
        )
         console.log(str)
      return str 
       }else if(data.student_name===""&&data.room_text&&data.grade_name===""){ 
        str=state.studentList.filter(item=>
          item.room_text===data.room_text  
          )
          console.log(str)
       return str 
       }else if(data.student_name===""&&data.room_text===""&&data.grade_name){
        str=state.studentList.filter(item=>
        item.grade_name===data.grade_name
           )
           console.log(str)
        return str 
       }else if(data.student_name&&data.room_text&&data.grade_name===""){
        str=state.studentList.filter(item=>
        item.student_name===data.student_name&&item.room_text===data.room_text
        )
        console.log(str)
     return str 
       }else if(data.student_name&&data.room_text===""&&data.grade_name){
        str=state.studentList.filter(item=>
        item.student_name===data.student_name&&item.grade_name===data.grade_name
        )
        console.log(str)
     return str 
       }else if(data.student_name===""&&data.room_text&&data.grade_name){
        str=state.studentList.filter(item=>
        item.room_text===data.room_text&&item.grade_name===data.grade_name
        )
        console.log(str)
     return str 
       }else if(data.student_name&&data.room_text&&data.grade_name){
        str=state.studentList.filter(item=>
        item.student_name===data.student_name&&item.room_text===data.room_text&&item.grade_name===data.grade_name
        )
        console.log(str)
     return str 
       }
      //  item.student_name===data.student_name||item.room_text===data.room_text||item.grade_name===data.grade_name
  }
  const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.studentList=payload
      state.arr=payload
        state.roomList=formatroomList(payload)
        state.gradeList=formatgradeList(payload)     
    },
    searchStudent(state,payload){
      state.studentList=formatstudentList(state,payload)
      console.log(state.studentList)
    }
  }
  
  const actions = {
    async getStudent({ commit }) {
        let res =  await getStudent()
        console.log(res)
        commit('ADD_ERROR_LOG', res.data)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }