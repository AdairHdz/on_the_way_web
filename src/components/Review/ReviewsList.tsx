import Paginator from "../Paginator/Paginator"
import ReviewItem from "./ReviewItem"

const ReviewsList = () => {
    return (
        <>
            <div className="w-full md:mt-10 md:w-11/12 md:mx-auto p-5 overflow-y-scroll max-h-screen">
                <p className="text-2xl mb-5 font-bold">Reseñas</p>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </div>
            <Paginator />
        </>
    )
}

export default ReviewsList