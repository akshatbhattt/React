import { useState,useEffect } from "react";
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";

const Update_car=()=>{
    const{id}=useParams();
    const url=`http://localhost:8080/car/${id}`;
    const navigate=useNavigate();
    const [name,setName] = useState("");
    const [imgurl,setImg]= useState("");
    
    const getData=async()=>{
        const{data}=await axios.get(url);
        setName(data?.name);
        setImg(data?.imgurl);
    }
      useEffect(()=>{
        getData();
      },[])
    const handlesubmit =async  (e) =>{
        e.preventDefault();
        const url =`http://localhost:8080/car/${id}`;
 
        const data={
         name: name,
         imgurl:imgurl
        }
 
        await axios.put(url,data)
        .then(response =>{ console.log('resonse',response.data);
        navigate("/");
       })
 
       .catch(error => {
         console.error('error',error)
       });}
    return(
        <div className=' mt-20 border border-black p-5 m-6 bg-gray-600'>
         <form className="flex flex-col justify-start gap-2 ">
  
  
                <label>enter car name</label>
                <input className="border border-black p-2" type="text"  value={name} onChange={(e)=>{setName(e.target.value)} }/>
  
  
                <label>enter url for image</label>
                <input className="border border-black p-2" type="text"  value={imgurl} onChange={(e)=>{setImg(e.target.value)}   }/>
                
                <div>
                 <button onClick={handlesubmit} >Update </button> 
                </div>
  
            </form>
            </div> 
            
  
        )
        
}
export default Update_car