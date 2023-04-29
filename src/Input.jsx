import memesData from "./memesData"
import {useState} from 'react'

export default function Input() {
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
     

    return (
        <main>
            <div className="interactive-area">
                <input className="input-box"type="text" placeholder="Top Line"/>
                <input className="input-box"type="text" placeholder="Bottom Line"/>
                <button className="generation-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>

            <img src={memeImage} className="memeImage"/>
        </main>
    )
}