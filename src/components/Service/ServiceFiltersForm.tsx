import { Form, Formik } from "formik"
import CheckboxInput from "../UI/CheckboxInput"
import DropdownButton from "../UI/DropdownButton"
import StandardRoundedInput from "../UI/StandardRoundedInput"

const ServiceFiltersForm: React.FC<{
    displayExtraFilters: boolean,
    dropdownToggleHandler: () => void
}> = (props) => {
    return (
        <Formik
            initialValues={{
                date: "",
                delivery: false,
                servicePayment: false,
                groceryShopping: false,
                drugShopping: false,
                other: false,
                concretized: false,
                canceled: false,
                active: false,
                pendingOfAcceptance: false
            }}
            onSubmit={() => { }}>
            <Form>
                <p className="text-center mb-3">Fecha</p>
                <StandardRoundedInput
                    id="date"
                    name="date"
                    type="date"
                    className="block w-full" />

                <DropdownButton
                    textWhenActive="Ocultar filtros"
                    textWhenInactive="Más filtros"
                    toggleHandler={props.dropdownToggleHandler}
                    isActive={props.displayExtraFilters} />
                {props.displayExtraFilters && (
                    <>
                        <p className="text-lg text-center font-bold mb-5">Tipo de servicio</p>
                        <div className="w-full mx-auto text-center md:flex md:justify-between">
                            <div className="md:flex-grow">
                                <CheckboxInput
                                    id="delivery"
                                    name="delivery"
                                    className="mb-5"
                                    label="Entrega" />
                                <CheckboxInput
                                    id="servicePayment"
                                    name="servicePayment"
                                    className="mb-5"
                                    label="Pago de servicios" />
                                <CheckboxInput
                                    id="groceryShopping"
                                    name="groceryShopping"
                                    className="mb-5"
                                    label="Compra de víveres" />
                                <CheckboxInput
                                    id="drugShopping"
                                    name="drugShopping"
                                    className="mb-5"
                                    label="Compra de fármacos" />
                                <CheckboxInput
                                    id="other"
                                    name="other"
                                    className="mb-5"
                                    label="Otro" />
                            </div>
                        </div>

                        <p className="text-lg text-center font-bold mb-5">Estado</p>
                        <div className="w-full mx-auto text-center md:flex md:justify-between">
                            <div className="md:flex-grow">
                                <CheckboxInput
                                    id="concretized"
                                    name="concretized"
                                    className="mb-5"
                                    label="Concretado" />
                                <CheckboxInput
                                    id="canceled"
                                    name="canceled"
                                    className="mb-5"
                                    label="Cancelado" />
                                <CheckboxInput
                                    id="active"
                                    name="active"
                                    className="mb-5"
                                    label="Activo" />
                                <CheckboxInput
                                    id="pendingOfAcceptance"
                                    name="pendingOfAcceptance"
                                    className="mb-5"
                                    label="Pendiente de aceptación" />
                            </div>
                        </div>
                    </>
                )}
            </Form>
        </Formik>
    )
}

export default ServiceFiltersForm