import PriceRatesList from "../../components/PriceRate/PriceRatesList"
import ReviewsList from "../../components/Review/ReviewsList"
import InfoOVerview from "../../components/ServiceProvider/InfoOverview/InfoOverview"

const HomePage = () => {
    return (
        <>
            <div className="shadow-md bg-white flex-grow-0 mb-5">
                <InfoOVerview />
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="shadow-md bg-white flex-grow lg:w-5/12 mb-5">
                    <PriceRatesList />
                </div>
                <div className="shadow-md bg-white flex-grow mb-5 lg:w-7/12">
                    <ReviewsList />
                </div>
            </div>
        </>

    )
}

export default HomePage