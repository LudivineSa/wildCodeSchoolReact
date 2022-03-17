import "../Styles/UI/button.css"

function Button({onClick, name}) {
    
    const classname = ():string => {
        if(name === "Annuler") {
            return "buttonCancel"
        } else {
            return "buttonValidate"
        }
    }
    return(
        <button onClick={onClick} className={classname()}>{name}</button>
    )   
}

export default Button