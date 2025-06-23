import { useForm, type SubmitHandler } from 'react-hook-form';
import type {  RegisterInputs } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchRegister } from '../../redux/slices/auth';
import { Navigate } from 'react-router';

const Register = () => {

    const dispatch = useAppDispatch()
    const { isAuth } = useAppSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors, isValid }, reset, setError} = useForm<RegisterInputs>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<RegisterInputs> = (values) => {
        try {
            dispatch(fetchRegister(values))
            reset()
        } catch (error: any) {
            if(error.responce.data.message) {
                
            }
        }
    }

    if(isAuth) {
        return <Navigate to='/'/>            
    }

    return (
        <div className='flex flex-col justify-center items-center'>
         <h2 className='mb-4'>Register </h2>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input className='p-3 mb-2 focus:none' type="name" {...register('name', {required: "Впишіть ім'я"})} placeholder='name' />   
            {errors.name && <span className='p-2'>{errors.name.message}</span>}
            <input className='p-3 mb-2 focus:none' type="email" {...register('email', {required: 'Впишіть емейл'})} placeholder='email' />   
            {errors.email && <span className='p-2'>{errors.email.message}</span>}
            <input className='p-3' type="password" {...register('password', {required: 'Впишіть пасспорт'})} placeholder='password' />   
            {errors.password && <span className='p-2'>{errors.password.message}</span>}
            <button  type='submit'>Вхід</button>
         </form>
        </div>
    );
};

export default Register;