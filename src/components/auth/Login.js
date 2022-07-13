import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
    email: yup.string().email().required("A valid Email is required."),
    password: yup.string().min(5, "Password must be 5+ characters.").required("A password is required.")
})

function Login() {
   
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const inputFields = [
        {
            label: "Email",
            name: "email",
            inputType: "email",
            placeholder: "E.g. johndoe@email.com",
           
        },
        {
            label: "Password",
            name: "password",
            inputType: "password",
            placeholder: "Enter your password",
            
        },
    ]


    const onSubmit = (data) => {
        console.log('data', data)
    }

    return (
        <form className="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-4 mt-6 border rounded-md p-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl"><strong>Log In</strong></h1>
            <div className="space-y-2">
                {inputFields.map(field => {
                    return (
                        <div className="flex flex-col" key={field.label}>
                            <label htmlFor={field.name} className="mr-auto font-semibold">
                                {field.label}
                            </label>
                            <input id={field.name} type={field.inputType} className="border rounded-md p-2" placeholder={field.placeholder} {...register(field.name)} />
                            {errors[field.name]?.message && <p className='text-red-500 text-start'>{errors[field.name].message}</p>}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row justify-between px-4">
                <div className="font-semibold">Remember Me</div>
                <a href="#" className="text-indigo-500 font-semibold">Forgot Password</a>
            </div>
            <div>
                <button className="bg-indigo-500 text-white w-full py-3 rounded-md" type="submit">
                    Log In
                </button>
            </div>
            <div>Don't have an account? <Link to="/auth/register" className="text-indigo-500">
                    <strong>Register</strong>
                </Link>     
            </div>
        </form>)
}

export default Login