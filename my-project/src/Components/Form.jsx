import axios from "axios";
import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [img, setImg] = useState("");
    const [age, setAge] = useState("");
    const [isVaccinated, setIsVaccinated] = useState(false);




    const handleSubmit = async () => {
        const url = 'http://localhost:8080/Dog/'; 

        const data = {
            name: name,
            breed: breed,
            age: age,
            img: img,
            isVaccinated: isVaccinated
          };

          axios.post(url, data)
          .then(response => {
            console.log('Response:', response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        
    }
    
  

  

    return (

      <div className=' mt-20 border border-black p-5 m-6 bg-gray-600  '>
        <form className="flex flex-col justify-start gap-2 ">
          <label >Enter the name of Dog</label>
          <input className="border border-black p-2" type="text" placeholder="eg tuffy" onChange={(e)=> {setName(e.target.value)}}/>
  
          <label>Enter the breed of Dog</label>
          <input className="border border-black p-2" type="text" placeholder="eg Husky" onChange={(e)=> {setBreed(e.target.value)}}/>
  
          <label>Enter the age of Dog</label>
          <input className="border border-black p-2" type="text" placeholder="eg 6" onChange={(e)=> {setAge(e.target.value)}}/>
  
          <label>Enter the url of Image</label>
          <input className="border border-black p-2" type="text" placeholder="eg https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg" onChange={(e)=> {setImg(e.target.value)}}/>
  
          <div>
          <label>The Dog is Vaccinated</label>
          </div>
          <div>
          
          <input type="radio" onChange={()=>{isVaccinated? setIsVaccinated(false): setIsVaccinated(true)}}/>
          </div>
          
          <div>
          {/* <input type="submit" className="p-2 bg-blue-400 rounded"/>  */}
          <button onClick={()=>{handleSubmit()}}>Submit</button>
          </div>

   
         
        </form>
      </div>
    )
  }
  
  export default Form


  