import request from '@/utils/request'

export function getExam(){
    return request({
        url:"/exam/exam",
        method:"post",
        params:{subject_id,exam_exam_id,title,number,start_time,end_time}
    })
}