import StarRate from "../UI/StarRate"

const ReviewItem = () => {
    return (
        <div className="shadow-md rounded-lg p-8 text-gray-800 mb-5">
            <p className="font-bold mb-1">
                Buen servicio
            </p>
            <p className="text-gray-400">
                Rey David Martinez Segovia
            </p>
            <p className="text-gray-400 mb-1">
                06/19/2021
            </p>
            <StarRate
                rate={5}
                className="mb-4" />
            <p className="text-justify">
                Buen trato al cliente y además es muy rápido.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero error velit qui distinctio a quas delectus sit saepe corrupti culpa voluptatibus ullam similique assumenda quae adipisci, asperiores quia facere!
                Laboriosam corporis accusamus sint veniam ratione eveniet. Cupiditate eveniet odit fugit sed saepe totam a eius ab ea maiores architecto iure vero repudiandae sequi obcaecati corporis, facilis harum sunt. Repellat.                
            </p>
        </div>
    )
}

export default ReviewItem