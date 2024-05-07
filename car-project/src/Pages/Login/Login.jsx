import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const Login = () => {
    const { singIN } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)
    const handleform = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value
        const password = from.password.value
        const data = { email, password }
        // console.log(data)

        singIN(email, password)
            .then(result => {
                const logedInUser = result.user;
                console.log(logedInUser)
                const user = { email }
         
                //get access token
                axios.post('http://localhost:5000/jwt', user,{withCredentials:true})  //set in brawser cookie withCredentials:true
                .then(res =>{
                    console.log(res.data)
                    navigate(location?.state ? location?.state : '/');
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-info-100">
                    <form className="card-body" onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                    </form>
                    <p className='text-center my-5'>New to Car Doctors ?<Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;