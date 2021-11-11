import React, {useState, useEffect} from 'react'

function FC() {
    const [player, setPlayer] = useState('Tamim Iqbal')
    const [run, setRun] = useState('56')
    const [language, setLanguage] = useState('JavaScript')
    const [count, setCount] = useState(0)

    function changePlayer() {
        setPlayer('Shakib al Hasan')
        setRun('80')
    }
    useEffect(() => {
        setLanguage('Python')
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1);
        }, 1000);
    })

    
    return(
        <div>
            <h1>Bangladesh best cricket player is {player}</h1>
            <h2>Bangladesh avarage run rate is 56 but he won by {run}</h2>
            <h2>The Declare Language is  {language}</h2>
            <h1>Your Time Start Now, Now you count your time {count}</h1>
            <button onClick={changePlayer}>Click to change cricket player</button>
        </div>
    )
}
export default FC;