import { useState } from "react"
import NewPriceRateForm from "../../components/PriceRate/NewPriceRateForm"
import PriceRatesList from "../../components/PriceRate/PriceRatesList"
import ReviewsList from "../../components/Review/ReviewsList"
import InfoOVerview from "../../components/ServiceProvider/InfoOverview/InfoOverview"

const HomePage = () => {
    const [showNewPriceRateForm, setShowNewPriceRateForm] = useState(false)
    
    const openPriceRateFormModal = () => setShowNewPriceRateForm(true)
    const closePriceRateModal = () => setShowNewPriceRateForm(false)

    return (
        <>
            <div className="shadow-md bg-white flex-grow-0 mb-5">
                <InfoOVerview />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 relative py-5 px-6">
                <div className="shadow-md bg-white flex-grow relative lg:w-1/2 xl:w-5/12 mb-5">
                    <p className="text-2xl font-bold p-5 text-center mt-5">Tarifas</p>
                    <PriceRatesList
                        openModalHandler={openPriceRateFormModal} />
                </div>
                <div className="shadow-md bg-white flex-grow mb-5 lg:w-1/2 xl:w-7/12 md:p-5">
                    <p className="text-2xl mb-5 font-bold p-5 text-center mt-5">Reseñas</p>  
                    <ReviewsList />
                </div>
            </div>
            { showNewPriceRateForm && (
                <NewPriceRateForm                
                closeModalHandler={closePriceRateModal} />
            ) }
        </>

    )
}

export default HomePage