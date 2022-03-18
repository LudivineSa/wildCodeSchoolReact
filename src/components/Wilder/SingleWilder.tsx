import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {deleteWilder} from "../../functions/request.js"
import { useRecoilState } from 'recoil'
import {update} from "../../functions/atoms.js"
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import ModalDelete from "../../UI/modal/ModalDelete"
import {Wilder} from "../../functions/interface"

function SingleWilder(props:Wilder) {

    const {name, city, id, skills} = props

    const [showModalConfirmDelete, SetShowModalConfirmDelete] = useState(false)
    let navigate = useNavigate();

    const [showUpdate, setShowUpdate] = useRecoilState(update)

    const deleteOne = async () => {
        const deleteSomeone = await deleteWilder(id)
        if(deleteSomeone.delete === "success")  setShowUpdate(showUpdate+1)
    }
    
    const updateOne = () => {
        let path = "/updatewilder/" + id
        navigate(path)
    }


    return(
        <div className="wilder">
            {showModalConfirmDelete && <ModalDelete confirm={deleteOne} cancel={() => SetShowModalConfirmDelete(false)} /> }
            <p className="close" onClick={() => SetShowModalConfirmDelete(true)}><BsFillTrashFill/></p>
            <p className="update" onClick={updateOne}><BsFillPencilFill /></p>
            <h2>{name}</h2>
            <p>{city}</p>
            <h3>Wild Skills</h3>
            <div className="allNotes">
                {skills.map((skill, i) => (
                    <div className="notes" key={i}>
                        <p>{skill.title} - </p>
                        <p>{skill.votes}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default SingleWilder;