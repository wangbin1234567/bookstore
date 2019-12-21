import request from '@/utils/request'

export function getExam(payload){
    let {exam_exam_id,questions,start_time,end_time}=payload
    console.log(exam_exam_id,questions,start_time,end_time)
    return request({
        url:"/exam/exam",
        method:"post",
        data:{exam_exam_id,questions,start_time,end_time}
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

