import {useEffect, useState} from "react"
import {API} from "./api/index"
import './news.css'

function News(props){
    const [news,setNews] = useState([])
    useEffect(()=>{
        API.get('').then((rezultat)=>{
            setNews(rezultat.data.articles)
            console.log(news)
        })
    },[])
    return (
            news.map((value) =>  {
                return (<div class="card">
                    <a href={value.url} target="_blank" >
                        <div clas="content">
                            <h4 author={value.author}>{value.author}</h4>
                            <p content={value.content}>{value.content}</p>
                        </div>
                    </a>

                    </div>)})
)
}

export default News;