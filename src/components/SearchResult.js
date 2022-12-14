
const SearchResult = ({giphyRes}) => {

    const randomIndex = Math.floor(Math.random() * 24);

    console.log(randomIndex)
    return giphyRes.data ? (
        <img src = {giphyRes.data[randomIndex].images.downsized.url} alt = "giphy" />
     
    ):
    (<div></div>)
}

export default SearchResult