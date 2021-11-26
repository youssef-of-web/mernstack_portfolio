import axios from "axios";
import { GET_ERRORS, USER_PROFILE } from "../types";


export const AddProfile = (data)=> async(dispatch)=>{
   await axios.post('/api/profile', data)
   .then(res=>{
       alert('profile added with success');
       dispatch({
           type: USER_PROFILE,
           payload: res.data
       })
   })
   .catch(err=>{
       dispatch({
           type: GET_ERRORS,
           payload: err.response.data
       })
   })
}


export const GetProfile = ()=> async(dispatch)=>{
    await axios.get('/api/profile')
    .then(res=>{
        dispatch({
            type: USER_PROFILE,
            payload: res.data
        })
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}