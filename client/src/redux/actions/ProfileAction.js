import axios from "axios";
import { GET_ERRORS, USER_PROFILE } from "../types";


export const AddProfile = (data, history)=> async(dispatch)=>{
   await axios.post('/api/profile', data)
   .then(res=>{

       dispatch({
           type: USER_PROFILE,
           payload: res.data
       })
       history.push('/dashboard');
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

export const  AddExperience =  (data, history)=>async(dispatch)=>{
    await axios.post('/api/experience', data)
        .then(res=>{
            dispatch({
                type: USER_PROFILE,
                payload: res.data
            })
            history.push('/dashboard')
        })
        .catch(err=>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const  DelExperience =  (id)=>async(dispatch)=>{
    if(window.confirm('do you want to delete this experience')){
        await axios.delete(`/api/experience/${id}`)
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
}