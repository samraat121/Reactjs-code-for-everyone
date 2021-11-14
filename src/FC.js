import React, {useState} from 'react'

function FC() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [bio, setBio] = useState('')

    const printValue = (event) => {
        event.preventDefault();
        var user =  {
            name: name,
            email: email,
            phone: phone,
            age: age,
            bio: bio,
        }
        console.log(user)
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4">
                    <form onSubmit={printValue}>
                        <div className="card">
                            <div className="card-header">
                                User Info
                            </div>
                            <div className="card-body">
                                
                                <div className="form-group">
                                  <label htmlFor="name">Name</label>
                                  <input type="text"
                                    className="form-control" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email">Email</label>
                                  <input type="email"
                                    className="form-control" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="phone">Phone</label>
                                  <input type="number"
                                    className="form-control" name="phone" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="age">Age</label>
                                  <input type="number"
                                    className="form-control" name="age" value={age} id="age" onChange={(e) => setAge(e.target.value)} placeholder="Enter Your age" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="bio">Bio</label>
                                  <textarea className="form-control" name="bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows="3" />
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                               <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    )
}

export default FC
