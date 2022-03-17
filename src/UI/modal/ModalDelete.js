import Button from "../Button"
import "../../Styles/UI/modal.css";

function ModalDelete({confirm, cancel}) {
    return(
        <div className="modal">
            <div className="modalElements">
                <h2>Supprimez l'utilisateur ?</h2>
                <div className="confirmModal">
                    <Button name="Confirmer" onClick={confirm}/>
                    <Button name="Annuler" onClick={cancel} />
                </div>
            </div>
        </div>
    )
}

export default ModalDelete