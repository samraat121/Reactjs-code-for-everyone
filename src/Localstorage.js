import React,{useState} from 'react'

function Localstorage() {
    const [language, setLanguage] = useState('')
    const [framework, setFramework] = useState('')

    const saveLanguage = () => {
        var courses = JSON.parse(localStorage.getItem('courses', ) || '[]')
        var course = {
            language: language,
            framework: framework,
        }
        courses.push(course)
        localStorage.setItem('courses', JSON.stringify(courses));
        
    }

    return (
        <div className="container">
            <h1 className="text-center">React js Local Storage</h1>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input type="text"
                className="form-control" name="language" value={language} onChange={(e)=>{setLanguage(e.target.value)}} id="language" placeholder="language" />
            </div>
            <div className="form-group">
              <label htmlFor="framework">framework</label>
              <input type="text"
                className="form-control" name="framework" value={framework} onChange={(e)=>{setFramework(e.target.value)}} id="framework" placeholder="framework" />
            </div>
            <button type="submit" onClick={saveLanguage} className="btn btn-primary">Submit</button>
            <h4>Our Local Storage Value {localStorage.getItem('name')}</h4>
        </div>
    )
}

export default Localstorage
