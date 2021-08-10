import Layout from "../../components/Layout/Layout"
import PriceRatesList from "../../components/PriceRate/PriceRatesList"
import ReviewsList from "../../components/Review/ReviewsList"
import InfoOVerview from "../../components/ServiceProvider/InfoOverview/InfoOverview"

const HomePage = () => {
    return (
        <Layout>
            <div className="w-full md:mt-10 md:w-11/12 md:mx-auto overflow-y-scroll">
                <div className="shadow-md bg-white flex-grow-0 mb-5">
                    <InfoOVerview />                
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="shadow-md bg-white flex-grow mb-5">
                        <PriceRatesList />
                    </div>
                    <div className="shadow-md bg-white flex-grow mb-5">
                        <ReviewsList />
                    </div>
                </div>
                
            </div>            
        </Layout>
    )
}

export default HomePage