import './Card.css'



const Card = ({name,imageUrl,breed,age,Vaccination}) => {
    return (
      <div  className='card-division'>
       <div className='image-container'>
        <img src={imageUrl}/>
        </div>


        <div className='card-content'>
            <div className='card-title'>
                <h1>Name: {name}</h1>
            </div>
            <div className='card-body'>
                <p>Breed: {breed}</p>
                <p>Age: {age}</p>
                <h3>Vaccination Status: {Vaccination? "True" : "False"}</h3> 
                
            </div>
        </div>
     
       
    </div>
  
      
    )
  }
  
  export default Card

 