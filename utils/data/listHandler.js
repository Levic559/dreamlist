import axios from "axios";

export const deleteList = async ( formData) => {
  
    const URL = process.env.BASE_URL + `/list/deletelist/${formData}`
    
    try{
        const res = await axios.post(URL)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}


export const getList = async ( ) => {
  
    const URL = process.env.BASE_URL + "/list"
    console.log("URL",URL)
    try{
        const res = await axios.get(URL)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}


export const addList = async (formData ) => {
  
    const URL = process.env.BASE_URL + "/list/addlist"
    try{
        const res = await axios.post(URL,formData)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}