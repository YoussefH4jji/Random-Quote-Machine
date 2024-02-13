import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [quoteData,setQuoteData] = useState({})
  const [quote,setQuote]= useState("")
  const [author,setAuthor] = useState("")

  useEffect(()=>{
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
      setQuoteData(data)
      setQuote(quoteData.content)
      setAuthor(quoteData.author)})
      // .then(data => setAuthor(data.author))

    }, []);

  function handleChange(){
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuoteData(data))
      setQuote(quoteData.content)
      setAuthor(quoteData.author)
  }
  
  return (
    <>
      <div id ="quote-box">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        {/* <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a> */}
        <button id= "new-quote" onClick={handleChange}>Next Quote</button>
        
      </div>
      
    </>
  )
}

export default App
