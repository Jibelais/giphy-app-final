import { useState} from "react";

const SearchForm = (props) => {

    const [searchInput, setSearchInput] = useState('')

    // event gets passed by default (by browswer) whenever there is event handler function like onclick, onchange, onsubmit, etc 
    const handleChange = (event) => {
        setSearchInput(event.target.value)

    }

    const handleSubmit = (event => {
        event.preventDefault()
        props.search(searchInput)
        setSearchInput('')
       
    })

    
    return(
        <div>
            <h3>Search Giphy</h3>
            <form onSubmit = {handleSubmit}>
                <input id = "input" type = "text" onChange = {handleChange} placeholder = "Type anything here" value = {searchInput}></input>
                <input type = "submit" value = "Submit"></input>
            </form>
        </div>
        
    )
    
}

export default SearchForm