import React,{useState} from 'react'
import axios from 'axios'
import '../components/styles.css'

const Main=()=> {

    const [photo,setPhoto] = useState('')
    const [clientId] = useState ('wlMFxrAmWW_naV96UBmlyl4BhfoF7E8oAqGeYPEpyts')
    const [result,setResult] = useState([]);
    const [isOpen,setIsOpen] = useState(false)

   const handleChange=(event)=>{
       setPhoto(event.target.value)
        
    }
    const handleShowDialog = () => {
        setIsOpen(isOpen );
        console.log("cliked");
      };

    const handleSubmit=(event)=>{
        console.log(photo)
        const URL = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;

axios.get(URL).then(response =>{
    console.log(response)
    setResult(response.data.results)
})

    }


    return (
        <div>
            <h3>Unsplash Photo Search in React</h3>
           <input onChange={handleChange} type="text" placeholder="search photos..."></input> 
           <button onClick={handleSubmit} type="submit">Search</button>
           {result.map((photo)=>(
           <img alt="img" src={photo.urls.small} />
           ))}
           {isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={handleShowDialog}
          >
          <img alt="img" src={photo.urls.small} onClick={handleShowDialog} />
          </dialog>
        )}
        </div>
    )
}

export default Main
