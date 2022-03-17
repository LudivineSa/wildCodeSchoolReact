const deleteWilder = async (id) => {
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           id: id
        }),
    };

    const fetched = await fetch("http://localhost:3000/api/wilder/delete", requestOptions)
    const result = fetched.json();
    return result
}

const addWilder = async (name, city, skills) => {
    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        city: city,
        skills : skills
    }),
    };

    const fetched = await fetch("http://localhost:3000/api/wilder/post", requestOptions)
    const result = fetched.json()
    return result
}

const fetchWilders = async () => {
    let wilders = await fetch("http://localhost:3000/api/wilderr/all")
    let json = await wilders.json();
    return json
}   


const updateWilder = async (name, city, skills, id) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            city: city,
            skills: skills,
            id: id
        }),
    };

    const update = await fetch("http://localhost:3000/api/wilder/update", requestOptions)
    const updateJson = await update.json()
    return updateJson
}

const fetchSingle = async (id) => {
    const fetchOne = await fetch("http://localhost:3000/api/wilder/getOne/?_id=" + id)
    const fetchOneJSON = await fetchOne.json()
    return fetchOneJSON
  
}


export {deleteWilder, addWilder, fetchWilders, updateWilder,  fetchSingle}