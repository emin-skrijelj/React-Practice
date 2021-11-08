import {useEffect, useState} from "react"
import {API} from "./api/quotes"


function Quote(props){
    const [quote,setQuote] = useState([])
    useEffect(()=>{
        API.get('quotes?page=1').then((rezultat)=>{
            console.log(rezultat.data.results)
            setQuote(rezultat.data.results)
        })
    },[])
    return (
        quote.map((value) =>  {
            return (<div class="card">
                    <div clas="content">
                        <h4 author={value.author}>{value.author}</h4>
                        <p content={value.content}>{value.content}</p>
                    </div>

                    </div>)})
)
}

export default Quote;