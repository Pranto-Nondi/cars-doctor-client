
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('car-access-token')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navItems = <>
        <li className='pb-2 pl-2'><Link to='/'> Home</Link></li>
        <li className='pb-2 pl-2'><Link to='about' >About</Link></li>
        {user?.email ? <>
            <li><Link to='/bookings' >My Bookings</Link></li>
            <li onClick={handelLogOut} className='pb-2 pl-2'><Link>LogOut</Link></li>
        </> :
            <li className='pb-2 pl-2'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}
                        </ul>
                    </div>
                    <Link><img src={logo} alt="carsDoctorImg" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-outline">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;