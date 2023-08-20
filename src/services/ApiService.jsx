export async function getAllCharacters() {
    const results = await fetch("https://rickandmortyapi.com/api/character")
    return await results.json()
}