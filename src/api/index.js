import request from '@/utils/request'


//添加用户接口
export function register(data){
    console.log(data,'=>>>>>>>>=---');
    return request({
        url:"/user",
        method:"post",
        data
    })
}
//添加身份/user/identity
export function AddShen(params){    
    return request({
        url:"/user/identity/edit",
        method:"get",
        params
    })
}
export function USER_List(){    
    return request({
        url:"/user/user",
        method:"get",
    })
}

//添加api接口权限
export function permissions(data){
    console.log(data,"====-------???????");
    
    return request({
        url:`/user/authorityApi/edit?api_authority_text=${data.api_authority_text}&api_authority_url=${data.api_authority_url}&api_authority_method=${data.api_authority_method}`,
        method:"get"
    })
}
//获取视图接口权限
export function jurisdiction(){
    return request({
        url:'/user/view_authority',
        method:"get"
    })
}

//添加视图权限
export function jurisdictionAdd(data){
    return request({
        url:`/user/authorityView/edit?view_authority_text=${data.view_authority_text}&view_id=${data.view_authority_id}`,
        method:"get"
    })
}

//选择身份id
export function userList(){
    return request({
        url:"/user/identity",
        method:"get"
    })
}

//给身份设定api接口权限
export function Identity_permissions(data){
    return request({
        url:"/user/setIdentityApi",
        method:"post",
        data
    })
}
//api接口权限
export function Apijurisdiction(){
    return request({
        url:"/user/api_authority",
        method:"get"
    })
}

export function setIdentityView(data){
    return request({
        url:"/user/setIdentityView",
        method:"post",
        data
    })
}

