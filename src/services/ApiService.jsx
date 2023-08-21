export async function getAllCharactersPage(page) {
    const results = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return await results.json()
}