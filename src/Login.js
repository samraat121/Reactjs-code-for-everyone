import React, {useState} from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validate = (event) => {
        event.preventDefault();
        
        if (email == 'admin@mail.com' && password == 'password') {
            alert('Authentication is Successfull')
        } else {
            console.log("SORRY YOUR ARE NOT AUTHENTICATED PERSON IN THIS APP")
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <form onSubmit={validate}>
                        <div className="card">
                            <div className="card-header">
                                User Login Form
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                <label htmlFor="email">Username</label>
                                <input type="email"
                                    className="form-control" vlaue={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="Enter Username" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control" vlaue={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder="*****" />
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
