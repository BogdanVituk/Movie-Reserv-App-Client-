import { useForm, type SubmitHandler } from 'react-hook-form';
import type { LoginInputs } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router';

const Login = () => {

    const dispatch = useAppDispatch()
    const { isAuth, error, loading } = useAppSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors, isValid }, reset, setError} = useForm<LoginInputs>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<LoginInputs> = (values) => {
       try {
         dispatch(fetchAuth(values))
         reset()
       } catch (error: any) {
         console.log(error)
        setError('email',error.responce.data.message)
       }

    }

    console.log(error)

    if(isAuth) {
        return <Navigate to='/' />
    }


    return (
        <div className='flex flex-col justify-center items-center '>
         <h2 className='mb-4 text-2xl'>Login</h2>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input className='p-3 mb-2 focus:none bg-[rgb(15,15,53)]' type="email" {...register('email', {required: 'Впишіть емейл'})} placeholder='email' />   
            {errors.email && <span className='p-2'>{errors.email.message}</span>}
            <input className='p-3 bg-[rgb(15,15,53)]' type="password" {...register('password', {required: 'Впишіть пасспорт'})} placeholder='password' />   
            {errors.password && <span className='p-2'>{errors.password.message}</span>}
            <button  className='bg-amber-400 cursor-pointer hover:bg-amber-600 p-4' type='submit'> {loading ? "loading..." : "Вхід"}</button>
         </form>
        </div>
    );
};

export default Login;