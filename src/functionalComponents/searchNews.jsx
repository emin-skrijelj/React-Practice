import {useState} from "react"
import {API} from './api/index'

function SearchNews(props){
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const [lang, setLang] = useState('en')
    function onSearchChange(e){
        setSearch(e.target.value)
    }

    function onFinish(e){
        if(e.key === 'Enter'){
            //fetch data
            API.get(`everything?q=${search}&language=${lang}&apiKey=9cb55ace2f7a405397b7737765514ef4`) 
            .then((result)=>{
                setSearchData(result.data.articles)
                console.log(result.data.articles)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }

    function onSelectChange(e){
        setLang(e.target.value)

}


    return <div>
        <select valueo={lang} onChange={onSelectChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">France</option>
        </select>
        <br/>
        <input value={search} onChange={onSearchChange} onKeyPress={onFinish}/>
        <div>
            {searchData.map((article)=>{
                return <div>
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <br/>
                </div>
                
                })}
        </div>     
    </div>
}

export default SearchNews