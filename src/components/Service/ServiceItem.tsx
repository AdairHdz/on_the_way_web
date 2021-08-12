const ServiceItem: React.FC<{
    className?: string
}> = (props) => {
    return (
        <div className={`rounded-lg bg-blue-600 text-white flex items-center justify-between gap-5 p-2 h-16 max-h-18 mb-5 ${props.className}`}>
            <figure>
                {/* <img
                                src="https://images.pexels.com/photos/3035758/pexels-photo-3035758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80"
                                // height={80}
                                // width={50}
                                className="rounded-full"
                                alt="" /> */}
                <div className="h-14 w-14 rounded-full bg-gray-300"></div>
            </figure>
            <div className="flex-grow">
                <p className="font-bold">Compra de fármacos</p>
                <div className="flex gap-5 font-thin text-gray-100 text-sm">
                    <p>08/03/2020</p>
                    <p>01:56 P.M.</p>
                </div>
            </div>
            <p className="h-full align-top text-sm font-thin mr-2 text-gray-100 italic">Concretado</p>
        </div>
    )
}

export default ServiceItem