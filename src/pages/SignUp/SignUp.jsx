
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUp from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const SignUp = () => {
    const { createUser, googleSignIn, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                logOut()
                    .then(result => {
                       
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
                navigate('/login')
            })
            .catch(error => console.log(error))

    }
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
            })
    }

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
                            <form onSubmit={handleSignUp} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ConfirmPassword</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className='text-center'>
                                <p>Already have an account?<Link className='text-red-500' to='/login' >Login</Link></p>
                            </div>

                            <div className="divider">OR</div>
                            <div className='text-center'>
                                <button onClick={handelGoogleSignIn} className="btn btn-circle  ">
                                    <p> G</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;