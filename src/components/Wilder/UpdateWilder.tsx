
import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import {update} from "../../functions/atoms.js"
import {updateWilder, fetchSingle} from "../../functions/request"
import {useRecoilState} from "recoil"


function UpdateWilder() {
    const [wilder, setWilder] = useState({});
    const [skills, setSkills] = useState([])

    const [modifyWilder, setModifyWilder] = useRecoilState(update)
    
    const navigate = useNavigate();
    const params = useParams()

    useEffect(() => {
        fetchSingle(params.id)
        .then((wilder) => {
            setWilder(wilder)
            setSkills(wilder[0].skills)
        })
    }, [])

    const updateOneWilder = async () => {
        const updated = await updateWilder(wilder[0].name, wilder[0].city, skills, params.id)
        if(updated.update === "success") {
            setModifyWilder(modifyWilder + 1)
            navigate("/wilders")
        }
    }

    const changeNameOrCity = (e, property) => {
        let copy = {...wilder}
        if(property === "name") copy[0].name = e.target.value
        if(property === "city") copy[0].city = e.target.value
        setWilder(copy);
    }

    const changeTitleOrNote = (ev, property:string, index:number):void => {
        let copy = [...skills]
        if(property==="title") copy[index].title = ev.target.value 
        if(property==="note") copy[index].votes = ev.target.value 
        setSkills(copy)
    }

    return(
    <div>
        <h1>Update du profil</h1>
        { Object.keys(wilder).length && 
            <div>
                {console.log(skills)}
                <form action="" className="center">
                    <div className="form">
                        <label htmlFor="name">Nom : </label>
                        <input type="text"  value={wilder[0].name } onChange={(e) => changeNameOrCity(e,"name")} /> 
                    </div>   
                    <div className="form">
                        <label htmlFor="name">Ville: </label>
                        <input type="text" value={wilder[0].city} onChange={(e) => changeNameOrCity(e,"city")}/>    
                    </div>    
                    {wilder[0].skills.map((skill, index) => (
                        <div key={skill._id}>
                            <div className="form">
                                <label htmlFor="name">Skills title : </label>
                                <input type="text" defaultValue={skill.title} onChange={(ev) => changeTitleOrNote(ev, "title", index)}/>    
                            </div>   

                            <div className="form">
                                <label htmlFor="name" >Skills note : </label>
                                <input type="text" defaultValue={skill.votes} onChange={(ev) => changeTitleOrNote(ev, "note", index)} />    
                            </div>
                    </div>
                    ))}
                    
                    <Button variant="contained" onClick={updateOneWilder} sx={{
                        backgroundColor: '#F06B6B',
                        marginTop:'20px'
                    }}>Valider</Button>
                
                </form>
            </div>
        }
    </div>
    
    )
}

export default UpdateWilder