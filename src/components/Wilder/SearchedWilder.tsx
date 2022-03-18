import {useParams} from "react-router-dom"

import { useRecoilValue } from 'recoil'
import {listOfWilders} from "../../functions/atoms.js"
import {useEffect, useState} from "react"
import SingleWilder from './SingleWilder'



function SearchedWilder() {

    const list = useRecoilValue(listOfWilders)
    const [results, setResults] = useState([])

    const params = useParams();

    useEffect(() => {
        if(params.type === "city") {
            let result = list.filter((wilder) => wilder.city.includes(params.field))
            setResults(result)
        } else if (params.type === "name") {
            let result = list.filter((wilder) => wilder.name.includes(params.field))
            setResults(result)
        }
    }, [params])


    return(
        <div> 
            <h2>Résultats pour {params.field} : </h2>
            {results && 
                    results.map((wilder, index) => 
                    <SingleWilder key={index*Math.random()} id={wilder._id} name={wilder.name} city={wilder.city} skills={wilder.skills}/>
                )}
        </div>
    )
}

export default SearchedWilder;