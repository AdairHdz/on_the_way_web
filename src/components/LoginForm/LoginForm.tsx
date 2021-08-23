import { Form, Formik } from 'formik';
import * as Yup from "yup"
import StandardInput from '../UI/StandardInput';
import BlackLogo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

const LoginForm = () => {

    const authContext = useContext(AuthContext)

    return (
        <Formik
            initialValues={{
                emailAddress: "",
                password: "",
            }}
            validationSchema={Yup.object({
                emailAddress: Yup.string()
                    .required("Este campo es obligatorio")
                    .email("Por favor inserte una dirección de correo válida"),
                password: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(8, "Por favor inserte una contraseña de al menos 8 caracteres")
                    .max(50, "Por favor inserte una contraseña de menos de 50 caracteres"),
            })}
            onSubmit={(values) => {
                authContext.login("mi-token")                
            }} >
            <div className="w-full lg:w-4/5 xl:w-2/3 rounded-b-lg lg:rounded-lg mx-auto lg:m-auto bg-white h-full flex">
                <Form className="m-auto w-full px-12">
                    <img src={BlackLogo} className="mx-auto my-10" alt="" />
                    <p className="font-bold text-2xl text-center mb-5">Iniciar sesión</p>
                    <StandardInput
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="Correo electrónico"
                        type="email" />
                    <StandardInput
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        type="password" />
                    <Link to="/" className="text-center block text-sm mt-10">
                        ¿Olvidaste tu contraseña?
                    </Link>
                    <button type="submit" className="bg-yellow-500 rounded-sm block mx-auto py-1 px-5 text-white text-center my-10">
                        Iniciar sesión
                    </button>
                    <Link to="/registry" className="text-center block text-sm text-blue-500">
                        Crear una cuenta
                    </Link>
                </Form>
            </div>
        </Formik>
    )
}

export default LoginForm