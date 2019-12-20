import request from '@/utils/request'

export function getExam(payload){
    let {questions_type_id,questions_stem,subject_id,exam_id,user_id,questions_answer,title}=payload
    console.log(questions_type_id,questions_stem,subject_id,exam_id,user_id,questions_answer,title)
    return request({
        url:"/exam/exam",
        method:"post",
        data:{questions_type_id,questions_stem,subject_id,exam_id,user_id,questions_answer,title}
    })
}
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

