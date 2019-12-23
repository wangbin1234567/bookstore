import request from '@/utils/request'
//创建试卷
export function CreateExam(payload){
    let {subject_id,exam_id,title,start_time,end_time}=payload
    console.log(subject_id,exam_id,title,start_time,end_time)
    return request({
        url:"/exam/exam",
        method:"post",
        data:{subject_id,exam_id,title,start_time,end_time}
    })
}
//获取试卷列表
export function getExam(){
    return request({
        url:"/exam/exam",
        method:"get",
    })
}
//按条件获取试题类型
// export function getQuestions(payload){
//     let {exam_id}=payload
//     console.log(exam_id)
//     return request({
//         url:"/exam/questions/condition",
//         method:"get",
//         data:{exam_id}
//     })
// }
//考试类型
export function getExamType(){
    return request({
        url:"/exam/examType",
        method:"get",
    })
}
//所有课程
export function getSubject(){
    return request({
        url:"/exam/subject",
        method:"get",
    })
}

