import { Form, Formik } from 'formik';
import * as Yup from "yup"
import SelectInput from '../UI/SelectInput';
import StandardInput from '../UI/StandardInput';
import BlackLogo from "../../assets/images/logo.png"

const RegistryForm = () => {
    return (
        <Formik
         initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          password: "",
          state: "",
          userType: ""
         }}
         validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()            
            .required("Este campo es obligatorio")
            .max(30, "Por favor inserte un nombre de menos de 30 caracteres"),
          lastName: Yup.string()
          .trim()            
          .required("Este campo es obligatorio")
          .max(30, "Por favor inserte un apellido de menos de 30 caracteres"),
          emailAddress: Yup.string()
          .required("Este campo es obligatorio")
            .email("Por favor inserte una dirección de correo válida"),
          password: Yup.string()
            .required("Este campo es obligatorio")
            .min(8, "Por favor inserte una contraseña de al menos 8 caracteres")
            .max(50, "Por favor inserte una contraseña de menos de 50 caracteres"),
          state: Yup.string()
            .required("Este campo es obligatorio")
            .oneOf(["Veracruz"], "Por favor seleccione un Estado"),
          userType: Yup.string()
            .required("Este campo es obligatorio")
            .oneOf(["proveedor", "solicitante"], "Por favor seleccione un tipo de usuario")
         })}
         onSubmit={() => {}} >
          <Form className="w-full lg:w-4/5 xl:w-2/3 h-full rounded-b-lg lg:rounded-lg py-2 px-12 lg:m-auto bg-white">
            <img src={BlackLogo} className="mx-auto my-10" alt="" />
            <p className="font-bold text-2xl text-center mb-5">Registro</p>            
            <StandardInput
              id="firstName"
              name="firstName"              
              placeholder="Nombres"
              type="text" />
            <StandardInput
              id="lastName"
              name="lastName"              
              placeholder="Apellidos"
              type="text" />
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
            <SelectInput              
              id="state"
              name="state">
                <option value="">Estado</option>
                <option value="veracruz">Veracruz</option>
            </SelectInput>
            <SelectInput              
              id="userType"
              name="userType">
                <option value="">Tipo de usuario</option>
                <option value="proveedor">Proveedor de servicio</option>
                <option value="solicitante">Solicitante de servicio</option>
            </SelectInput>
            <button className="bg-yellow-500 rounded-sm block mx-auto py-1 px-5 text-white text-center my-10">
              Registrarme
            </button>
          </Form>
        </Formik>  
    )
}

export default RegistryForm