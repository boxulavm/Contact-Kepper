import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        console.log('REGISTER SUBTMI')
    }

    return (
        <div className='container my-5'>
            <div className="row">
            <div className="col-lg-6 mx-auto">
            <h3>Account <span className="text-primary">Register</span></h3>
            <form onSubmit={onSubmit} className="form-group  p-3 mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={onChange} className="form-control mb-3"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} className="form-control mb-3"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={onChange} className="form-control mb-3"/>

                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" value={password2} onChange={onChange} className="form-control mb-3"/>

                <input type="submit" value="Register" className="btn btn-primary  btn-block mt-5" />

            </form>
            </div>
            </div>
        </div>
    )
}

export default Register
