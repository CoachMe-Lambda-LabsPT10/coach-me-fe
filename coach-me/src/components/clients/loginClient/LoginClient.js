import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { getClientInfoLogin } from '../../../actions/clientActions';
import { Link } from 'react-router-dom';

import './loginClient.scss';

const LoginClient = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ email: '', password: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getClientInfoLogin({ input, history: props.history }));
    };

    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'>
                    <Logo />
                </a>
                <p>Login</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                    />

                    <label>Password</label>
                    <input
                        type='text'
                        name='password'
                        value={input.password}
                        onChange={handleChange}
                    />
                    <div>
                        <a className="fb">Facebook</a>
                        <a className="tw">Twitter</a>
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <span>
                    <p>Don't have an account?
                    <Link to='/createAccount'>Signup</Link></p>
                    <p>Forgot Password<a href='/email-request'>Get new</a></p>
                </span>
            </div>
        </div>
    );
};

export default LoginClient;
