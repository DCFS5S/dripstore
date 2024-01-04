import { useEffect, useState } from 'react'

export const useCharacter = () => {
    const [character, setCharacter] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
          setCharacter(data.results[10])
          setLoading(false)
        })
    }, [])

    return {
        loading,
        character,
    }
}
