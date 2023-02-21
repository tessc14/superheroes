import React, {useState, useEffect} from 'react'

function HeroList(heroes) {

    const [hero, setHero] = useState('')

    useEffect(() => {
        async function getFact() {
            const response = await fetch('https://superheroapi.com/api/2075790332591226/search/superman')
            const data =  (await response.json())["data"][0]["attributes"]["body"]
            setHero(data)
        }
        getFact()
    }, [heroes])

    return (
        <div className="fact-box">
            <em>{hero}</em>
        </div>
        
    )
}

export default HeroList