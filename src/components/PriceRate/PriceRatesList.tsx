import KindOfService from "../../models/kind_of_service"
import PriceRate from "../../models/price_rate"
import WorkingDay from "../../models/working_day"
import Paginator from "../Paginator/Paginator"
import PriceRateItem from "./PriceRateItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import DropdownButton from "../UI/DropdownButton"
import { useState } from "react"
import PriceRateFiltersForm from "./PriceRateFiltersForm"

const PriceRatesList = () => {
    const priceRates = [
        new PriceRate(
            [WorkingDay.MONDAY, WorkingDay.FRIDAY],
            "Xalapa",
            "07:00 - 02:30 P.M.",
            KindOfService.DELIVERY
        ),
        new PriceRate(
            [WorkingDay.FRIDAY, WorkingDay.SATURDAY, WorkingDay.SUNDAY],
            "Xalapa",
            "07:00 - 09:00 P.M.",
            KindOfService.GROCERY_SHOPPING
        ),
        new PriceRate(
            [WorkingDay.MONDAY, WorkingDay.FRIDAY],
            "Xalapa",
            "07:00 - 02:30 P.M.",
            KindOfService.DELIVERY
        ),
        new PriceRate(
            [WorkingDay.FRIDAY, WorkingDay.SATURDAY, WorkingDay.SUNDAY],
            "Xalapa",
            "07:00 - 09:00 P.M.",
            KindOfService.GROCERY_SHOPPING
        ),
    ]    

    const [dropdownIsActive, setDropdownIsActive] = useState(false)

    const toggleHandler = () => {
        setDropdownIsActive((prevState => !prevState))
    }

    return (
        <>
        <div className="w-full md:mt-10 md:w-11/12 md:mx-auto p-5 relative max-h-screen overflow-y-scroll">
            <p className="text-2xl mb-5 font-bold">Tarifas</p>
            <DropdownButton
                isActive={dropdownIsActive}
                textWhenActive="Ocultar filtros"
                textWhenInactive="Más filtros"
                toggleHandler={toggleHandler} />
            { dropdownIsActive && <PriceRateFiltersForm />  }
            {priceRates.map(priceRate => (
                <PriceRateItem
                priceRate={priceRate} />
            ))}
            
            <div className="bg-yellow-500 text-white rounded-full h-10 w-10 absolute bottom-5 right-5 flex justify-center items-center cursor-pointer">
                <span className="inline-block text-center">
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
        </div>
        <Paginator />
        </>
    )
}

export default PriceRatesList