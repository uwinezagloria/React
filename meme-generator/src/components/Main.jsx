import { useState ,useEffect} from "react"

export default function Main() {
    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */
    const [meme,setMeme]=useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })
     /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
        /**
     * Challenge:
     * Get an array of memes from the imgflip API as soon as
     * this component renders for the first time.
     * Check the imgflip documentation for the correct URL.
     * Save the array of memes (not the whole response
     * data) to state. (For this app, we'll randomly choose
     * one of the memes from this array when the user clicks
     * the "Get a new meme image" button, but we'll do that in
     * a separate challenge.)
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    
    const [allMemes,setAllMemes]=useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
    },[])
    
        const handleChange=(event)=>{
            console.log(event)
            const {value,name}=event.currentTarget
            setMeme((prev)=>({
                ...prev,
                [name]:value
            }))
        }
    //function to change the meme
    const changeMemeImage=()=>{
    const randomNumber=Math.floor(Math.random()*allMemes.length)
    const newImageUrl=allMemes[randomNumber].url
    setMeme((prevMeme=>({
        ...prevMeme,
        imageUrl:newImageUrl
    })))

    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={changeMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}