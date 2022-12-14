import { useState, useEffect } from 'react'
import Button from './components/Button';
import RandomGiphy from './components/RandomGiphy';
import SearchResult from './components/SearchResult';
import SearchForm from './components/SearchForm';
import './App.css';



function App() {

// Random giphy state
  const [giphyData, setGiphyData] = useState({})

// Search state
  const [searchData, setSearchData] = useState({})
  

// API call for random giphy
  const randomApiCall = async() => {
    const giphyURL = 'https://api.giphy.com/v1/gifs/random?api_key=soEVCG5LF83syPnlst6sDcLyxU6VdZo5&tag=&rating=g'
    const res = await fetch(giphyURL)
    const json = await res.json()
    setGiphyData(json)
  }

// API call to search giphy
  const searchApiCall = async(input) => {
    const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=soEVCG5LF83syPnlst6sDcLyxU6VdZo5&q=${input}&limit=25&offset=0&rating=g&lang=en`
    const res = await fetch (giphyURL)
    const json = await res.json()
    setSearchData(json)
  }


  return (
    <div className = "flex-container">
      <div className = "giphy-container">
        <Button getGiphy = {randomApiCall}/>
        <RandomGiphy giphy = {giphyData} />
      </div>
      <div className = "giphy-container">
        <SearchForm search = {searchApiCall}/>
        <SearchResult giphyRes = {searchData} />
      </div>
      
    
    </div>
    
  );
}

export default App;
