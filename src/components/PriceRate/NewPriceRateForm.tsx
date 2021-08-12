import { Form, Formik } from "formik"
import SelectInput from "../UI/SelectInput"
import StandardInput from "../UI/StandardInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import CheckboxInputWithLetter from "../UI/CheckboxInputWithLetter"
import TimeInput from "../UI/TimeInput"
import Modal from "../UI/Modal"
import * as Yup from "yup"

const NewPriceRateForm: React.FC<{    
    closeModalHandler: () => void
}> = (props) => {
    return (
        <Modal>
            <div className="flex justify-end items-start mb-5">
                <FontAwesomeIcon icon={faTimes} onClick={props.closeModalHandler} className="cursor-pointer" />
            </div>
            <p className="text-center text-lg mb-5">Nueva tarifa</p>
            <Formik
                initialValues={{
                    monday: false,
                    tuesday: false,
                    wednesday: false,
                    thursday: false,
                    friday: false,
                    saturday: false,
                    sunday: false,
                    city: "",
                    kindOfService: "",
                    priceRate: "",
                    startingHour: "",
                    endingHour: ""
                }}
                validationSchema={Yup.object({
                    monday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    tuesday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    wednesday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    thursday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    friday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    saturday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    sunday: Yup.boolean()
                        .oneOf([true, false], "Valor no válido"),
                    city: Yup.string()
                        .required("Por favor seleccione una ciudad")
                        .oneOf(["xalapa"], "Valor no válido"),
                    kindOfService: Yup.string()
                        .required("Por favor seleccione un tipo de servicio")
                        .oneOf(["delivery", "servicePayment", "groceryShopping", "drugsShopping", "other"], "Valor no válido"),
                    priceRate: Yup.number()
                        .required("Por favor fije una tarifa")
                        .min(1, "Por favor fije una tarifa mayor a $0")
                        .max(100, "Lo sentimos; las tarifas mayores a $100 no están permitidas"),
                    startingHour: Yup.string()
                        .oneOf([], "Valor no válido"),
                    endingHour: Yup.string()
                        .oneOf([], "Valor no válido")
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form>
                    <div className="mb-5 flex justify-around">
                        <CheckboxInputWithLetter
                            id="monday"
                            name="monday"
                            letter="L" />
                        <CheckboxInputWithLetter
                            id="tuesday"
                            name="tuesday"
                            letter="M" />
                        <CheckboxInputWithLetter
                            id="wednesday"
                            name="wednesday"
                            letter="M" />
                        <CheckboxInputWithLetter
                            id="thursday"
                            name="thursday"
                            letter="J" />
                        <CheckboxInputWithLetter
                            id="friday"
                            name="friday"
                            letter="V" />
                        <CheckboxInputWithLetter
                            id="saturday"
                            name="saturday"
                            letter="S" />
                        <CheckboxInputWithLetter
                            id="sunday"
                            name="sunday"
                            letter="D" />
                    </div>
                    <SelectInput
                        id="city"
                        name="city" >
                        <option disabled value="">Ciudad</option>
                        <option value="xalapa">Xalapa</option>
                    </SelectInput>
                    <SelectInput
                        id="kindOfService"
                        name="kindOfService" >
                        <option disabled value="">Tipo de servicio</option>
                        <option value="delivery">Entrega</option>
                        <option value="servicePayment">Pago de servicios</option>
                        <option value="groceryShopping">Compra de víveres</option>
                        <option value="drugsShopping">Compra de fármacos</option>
                        <option value="other">Otro</option>                        
                    </SelectInput>
                    <StandardInput
                        id="priceRate"
                        name="priceRate"
                        type="number"
                        placeholder="Tarifa" />
                    <div className="flex justify-between p-5 mb-5">
                        <div className="w-1/2">
                            <TimeInput
                                id="startingHour"
                                name="startingHour"
                                label="Desde"
                                className="block w-3/4 mx-auto" />
                        </div>
                        <div className="w-1/2">
                            <TimeInput
                                id="endingHour"
                                name="endingHour"
                                label="Hasta"
                                className="block w-3/4 mx-auto" />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 rounded-sm block mx-auto py-1 px-5 text-white text-center mb-5">
                        Registrarme
                    </button>
                </Form>
            </Formik>
        </Modal>
    )
}

export default NewPriceRateForm