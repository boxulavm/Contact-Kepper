import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        console.log('login SUBTMI')
    }

    return (
        <div className='container my-5'>
            <div className="row">
            <div className="col-lg-6 mx-auto">
            <h3>Account <span className="text-primary">Login</span></h3>
            <form onSubmit={onSubmit} className="form-group  p-3 mb-4">

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} className="form-control mb-3"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={onChange} className="form-control mb-3"/>

                <input type="submit" value="Login" className="btn btn-primary  btn-block mt-5" />

            </form>
            </div>
            </div>
        </div>
    )
}

export default Login
