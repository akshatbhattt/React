import axios from "axios"
import { useEffect,useState } from "react"
import Card from "./Card"
const Home=()=> {

  const [info, setInfo] = useState([]);
  

  const fetchData = async ()=>{

    await axios.get('https://react-card.onrender.com/Dog/')
    .then(response =>{setInfo(response.data)})
    .catch(error => console.log("error:",error.message))
  }



  useEffect(() =>{
    fetchData();
  },[]);



  return (
    
      <>
      <div className=" flex gap-10 flex-wrap p-5">
      {info.map((value)=>{
        return(
      <Card
      name={value.name}
      imageUrl={value.img}
      breed={value.breed}
      age={value.age}
      Vaccination={value.isVaccinated}
      />
        );



      })
      }

      
    



{/* <Card
      title='Card Component'
      imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeZ5mVbarupP8UWVic7UtumtbIyE0GY-ucQ&usqp=CAU'
      body='enter your name'
      text="akshat"
      text1="this line is added by me" 
      /> */}


      </div>
      </>
  
  )
}

export default Home
