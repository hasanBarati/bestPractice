import request from "../axios"

export const getTestPageData=async ()=>{
    const {data}:{data:string}=await request.get('api')
    return data
}