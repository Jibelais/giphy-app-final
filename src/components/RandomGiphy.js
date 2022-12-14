const RandomGiphy = ({giphy}) => {

    return giphy.data ?(
        <>
        <img src = {giphy.data.images.downsized.url} alt = "giphy" />
        <p>{giphy.data.title}</p>
        </>
    ): 
    ( <div></div>)
}


export default RandomGiphy