import SingleWilder from './SingleWilder'
import React from 'react'
import { useRecoilValue } from 'recoil'
import {listOfWilders} from "../../functions/atoms.js"

function Wilder(){

    type Wilder = {
        _id: string,
        name: string,
        city: string,
        skills: [{
            title:string,
            votes: number
        }]
    }
    const listWilders =  useRecoilValue(listOfWilders)
    return(
        <div>
            <h1>Liste de tous les Wilders</h1>
            <div className="grid-wilder">
                {listWilders &&
                    listWilders.map((wilder:Wilder, index : number) => 
                    <SingleWilder key={index*Math.random()} id={wilder._id} name={wilder.name} city={wilder.city} skills={wilder.skills}/>)
                }
            </div>
        </div>
    )
}

export default Wilder