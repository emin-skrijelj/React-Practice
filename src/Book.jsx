import './Book.css'


const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._AC_SX184_.jpg" alt=""></img>
const Title = () => <h1>Big Shot Diary of a Wimpy Kid Book 16</h1>
const Author = () => <h4>Jeff Kinney</h4>


function Book() {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
        </article>
}

export default Book