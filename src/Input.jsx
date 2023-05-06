import memesData from "./memesData"
import {useState} from 'react'

export default function Input() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        })
    
    const [allMemeImages] = useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState =>({
            ...prevState,
            randomImage: `${memesArray[randomNumber].url}`}))   
    }
     

    return (
        <main>
            <div className="interactive-area">
                <input className="input-box"type="text" placeholder="Top Line"/>
                <input className="input-box"type="text" placeholder="Bottom Line"/>
                <button className="generation-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>

            <img src={meme.randomImage} className="memeImage"/>
        </main>
    )
}