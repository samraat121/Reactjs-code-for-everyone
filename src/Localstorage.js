import React,{useState} from 'react'

function Localstorage() {
    const [name, setName] = useState('')
    const submitForm = () => {
    
       localStorage.setItem('name', name)
    }
    return (
        <div className="container">
            <h1 className="text-center">React js Local Storage</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                className="form-control" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} value={name} aria-describedby="" placeholder="name" /> 
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">Storage</button><hr />
            <h4>Our Local Storage Value {localStorage.getItem('name')}</h4>
        </div>
    )
}

export default Localstorage
