import { useForm, type SubmitHandler } from "react-hook-form";
import type { SheduleInputs } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchSessionbyDateorFilmName } from "../../redux/slices/sesssion";
import SessionsList from "../../components/SessionsList";


const Schedule = () => {

      const dispatch = useAppDispatch();

      const { sessions, loading, error } = useAppSelector(state => state.session)

      const { register, handleSubmit, formState: { errors, isValid }, reset, setError, watch} = useForm<SheduleInputs>({
            defaultValues: {
                filmName: '',
                date: '',
            },
            mode: 'onChange'
        })


    const onSubmit: SubmitHandler<SheduleInputs> = (values) => {
        try {
            dispatch(fetchSessionbyDateorFilmName(values))
        } catch (error) {
            
        }
    }

     const filmName = watch('filmName');
     const date = watch('date');

    return (
        <div className="__container p-6">
            <h1 className="text-2xl font-normal">Розклад сесій</h1>
            <div>Заповніть поля щоб переглянути фільми на певну дату</div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mb-4">
                <div className="flex">

                    <div className="flex flex-col">
                        <input className="mr-4 p-2 bg-white text-black rounded-[5px]" type="text" placeholder="Назва фільму" {...register('filmName', { validate: () => {
                        return filmName || date ? true : 'Вкажіть хоча б назву фільму або дату'
                        }})} />

                        {errors.date && <span className='p-2 text-red-500'>{errors.date.message}</span>}
                    </div>

                    <div className="flex flex-col">
                         <input className="mr-4 p-2 bg-white text-black rounded-[5px]" type="date" placeholder="Дата початку по типу" {...register('date', { validate: () => {
                        return  filmName || date ? true : 'Вкажіть хоча б назву фільму або дату'
                        }})} />
                        {errors.date && <span className='p-2 text-red-500'>{errors.date.message}</span>}
                    </div>
                
                </div>
                <button className="cursor-pointer bg-amber-500 p-3 text-white rounded-2xl hover:bg-amber-600 transition mt-2 " type='submit'>Пошук</button>
            </form>
            
            <div>
            {
                loading 
                ? <div>Loading...</div>
                : <SessionsList sessions={sessions} /> 
                
            }
            </div>

        </div>
    );
};

export default Schedule;