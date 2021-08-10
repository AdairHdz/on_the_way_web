import KindOfService from "../../models/kind_of_service"
import PriceRate from "../../models/price_rate"
import WorkingDayBadge from "./WorkingDayBadge"

const PriceRateItem: React.FC<{
    priceRate: PriceRate
}> = (props) => {

    let kindOfService: string

    switch(props.priceRate.kindOfService) {
        case KindOfService.DELIVERY:
            kindOfService = "Entrega"
            break;
        case KindOfService.DRUG_SHOPPING:
            kindOfService = "Compra de fármacos"
            break
        case KindOfService.GROCERY_SHOPPING:
            kindOfService = "Compra de víveres"
            break;
        case KindOfService.OTHER:
            kindOfService = "Otro"
            break
        case KindOfService.SERVICE_PAYMENT:
            kindOfService = "Pago de servicios"
            break
        default:
            kindOfService = "Desconocido"
            break;
    }

    return (
        <div className="shadow-md rounded-lg p-5 text-gray-800 mb-5">
            <div className="flex gap-2">
                {props.priceRate.workingDays.map(workingDay => <WorkingDayBadge workingDay={workingDay} />)}
            </div>            
            <p className="text-lg font-bold"> {props.priceRate.city} </p>
            <p className="font-bold"> {props.priceRate.schedule} </p>
            <p className="font-thin"> {kindOfService} </p>
        </div>
    )
}

export default PriceRateItem