import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Paginator = () => {
    return (
        <div className="flex justify-around items-center text-blue-600 mb-10">
            <Link to="/">
                <FontAwesomeIcon icon={faStepBackward} />
            </Link>

            <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <span> 1 </span>
            <Link to="/">
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={faStepForward} />
            </Link>                                    
        </div>
    )
}

export default Paginator