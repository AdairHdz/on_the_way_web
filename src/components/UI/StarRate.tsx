import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StarRate: React.FC<{
    rate: number
}> = (props) => {

    let stars: JSX.Element[] = []    

    for(let i = 0; i < props.rate; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className="text-yellow-300"/>)        
    }
    
    return (
        <div>
            {stars}
        </div>
    )
}

export default StarRate