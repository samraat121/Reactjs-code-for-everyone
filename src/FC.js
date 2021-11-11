import React, {useState} from 'react'

function FC() {
    const [player, setPlayer] = useState('Tamim Iqbal')
    const [run, setRun] = useState('56')
    function changePlayer() {
        setPlayer('Shakib al Hasan')
        setRun('80')
    }
    return(
        <div>
            <h1>Bangladesh best cricket player is {player}</h1>
            <h2>Bangladesh avarage run rate is 56 but he won by {run}</h2>
            <button onClick={changePlayer}>Click to change cricket player</button>
        </div>
    )
}
export default FC;