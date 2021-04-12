import React,{useEffect, useState} from 'react';
import axios from "axios";

 const Tok = () => {
     const [num, setNum] = useState()
     const [name, setname] = useState()
     useEffect(()=>{
         async function getData(){
           const res=  await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
           setNum(res.data.name)
           
          
         }

         getData()
     })
     

    return (
        <div className="haj">
            <h1>{name}</h1>
            <h1>u choose {num}</h1>
            <select value={num} onChange={(e)=>{
                setNum(e.target.value)

            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            
        </div>
    )
}

export default Tok;
