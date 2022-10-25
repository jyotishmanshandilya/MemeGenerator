import MemeData from "./MemeData"
import React from "react";
export default function Meme(){
    const [memeImage, randomUrl] = React.useState("https://i.imgflip.com/3i7p.jpg");

    const [meme, setMeme] = React.useState({
        topText: " ",
        bottomText: " ",
        randomImage: "https://i.imgflip.com/3i7p.jpg",
    })

    const [allMeme, setAllMeme] = React.useState([]);

    function getMemeImage(){
        const random = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[random].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({ 
                ...prevMeme,
                [name] : value
            
        }))
    }

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
        
    }, [])

    console.log(allMeme);

    return(
        <div>
            <div className="form">
                <input className="form--input" onChange={handleChange} type="text" placeholder='Top part' name="topText" value={meme.topText}></input>
                <input className="form--input" onChange={handleChange}  type="text" placeholder='Bottom part' name="bottomText" value={meme.bottomText}></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>

            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </div>
    )
} 