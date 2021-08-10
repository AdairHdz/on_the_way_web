import RegistryForm from "../components/RegistryForm/RegistryForm"
import Image from "../assets/images/white-logo.png"

const RegistryPage = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-blue-600 md:bg-white">
            <div className="bg-blue-600 hidden md:w-1/2 h-full md:flex">
                <img src={Image} className="hidden md:block m-auto" alt="" />
            </div>
            <div className="w-full h-full md:w-1/2 flex">
                <RegistryForm />                    
            </div>
        </div>
    )
}

export default RegistryPage