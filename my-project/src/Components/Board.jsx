import './Card.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Board = ({imgurl,name,_id,setChange}) => {
    const navigate= useNavigate();
        const deletecar = async () => {
        const url=`https://react-card.onrender.com/car/${_id}`;
        axios.delete(url)
.then(response =>{console.log('response',response.data);
setChange(true);
})

.catch(error => {console.error('error',error);});
    
}


    return (
        <>
      <div  className='card-division'>
       <div className='image-container'>
        <img src={imgurl}/>
        </div>



        <div className='card-content'>
            <div className='card-title'>
                <h1>Name: {name}</h1>
            </div>
        
        </div>

        <div>
         <button className='card-division'  onClick={()=>{deletecar()}}>delete</button>
        </div>

        <div>
         <button className='card-division'  onClick={()=>{navigate(`update/${_id}`);}}>Edit</button>
        </div>

        
     
       
    </div>
  </>
      
    )
  }
  
  export default Board

 