export async function getAllCharactersPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return await results.json()
}

export async function getCharacterById(id){
    const results = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await results.json()
}

export async function getCharactersByUrl(url){
    const results = await fetch(`${url}`)
    return await results.json()
}

export async function getEpisodesPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    return await results.json()
}

export async function getEpisodeByUrl(url){
    const results = await fetch(`${url}`)
    return await results.json()
}

export async function getLocationsPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
    return await results.json()
}

export async function getLocationById(id) {
    const results = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
    return await results.json()
}
