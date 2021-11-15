import React,{useState} from 'react'

function Todos() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const TaskValue = (event) => {
        event.preventDefault();
        setTasks([...tasks, task])
    }
    const deleteData = (index) => {
        var duplicatearray=[...tasks]
        duplicatearray.splice(index, 1)
        setTasks(duplicatearray)
    }
    
    const taskslist = tasks.map((object, index)=>{
        return (
            <div className='row'>
                <h5 className='col-md-6 text-right'>{index+1} {object}</h5>
                <button onClick={()=>{deleteData(index)}}>Delete</button>
            </div>
        )
    })
    return (
        <div>
            <form onSubmit={TaskValue}>
                <div className="row justify-content-center">
                    <input type="text" className="form-control col-md-6 mr-2" onChange={(e) => {setTask(e.target.value)}} value={task} placeholder="Enter Your Task" />
                    <button type="submit" className="btn btn-primary">Submit</button> <br />
                </div>
            </form>
            {taskslist}
        </div>
    )
}

export default Todos
