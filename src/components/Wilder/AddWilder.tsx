import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { addWilder } from "../../functions/request.js";
import { update } from "../../functions/atoms";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddWilder() {
  let inputName = useRef<HTMLInputElement>();
  let inputCity = useRef<HTMLInputElement>();
  let inputSkillTitle = useRef<HTMLInputElement>();
  let inputSkillVote = useRef<HTMLInputElement>();

  const [skills, setSkills] = useState([]);
  let navigate = useNavigate();

  const [updateWilder, setUpdateWilder] = useRecoilState(update);

  const deleteSkill = (i: number) => {
    const skillsDuplicata = [...skills];
    skillsDuplicata.splice(i, 1);
    setSkills(skillsDuplicata);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const result = await addWilder(
      inputName.current.value,
      inputCity.current.value,
      skills,
    );
    if (result.success === true) {
      toast.success("Utilisateur créé avec succès !");
      setUpdateWilder(updateWilder + 1);
      navigate("/wilders");
    } else if (result.success === false) {
      toast.error(result.result.name);
    } else if (result.errors[0].param === "name") {
      toast.error("Nom trop court ! Merci de recommencer.");
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (inputSkillTitle.current.value && inputSkillVote.current.value) {
      const pushNewSkills = [
        ...skills,
        {
          title: inputSkillTitle.current.value,
          votes: inputSkillVote.current.value,
        },
      ];

      setSkills(pushNewSkills);
    } else {
      toast.error("Merci de remplir tous les champs");
    }
  };

  return (
    <div>
      <form action="" className="center white">
        <h1>Ajouter un wilder</h1>
        <div className="form">
          <label htmlFor="name">Nom : </label>
          <input type="name" ref={inputName} />
        </div>
        <div className="form">
          <label htmlFor="name">Ville: </label>
          <input type="name" ref={inputCity} />
        </div>

        <h3>Skills : </h3>
        <div className="form">
          <label htmlFor="name">Nom : </label>
          <input type="name" ref={inputSkillTitle} />
        </div>

        <div className="form">
          <label htmlFor="name">Note : </label>
          <input
            type="number"
            defaultValue="0"
            min="0"
            max="10"
            ref={inputSkillVote}
          />
        </div>

        <Button
          variant="contained"
          onClick={addSkill}
          sx={{
            backgroundColor: "#F06B6B",
            marginTop: "20px",
          }}
        >
          Ajouter un skill
        </Button>
        <div className="flex">
          {skills &&
            skills.map((skills, i) => (
              <div className="skills" key={i * (Math.random() * 100)}>
                <p className="closeSkill" onClick={() => deleteSkill(i)}>
                  X
                </p>
                <p className="vote">{skills.votes}</p>
                <p className="title">{skills.title}</p>
              </div>
            ))}
        </div>
        <Button
          variant="contained"
          onClick={sendData}
          sx={{
            backgroundColor: "green",
            marginTop: "20px",
            width: "350px",
          }}
        >
          Valider
        </Button>
      </form>
    </div>
  );
}

export default AddWilder;
