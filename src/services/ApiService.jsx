export async function getAllCharactersPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return await results.json()
}

export async function getEpisodesPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    return await results.json()
}