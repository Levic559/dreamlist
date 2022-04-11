import axios from "axios";

export const deleteList = async ( formData) => {
  

    try{
        const res = await axios.post(`http://localhost:3750/list/deletelist/${formData}`, 
            
        )
        return res.data
    }catch(err){
        console.log(err.message)
    }
}