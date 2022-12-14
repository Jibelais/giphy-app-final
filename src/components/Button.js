
const Button = ({getGiphy}) => {
    
    const handleClick = () => {
        getGiphy()
       
    }

    return (
        <>
        <h3>Randome Giphy</h3>
        <input type = "submit" value = "SHOW ME ANY GIPHY!" onClick = {handleClick}/>
        </>
    )
}


export default Button