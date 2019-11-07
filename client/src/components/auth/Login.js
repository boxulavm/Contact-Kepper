import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'



const Login = (props) => {

    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext

    const { login, error, clearErrors, isAuthenticated } = authContext

    useEffect(() => {

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error === 'Invalid Credentials'){
            setAlert(error, 'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        if(email === '' || password === ''){
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }

    }

    return (
        <div className='container my-5'>
            <div className="row">
            <div className="col-lg-6 mx-auto">
            <h3>Account <span className="text-primary">Login</span></h3>
            <form onSubmit={onSubmit} className="form-group  p-3 mb-4">

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required className="form-control mb-3"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required className="form-control mb-3"/>

                <input type="submit" value="Login" className="btn btn-primary  btn-block mt-5" />

            </form>
            </div>
            </div>
        </div>
    )
}

export default Login
