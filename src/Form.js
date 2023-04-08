import React from "react";

export default function Form(props){
    const[curimg,nextimg]=React.useState({
        topText:'',
        bottomText:'',
        image:require('./imgs/patrick.png')})
        const[curdata,updata]=React.useState([])
    function mapp(){
        const randomnum=Math.floor(Math.random()*curdata.data.memes.length)
        const url=curdata.data.memes[randomnum].url
        nextimg( (prev)=>({
            ...prev,
            image:url
        }))
    }
        function handleChange(event){
            const {name,value}=event.target
            nextimg((prev)=>({
                ...prev,
                [name]:value
            }))

        }
        React.useEffect(()=>{
            fetch('https://api.imgflip.com/get_memes')
            .then(res=>res.json())
            .then(dat=>{updata(dat)})
            
        },[])

        
    
    
    return(
  <main>
            <div className="frm">
            <input 
            className="inp"
            type="text" placeholder="Top Text"
            name="topText"
            value={curimg.topText}
            onChange={handleChange}/>
            <input 
            className="inp"
            type="text" placeholder="Bottom Text"
            name="bottomText"
            value={curimg.bottomText}
            onChange={handleChange}/>
            <button 
            onClick={mapp}
            className="btn">Generate New Meme</button>
            </div>
            <div className="imgm">
            <img className="imgme" src={curimg.image}/>
            <h2 className="meme top" >{curimg.topText}</h2>
            <h2 className="meme bot">{curimg.bottomText}</h2>
           
            </div>

        </main>

      
            
    )
}