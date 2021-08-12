import { useState } from "react"
import Paginator from "../../components/Paginator/Paginator"
import ServiceFiltersForm from "../../components/Service/ServiceFiltersForm"

import ServiceItem from "../../components/Service/ServiceItem"

const ServicesPage = () => {
    const [displayExtraFilters, setDisplayExtraFilters] = useState(false)

    const toggleDropdownHandler = () => {
        setDisplayExtraFilters((prevState) => !prevState)
    }

    return (
        <div className="lg:flex lg:mt-10 w-full justify-between gap-5 lg:h-full">
            <div className="shadow-md bg-white mb-5 lg:mb-0 p-5 lg:w-1/3">
                <ServiceFiltersForm
                    dropdownToggleHandler={toggleDropdownHandler}
                    displayExtraFilters={displayExtraFilters} />
            </div>
            <div className="lg:flex-grow lg:h-full">
                <div className="bg-white p-5 overflow-y-auto lg:h-full">
                    <ServiceItem className="md:w-2/3 md:mx-auto lg:w-2/3 xl:w-1/2" />
                    <ServiceItem className="md:w-2/3 md:mx-auto lg:w-2/3 xl:w-1/2" />                    
                    <Paginator className="bg-white mt-0 p-5" />
                </div>                
            </div>
        </div>
    )
}

export default ServicesPage