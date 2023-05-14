import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { RotatingLines } from 'react-loader-spinner'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Main = () => {
    const { user } = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }

    }, [user]);

    return (
        <div>
            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            ) : (
                <>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            )}
        </div>
    );

};

export default Main;
