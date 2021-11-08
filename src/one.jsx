import {useEffect, useState} from "react"
import {API} from "./api"


function OneQuote(props){
    const [quote,setQuote] = useState([])
    useEffect(()=>{
        API.get('random').then((rezultat)=>{
            console.log(rezultat.data)
            setQuote(rezultat.data)
        })
    },[])
    return (
        <p>{quote.content}</p>
)
}

export default  OneQuote;