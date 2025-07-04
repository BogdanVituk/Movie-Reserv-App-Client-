import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../redux/slices/auth';

const Header = () => {

    const { isAuth } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    return (
        <header className=''>
            <div className='__container flex justify-between p-6'>
                <Link to='/'><div className="text-xl font-bold">MovieReserv</div></Link>
                <Link to='/schedule'><div className="text-[17px] font-bold hover:font-normal transtation">Schedule</div></Link>
                <Link to='/my-bookings'><div className="text-[17px] font-bold ">My bookings</div></Link>
                <div>
                    {isAuth ? <span onClick={() => dispatch(logout())} className='bg-amber-500 p-4 text-[17px] font-medium cursor-pointer'>Logout</span> : <Link className='bg-amber-500 p-4 rounded-2xl hover:bg-amber-600 transition-all text-[17px] font-medium mr-3' to='/login'>Login</Link>}
                    <Link className='bg-amber-500 p-4 hover:bg-amber-600 transition-all rounded-2xl text-[17px] font-medium' to='/register'>Register</Link>
                </div>
            </div>  
        </header>
    );
};

export default Header;