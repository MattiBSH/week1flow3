import React, { useEffect, useState } from 'react';

const JokeTimer = () => {
    const url = "https://icanhazdadjoke.com/";
    const [joke, setJoke] = useState("");
    const [joke2, setJoke2] = useState("");
    const fetchCode = () => { fetch(url,{headers: {'Accept': 'application/json'}}).then(res => res.json()).then(data => {
        setJoke2(data.joke);
    })
}

    useEffect(() => {
        fetchCode();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCode();
        }, 10000)
        return () => {
            clearInterval(interval)
            alert('Hov, du er på  vej væk')
        }
    }, []);

    return (
        <div align="center">
            <h2>Opgave 2</h2>
             <button onClick={()=>fetch("https://api.chucknorris.io/jokes/random").then(res=>res.json()).then(data=>{
           setJoke(data.value);
       })}>First Joke</button>
       <p>{joke}</p>
       <p>Second joke</p>
            <h3>Joke hvert 10. sekund</h3>
            <p>{joke2}</p>
        </div>
    )
}
export default JokeTimer;