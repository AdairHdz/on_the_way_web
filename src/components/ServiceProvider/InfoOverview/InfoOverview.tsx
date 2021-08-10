import StarRate from "../../UI/StarRate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

const InfoOVerview = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <img
                src="https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=130&w=220"
                alt=""
                className="mr-10 w-full md:w-auto md:mr-0" />
            <div className="flex justify-between w-full">
                <div className="flex flex-grow items-center">
                    <div className="p-5 align">
                        <p className="font-bold text-xl mb-3">ServiExpress</p>
                        <p className="text-md mb-5">Adair Benjamín Hernández Ortiz</p>
                        <StarRate rate={4} />
                    </div>
                </div>
                <div className="p-5">
                    <FontAwesomeIcon
                        icon={faEdit}
                        className="text-2xl text-gray-600" />
                </div>
            </div>
        </div>
    )
}

export default InfoOVerview