function Input({onChange, placeholder}) {
    return(
        <div className="center">
            <label htmlFor={placeholder}>{placeholder}</label>
            <input onChange={onChange} name={placeholder} type="text" className="input" placeholder={placeholder}/>
        </div>
    )
}

export default Input