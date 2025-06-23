import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../redux/slices/auth';

const Header = () => {

    const { isAuth } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    return (
        <header className=''>
            <div className='__container flex justify-between p-4'>
                <Link to='/'><div className="text-xl font-bold text-red-600 ">MovieReserv</div></Link>
                <Link to='/schedule'><div className="text-xl font-bold hover:font-normal transtation">Schedule</div></Link>
                <Link to='/my-bookings'><div className="text-xl font-bold ">My bookings</div></Link>
                <div>
                    {isAuth ? <span onClick={() => dispatch(logout())} className='text-red-500 text-xl font-medium cursor-pointer'>Logout</span> : <Link className='text-xl font-medium mr-3' to='/login'>Login</Link>}
                    <Link className='text-xl font-medium' to='/register'>Register</Link>
                </div>
            </div>  
        </header>
    );
};

export default Header;