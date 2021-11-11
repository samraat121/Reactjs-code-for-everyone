import React, {useEffect, useState} from 'react'


function Home() {
    const [color, setColor] = useState('red')
    const [bgcolor, setBgcolor] = useState('yellow')

    function changeStyling() {
        setColor('green')
        setBgcolor('red')
    }
    return(
        <div>
            <h1 style={{color: color}}>Manupulation CSS Using Hooks</h1>
            <h1 style={{backgroundColor: bgcolor}}>Manupulation CSS Using Hooks</h1>
            <button onClick={changeStyling}>Change Styling Color</button>
        </div>
    )
}
export default Home;