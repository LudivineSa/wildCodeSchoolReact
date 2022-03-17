import react, {useState} from "react";
import Button from "../../UI/Button"
import Input from "../../UI/form/Input"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

   const [data, setData] = useState("")
   
   const onClick = () => {
    toast.error("Erreur de chargement : merci de recommencer.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
   }
   const onChange = (e) => {
        setData(e.target.value)
   }
return(
    <div className="pt-10">
        <h1 className="text-xl">Ceci est la home page</h1>
        <Input onChange={onChange} placeholder="Nom" />
        <Button onClick={onClick} name="valider"/>
    </div>
)

}

export default Home