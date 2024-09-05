import { axiosInstance } from "./axiosInstance";

export const setConversation = async ()=>{
    try{
        const response = await axiosInstance.post('/conversations/create');
        return response.data;
    }
    catch(error){
        console.log('error setting conversation', error);
    }
}