import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Signup = () => {
    const {createUser,logOut} = useContext(AuthContext)
  
    const handleform = e =>{
        e.preventDefault();
        const from = e.target;
        const Email = from.Email.value
        const password = from.password.value
        const Repassword = from.Repassword.value
        const data ={Email,password,Repassword}
        console.log(data)

        createUser(Email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            // logOut()
        })
        .catch(err=>{
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
                        <input name='Email' type="email" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  name='password' type="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  name='Repassword' type="password" placeholder="Repassword" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Login</button>
                    </div>
                </form>
                <p  className='text-center my-5'>Already have an account ?<Link className='text-orange-600 font-bold'to='/signup'>Sign up</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Signup;