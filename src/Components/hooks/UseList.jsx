import { useEffect,useReducer } from "react";
import axios from "axios";

const reducer = (state,action) => {
  switch(action.type){
    case "SUCCESS" : 
      return {
        loading : false,
        posts : action.data,
        error : ""
      }
    case "ERROR" : 
      return {
        loading : true,
        posts : [],
        error : action.message 
      };
    default :
      state
  }
    
}

const UseList = (url,initialState) => {
  
  const [state,dispatch] = useReducer(reducer,initialState);
  useEffect(()=>{
    async function fetchPosts(){
        try{
          const res = await axios.get(url);
          dispatch({type: "SUCCESS",data : res.data})
        }catch(error){
          dispatch({type: "ERROR",message : error.message })
        }
    }
    fetchPosts();
  },[url]);

  return state;
}

export default UseList;