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


const PriceRatesList: React.FC<{
    openModalHandler: () => void
}> = (props) => {
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
        <div className="w-full md:mt-5 md:w-11/12 md:mx-auto px-5 py-5 max-h-screen overflow-y-scroll">            
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
            
            <div
            className="bg-yellow-500 text-white rounded-full h-10 w-10 absolute bottom-20 right-10 flex justify-center items-center cursor-pointer"
            onClick={props.openModalHandler}>
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