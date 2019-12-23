import request from '@/utils/request'
//创建试卷
export function CreateExam(payload){
    let {subject_id,exam_id,start_time,end_time}=payload
    console.log(subject_id,exam_id,start_time,end_time)
    return request({
        url:"/exam/new",
        method:"post",
        data:{subject_id,exam_id,start_time,end_time}
    })
}
//获取试卷列表
export function getExam(){
    return request({
        url:"/exam/exam",
        method:"get",
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

//获取试卷详情
export function getW5tcy(){
    return request({
        url:"/exam/exam/w5tcy-g2dts",
        method:"get",
    })
}
