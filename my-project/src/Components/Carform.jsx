    import axios from "axios"
    import { useState } from "react";

    const Carform = () =>{

      const [name,setName] = useState("");
      const [imgurl,setImg]= useState("");

      
      const handlesubmit =async  () =>{
       const url ='http://localhost:8080/car/';

       const data={
        name: name,
        imgurl:imgurl
       }

       axios.post(url,data)
       .then(response =>{ console.log('resonse',responce.data);
      })

      .catch(error => {
        console.error('error',error)
      });

 }




      return(
      <div className=' mt-20 border border-black p-5 m-6 bg-gray-600'>
       <form className="flex flex-col justify-start gap-2 ">


              <label>enter car name</label>
              <input className="border border-black p-2" type="text"  onChange={(e)=>{setName(e.target.value)} }/>


              <label>enter url for image</label>
              <input className="border border-black p-2" type="text"  onChange={(e)=>{setImg(e.target.value)}   }/>
              
              <div>
               <button onClick={  ()=>{handlesubmit()}   }>Submit </button> 
              </div>

          </form>
          </div> 
          

      )
      

    }

    export default Carform;
  
  