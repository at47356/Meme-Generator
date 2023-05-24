
import {useState} from 'react'
import React from 'react'

export default function Input() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        })
    
    const [allMemeImages, setAllMemeImages] = useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    },[])

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState =>({
            ...prevState,
            randomImage: `${memesArray[randomNumber].url}`}))   
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }
     

    return (
        <main>
            <div className="interactive-area">
                <input 
                className="input-box"
                type="text" 
                placeholder="Top Line" 
                name="topText" 
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                className="input-box"
                type="text" 
                placeholder="Bottom Line"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button className="generation-button" onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}