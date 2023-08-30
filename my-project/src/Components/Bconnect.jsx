import axios from "axios"
import { useEffect,useState } from "react"
import Board from "./Board";
const Bconnect=()=> {

  const [info, setInfo] = useState([]);
  const [change,setChange]=useState(false);

  const fetchData = async ()=>{

    await axios.get('http://localhost:8080/car/')
    .then(response =>{
      console.log(response.data)
      setInfo(response.data)})
    .catch(error => console.log("error:",error.message))
  }



  useEffect(() =>{
    fetchData();
  },[change]);



  return (
    
      <>
      <div className=" flex gap-10 flex-wrap p-5">
      {info.map((value,index)=>{
        return(
      <Board
      key={index}
      name={value.name}
      imgurl={value.imgurl}
      _id={value._id}
      setChange={setChange} 
      />
        );
      })
      }
      
      
    





      </div>
      </>
  
  )
}

export default Bconnect;