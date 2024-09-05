import { axiosInstance } from "./axiosInstance";

export const addUser = async (user)=>{
    try{
        const res = await axiosInstance.post('/users/create',user);
        console.log("User added to successfully")
        return res.data;
    }
    catch(error){
        console.log('Error while connecting with API',error);
    }
}

export const getAllUsers = async () =>{
    try{
        const res = await axiosInstance.get('/users/getAll');
        console.log("All users fetched successfully from the server to the client");
        return res.data;
    }
    catch(error){
        console.log('Error while connecting with API',error);
    }
}