import logo from './logo.svg';
import './App.css';
import Quote from './Quote.jsx';
import BookList from './BookList.jsx'
import {Routes,Route,Link} from "react-router-dom"
import NavBar from "./navbar.js"
import Error from "./error.js"
import OneQuote from './one';
import News from './news.jsx'
import Home from './home.js'
import SearchNews from './searchNews';



function App() {
  return <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="multiple" element={<Quote/>}/>
      <Route path="/topheadlines" element={<News/>}/>
      <Route path="search" element={<SearchNews/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  

  </>
}


export default App;
