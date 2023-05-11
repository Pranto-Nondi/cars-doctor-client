
import { Link } from 'react-router-dom';
import signUp from '../../assets/images/login/login.svg'
const SignUp = () => {
    return (
        <div className='container mb-5 mt-5 mx-auto'>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" pr-10 w-1/2 mx-auto ">

                        <img className='w-full' src={signUp} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ConfirmPassword</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-center'>
                                <p>Already have an account?<Link className='text-red-500' to='/login' >Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;