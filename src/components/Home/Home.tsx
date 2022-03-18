import react, {useState, useContext} from "react";
import Button from "../../UI/Button"
import Input from "../../UI/form/Input"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeContext} from '../../functions/context'

function Home() {
    const {theme, toggleTheme} = useContext(ThemeContext)

   const onChange = (e) => {
        console.log(e.target.value)
   }


return(
    <div className="pt-10">
            <h1 className="text-xl">Ceci est la home page</h1>
            <Input onChange={onChange} placeholder="Nom" />
            <Button onClick={toggleTheme} name="toggleDarkTheme"/>
            {theme && <p>Le thème est vrai!</p>}
    </div>
)

}

export default Home