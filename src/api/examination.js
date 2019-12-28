import request from '@/utils/request'
//创建试卷
export function CreateExam(payload){
    return request({
        url:"/exam/exam",
        method:"post",
        data:payload
    })
}
//获取试卷列表
export function getExam(){
    return request({
        url:"/exam/exam",
        method:"get",
    })
}

//考试类型列表
export function getExamType(){
    return request({
        url:"/exam/examType",
        method:"get",
    })
}

//课程列表
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
//删除试卷
export function delG2dts(){
    return request({
        url:"/exam/exam/w5tcy-g2dts",
        method:"delete"
    })
}

